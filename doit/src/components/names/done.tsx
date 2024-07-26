import Image from "next/image";
import done from "./assets/done.png";
export default function Done() {
  return <Image className="mb-4" src={done} alt="done" />;
}
