import Image from "next/image";
import smallImg from "./assets/img.png";

type Props = {
  src: string;
};

export default function CheckListImage(params: Props) {
  if (params.src !== "") {
    return <Image src={params.src} alt="mainImage" />;
  }
  return (
    <div className="box-border border-dashed border-2 border-slate-300 ">
      <Image src={smallImg} alt="smallImg" />
      <div></div>
    </div>
  );
}
