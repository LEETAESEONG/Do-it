"use client";

import { useEffect, useState } from "react";
import getDetail from "@/utils/get-detail";
import { type Detail } from "@/utils/get-detail";
import CheckListDetail from "../../../components/check-lists/check-list-detail";
import CheckListImage from "@/components/check-lists/check-list-image";
import CheckListMemo from "@/components/check-lists/check-list-memo";
import DoitBtn from "@/components/buttons/doitBtn";

export default function ItemDetail({
  params,
}: {
  params: {
    itemId: string;
  };
}) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [tenantId, setTenantId] = useState("ga1754");
  const [memo, setMemo] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      const tmpDetail: Detail = await getDetail("ga1754", params.itemId);
      setId(tmpDetail.id);
      setName(tmpDetail.name);
      setTenantId(tmpDetail.tenantId);
      setMemo(tmpDetail.memo);
      setImageUrl(tmpDetail.imageUrl);
      setIsCompleted(tmpDetail.isCompleted);
    };
    fetchDetail();
  }, [params.itemId]);
  return (
    <>
      <div className="w-full grid desktop:grid-cols-12 desktop:gap-6 desktop:grid-rows-none">
        <CheckListDetail
          name={name}
          setIsCompleted={setIsCompleted}
          isCompleted={isCompleted}
        />
        <CheckListImage src={imageUrl} setImageUrl={setImageUrl} />
        <CheckListMemo />
      </div>
      <div className="w-full desktop:grid desktop:grid-cols-12 desktop:gap-6 desktop:grid-rows-none tablet:justify-center phone:flex phone:justify-center">
        <div className="flex desktop:justify-end desktop:col-end-12 col-span-5 tablet:justify-end tablet:w-full phone:w-full phone:justify-between">
          <DoitBtn condition="update" isActive={isCompleted} />
          <DoitBtn condition="delete" />
        </div>
      </div>
    </>
  );
}
