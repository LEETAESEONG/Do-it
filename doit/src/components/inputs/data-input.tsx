"use client";

import { useState } from "react";
import DoitBtn from "../buttons/doitBtn";

export default function DataInput() {
  const [content, setContent] = useState("");
  return (
    <div className="h-14 flex content-center">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할 일을 입력해주세요."
      />
      <DoitBtn isActive={true} condition="add" screen="desktop" />
    </div>
  );
}
