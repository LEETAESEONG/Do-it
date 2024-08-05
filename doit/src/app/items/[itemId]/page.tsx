"use client";

import { useEffect, useState } from "react";
import getDetail from "@/utils/get-detail";
import { type Detail } from "@/utils/get-detail";
import CheckListDetail from "../../../components/check-lists/check-list-detail";
import CheckListImage from "@/components/check-lists/check-list-image";
import CheckListMemo from "@/components/check-lists/check-list-memo";
import DoitBtn from "@/components/buttons/doitBtn";
import deleteItem from "@/utils/delete-item";
import patchItem from "@/utils/patch-item";
import { useRouter } from "next/navigation";

export default function ItemDetail({
  params,
}: {
  params: {
    itemId: string;
  };
}) {
  const router = useRouter();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [tenantId, setTenantId] = useState("ga1754");
  const [memo, setMemo] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      const tmpDetail: Detail = await getDetail("ga1754", params.itemId);
      setId(tmpDetail.id);
      setName(tmpDetail.name);
      setTenantId(tmpDetail.tenantId);
      if (tmpDetail.memo) {
        setMemo(tmpDetail.memo);
      }
      setImageUrl(tmpDetail.imageUrl);
      setIsCompleted(tmpDetail.isCompleted);
    };
    fetchDetail();
  }, [params.itemId]);

  const handleDelete = async () => {
    try {
      await deleteItem(tenantId, parseInt(id));
      router.replace("/"); // 삭제 후 홈 페이지로 이동
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleUpdate = async () => {
    const data = {
      name,
      memo,
      imageUrl: imageUrl || "",
      isCompleted,
    };

    try {
      const updatedItem = await patchItem(tenantId, parseInt(id), data);
      console.log("Item updated successfully:", updatedItem);
      router.replace("/");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <>
      <div className="w-full grid desktop:grid-cols-12 desktop:gap-6 desktop:grid-rows-none">
        <CheckListDetail
          name={name}
          setIsCompleted={setIsCompleted}
          isCompleted={isCompleted}
        />
        <CheckListImage src={imageUrl} setImageUrl={setImageUrl} />
        <CheckListMemo memo={memo} setMemo={setMemo} />
      </div>
      <div className="w-full desktop:grid desktop:grid-cols-12 desktop:gap-6 desktop:grid-rows-none tablet:justify-center phone:flex phone:justify-center">
        <div className="flex desktop:justify-end desktop:col-end-12 col-span-5 tablet:justify-end tablet:w-full phone:w-full phone:justify-between">
          <DoitBtn
            condition="update"
            isActive={isCompleted}
            onClick={handleUpdate}
          />
          <DoitBtn condition="delete" onClick={handleDelete} />
        </div>
      </div>
    </>
  );
}
