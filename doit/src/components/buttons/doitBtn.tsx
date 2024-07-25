import { CheckIcon, PlusIcon } from "@heroicons/react/16/solid";

type BtnType = {
  screen: "phone" | "tablet" | "desktop";
  condition: "add" | "delete" | "update";
  isActive: boolean;
};

export default function DoitBtn(params: BtnType) {
  if (params.condition == "add") {
    if (params.isActive) {
      return (
        <button className="flex">
          <PlusIcon className="w-6 h-6" color="black" />
          <p className="text-base">추가하기</p>
        </button>
      );
    } else {
      return (
        <button>
          <PlusIcon  color="white" />
          <p className="text-white text-base">추가하기</p>
        </button>
      );
    }
  } else if (params.condition == "update") {
    if (params.isActive) {
      return <button></button>;
    } else {
      <button></button>;
    }
  } else {
    <button></button>;
  }
}
