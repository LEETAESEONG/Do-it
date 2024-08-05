"use client";

import Image from "next/image";
import memo from "./assets/memo.png";
import { useState } from "react";

type Params = {
  setMemo: (memo: string) => void;
  memo: string;
};

export default function CheckListMemo(params: Params) {
  const [isEditing, setIsEditing] = useState(false);

  const handleFocus = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="relative h-311 py-6 px-4 rounded-3xl justify-center mb-5 desktop:col-start-6 desktop:col-end-12 tablet:w-full phone:w-full phone:mb-4">
      <div className="flex justify-center">
        <p className="relative z-40 text-memo font-black">Memo</p>
      </div>
      <div className="relative z-40 size-full p-4">
        {isEditing ? (
          <textarea
            className="bg-transparent w-full h-full text-center resize-none"
            onChange={(e) => params.setMemo(e.target.value)}
            onBlur={handleBlur}
            autoFocus
            placeholder="세부 사항을 입력해주세요."
            value={params.memo}
          />
        ) : (
          <div className="size-full overflow-y-auto flex items-center justify-center">
            <p className="text-center cursor-text" onClick={handleFocus}>
              {params.memo || "세부 사항을 입력해주세요."}
            </p>
          </div>
        )}
      </div>
      <Image
        src={memo}
        alt="memo"
        fill={true}
        className="rounded-3xl z-0"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
