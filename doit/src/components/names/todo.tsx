import Image from "next/image";
import todo from "./assets/todo.png";
export default function Todo() {
  return <Image className="mb-4" src={todo} alt="todo" />;
}
