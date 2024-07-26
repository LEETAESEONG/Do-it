import DataInput from "@/components/inputs/data-input";
import Todo from "../components/names/todo";
import Done from "@/components/names/done";

export default function Home() {
  const url =
    "https://assignment-todolist-api.vercel.app/api/ga1754/items?page=1&pageSize=10";
  return (
    <div>
      <DataInput />
      <div className="grid grid-cols-1 desktop:grid-cols-2 gap-6">
        <div className="w-full h-60">
          <Todo />
        </div>
        <div className="w-full h-60">
          <Done />
        </div>
      </div>
    </div>
  );
}
