"use client";
import { CheckIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";

type BtnType = {
  condition: "add" | "delete" | "update";
  isActive: boolean;
  onClick?: () => void;
};

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // 초기 설정
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowWidth;
}

export default function DoitBtn(params: BtnType) {
  const windowWidth = useWindowWidth();
  const isHidden = windowWidth !== 0 && windowWidth < 640; // 예: 640px 이하에서는 숨기기
  if (params.condition == "add") {
    if (params.isActive) {
      if (isHidden) {
        return (
          <button
            onClick={params.onClick}
            className="box-border ml-4 w-14 h-14 flex items-center justify-center rounded-3xl border-solid border-slate-900 border-2 hover:opacity-70 bg-slate-200 shadow-black"
          >
            <PlusIcon className="size-6" color="black" />
          </button>
        );
      }
      return (
        <button
          onClick={params.onClick}
          className="box-border ml-4 flex items-center w-42 h-14 justify-center rounded-3xl border-solid border-slate-900 border-2 hover:opacity-70 bg-slate-200 font-black shadow-black"
        >
          <PlusIcon className="size-6" color="black" />
          <p className="text-base">추가하기</p>
        </button>
      );
    } else {
      if (isHidden) {
        return (
          <button
            onClick={params.onClick}
            className="box-border ml-4 w-14 h-14 flex items-center justify-center rounded-3xl border-solid border-slate-900 border-2 hover:opacity-70 bg-violet-600 shadow-black"
          >
            <PlusIcon className="size-6" color="white" />
          </button>
        );
      }
      return (
        <button
          onClick={params.onClick}
          className="box-border ml-4 flex items-center w-42 h-14 justify-center rounded-3xl border-solid border-slate-900 border-2 hover:opacity-70 bg-violet-600 font-black shadow-black"
        >
          <PlusIcon className="size-6" color="white" />
          <p className="text-white text-base">추가하기</p>
        </button>
      );
    }
  } else if (params.condition == "update") {
    if (params.isActive) {
      return (
        <button className="box-border ml-4 flex items-center w-42 h-14 justify-center rounded-3xl border-solid border-slate-900 border-2 hover:opacity-70 bg-slate-200 font-black shadow-black"></button>
      );
    } else {
      <button className="box-border ml-4 flex items-center w-42 h-14 justify-center rounded-3xl border-solid border-slate-900 border-2 hover:opacity-70 bg-slate-200 font-black shadow-black"></button>;
    }
  } else {
    <button className="box-border ml-4 flex items-center w-42 h-14 justify-center rounded-3xl border-solid border-slate-900 border-2 hover:opacity-70 bg-slate-200 font-black shadow-black"></button>;
  }
}
