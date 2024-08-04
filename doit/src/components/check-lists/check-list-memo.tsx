import Image from "next/image";
import memo from "./assets/memo.png";

type Params = {
  setMemo: (memo: string) => void;
  memo: string;
};

export default function CheckListMemo(params: Params) {
  return (
    <div className="relative h-311 py-6 px-4 rounded-3xl justify-center mb-5 desktop:col-start-6 desktop:col-end-12 tablet:w-full phone:w-full phone:mb-4">
      <div className="flex justify-center">
        <p className="relative z-40 text-memo font-black">Memo</p>
      </div>
      <div className="relative flex z-40 overflow-y-auto items-center size-full p-4">
        <textarea
          className="bg-transparent w-full h-full text-center resize-none overflow-hidden flex items-center justify-center"
          onChange={(e) => params.setMemo(e.target.value)}
          placeholder="세부 사항을 입력해주세요."
          style={{ padding: 0, lineHeight: "231px" }} // 텍스트를 수직 중앙에 맞추기 위해 높이 조정
        />
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
