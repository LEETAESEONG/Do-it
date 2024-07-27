"use client";

import Todo from "./todo";
import Done from "./done";
import Names from "./names";
import { useEffect, useState } from "react";
import getItems from "@/utils/get-items";
import NothingTodo from "../nothings/nothingTodo";
import NothingDone from "../nothings/nothingDone";
import { useRouter } from "next/navigation";

type Item = {
  id: string;
  isCompleted: boolean;
  name: string;
};

export default function AllNames() {
  const [todoItems, setTodoItems] = useState<Item[]>([]);
  const [doneItems, setDoneItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      const items: Item[] = await getItems("ga1754", page, pageSize);
      const tmpTodoItems = [];
      const tmpDoneItems = [];
      for (const item of items) {
        if (item.isCompleted) {
          tmpDoneItems.push(item);
        } else {
          tmpTodoItems.push(item);
        }
      }
      setTodoItems(tmpTodoItems);
      setDoneItems(tmpDoneItems);
    };

    fetchItems();
  }, [page, pageSize]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-134 grid grid-cols-1 desktop:grid-cols-2 gap-6">
      <div className="overflow-y-auto">
        <Todo />
        {todoItems.length ? <ManyNames items={todoItems} /> : <NothingTodo />}
      </div>
      <div className="overflow-y-auto">
        <Done />
        {doneItems.length ? <ManyNames items={doneItems} /> : <NothingDone />}
      </div>
    </div>
  );
}

type ManyNamesProps = {
  items: Item[];
};

function ManyNames({ items }: ManyNamesProps) {
  const router = useRouter();
  const handleClick = (itemId: string) => {
    router.push(`/items/${itemId}`);
  };
  return (
    <>
      {items.map((item) => (
        <Names
          key={item.id}
          id={item.id}
          name={item.name}
          isCompleted={item.isCompleted}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </>
  );
}
