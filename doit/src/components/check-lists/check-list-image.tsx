import { useRef, useState } from "react";
import Image from "next/image";
import smallImg from "./assets/img.png";
import { PlusIcon, XMarkIcon } from "@heroicons/react/16/solid";
import postImage from "@/utils/post-image"; // 경로를 실제 위치로 수정하세요

type Props = {
  src: string | null;
  setImageUrl: (url: string | null) => void;
};

export default function CheckListImage({ src, setImageUrl }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const uploadResult = await postImage("ga1754", file);
      setImageUrl(uploadResult.url);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteClick = async () => {
    try {
      // URL을 빈 문자열로 설정
      setImageUrl(null);
      // 이미지 삭제 로직 추가 (필요한 경우 서버에도 삭제 요청)
    } catch (error) {
      console.error("Error removing image:", error);
    }
  };

  return (
    <div className="relative h-311 box-border border-dashed border-2 border-slate-300 rounded-3xl flex justify-center items-center hover:opacity-80 mb-5 desktop:col-start-2 desktop:col-end-6 tablet:w-full phone:w-full phone:mb-4">
      {src ? (
        <>
          <Image
            src={src}
            alt="Uploaded Image"
            fill={true}
            sizes="width: 100%"
            className="rounded-3xl"
          />
          <div
            className="absolute bottom-4 right-4 rounded-full border-2 border-slate-900 border-solid size-16 bg-rose-500 flex justify-center items-center cursor-pointer hover:opacity-70"
            onClick={handleDeleteClick}
          >
            <XMarkIcon className="size-10 fill-white" />
          </div>
        </>
      ) : (
        <>
          {isUploading ? (
            <div>Uploading...</div>
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
