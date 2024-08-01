import Image from "next/image";
import memo from "./assets/memo.png";

export default function CheckListMemo() {
  return (
    <div className="relative h-311 py-6 px-4 rounded-3xl grid justify-center mb-5 desktop:col-start-6 desktop:col-end-12 tablet:w-full phone:w-full phone:mb-4">
      <div className="flex justify-center">
        <p className="relative z-40 text-memo font-black mb-6">Memo</p>
      </div>
      <div className="relative z-40 overflow-y-auto">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything embarrassing hidden in the middle of text. All the
          Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
      <Image src={memo} alt="memo" fill={true} className="rounded-3xl z-0" />
    </div>
  );
}
