"use client";

import { useEffect, useState } from "react";
import getDetail from "@/utils/get-detail";
import { type Detail } from "@/utils/get-detail";

export default function ItemDetail({
  params,
}: {
  params: {
    itemId: string;
  };
}) {
  const [currentDetail, setCurrentDetail] = useState<Detail>();

  useEffect(() => {
    const fetchDetail = async () => {
      const tmpDetail: Detail = await getDetail("ga1754", params.itemId);
      setCurrentDetail(tmpDetail);
    };
    fetchDetail();
  }, [params.itemId]);
  return <h1>{params.itemId}</h1>;
}
