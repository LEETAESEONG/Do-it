import Image from "next/image";
import nothingTodoLarge from "./assets/no-todo-large.png";
import nothingTodoSmall from "./assets/no-todo-small.png";

export default function NothingTodo() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid justify-items-center">
        <Image
          className="hidden tablet:block desktop:block"
          src={nothingTodoLarge}
          alt="nothingTodoLarge"
        />
        <Image
          className="block tablet:hidden desktop:hidden"
          src={nothingTodoSmall}
          alt="nothingTodoSmall"
          priority
        />
        <div className="grid mt-4 justify-items-center">
          <p className="m-0 text-nothing">아직 다 한 일이 없어요</p>
          <p className="m-0 text-nothing">해야 할 일을 체크해보세요!</p>
        </div>
      </div>
    </div>
  );
}
