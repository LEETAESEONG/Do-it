"use client";

import { useEffect, useState } from "react";
import getDetail from "@/utils/get-detail";
import { type Detail } from "@/utils/get-detail";
import CheckListDetail from "../../../components/check-lists/check-list-detail";

export default function ItemDetail({
  params,
}: {
  params: {
    itemId: string;
  };
}) {
  const [currentDetail, setCurrentDetail] = useState<Detail>({
    id: -1,
    tenantId: "ga1754",
    name: "",
    memo: "",
    imageUrl: "",
    isCompleted: false,
  });

  useEffect(() => {
    const fetchDetail = async () => {
      const tmpDetail: Detail = await getDetail("ga1754", params.itemId);
      setCurrentDetail(tmpDetail);
    };
    fetchDetail();
  }, [params.itemId]);
  return (
    <div className="w-full grid desktop:grid-cols-12 desktop:gap-6 desktop:grid-rows-none tablet:grid-rows-4 tablet:gap-5 phone:grid-rows-4 phone:gap-4">
      <CheckListDetail name={currentDetail.name} />
    </div>
  );
}
