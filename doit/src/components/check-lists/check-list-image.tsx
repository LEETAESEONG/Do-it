import { useRef } from "react";
import Image from "next/image";
import smallImg from "./assets/img.png";
import { PlusIcon, XMarkIcon } from "@heroicons/react/16/solid";

type Props = {
  src: string | null;
  setImageUrl: (url: string | null) => void;
};

export default function CheckListImage({ src, setImageUrl }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      const eTargetResult = e.target?.result;
      if (typeof eTargetResult === "string") {
        setImageUrl(eTargetResult);
      }
    };
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative h-311 box-border border-dashed border-2 border-slate-300 rounded-3xl flex justify-center items-center hover:opacity-80 mb-5 desktop:col-start-2 desktop:col-end-6 tablet:w-full phone:w-full phone:mb-4">
      {src ? (
        <>
          <Image
            src={src}
            alt="Uploaded Image"
            fill={true}
            className="object-contain"
          />
          <div
            className="absolute bottom-4 right-4 rounded-full border-2 border-slate-900 border-solid size-16 bg-rose-500 flex justify-center items-center cursor-pointer hover:opacity-70"
            onClick={() => {
              setImageUrl(null);
            }}
          >
            <XMarkIcon className="size-10 fill-white" />
          </div>
        </>
      ) : (
        <>
          <Image src={smallImg} alt="Placeholder Image" />
          <div
            className="absolute bottom-4 right-4 rounded-full size-16 bg-slate-200 flex justify-center items-center cursor-pointer hover:opacity-70"
            onClick={handleClick}
          >
            <PlusIcon className="size-10 fill-slate-500" />
          </div>
        </>
      )}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}
