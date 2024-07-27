"use client";

import { useState } from "react";
import DoitBtn from "../buttons/doitBtn";

export default function DataInput() {
  const [content, setContent] = useState("");
  const handleButtonClick = async () => {
    if (!content) return alert("no content");

    const tenantId = "ga1754"; // replace with your actual tenantId
    const apiUrl = `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: content }),
      });

      if (response.ok) {
        // 요청이 성공했을 때 처리
        console.log("Item added successfully");
      } else {
        // 요청이 실패했을 때 처리
        console.error("Failed to add item");
      }
      setContent("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-14 flex content-center mb-10 phone:mb-6">
      <input
        className="box-border w-full rounded-3xl border-solid border-slate-900 border-2 pl-6 pr-6  bg-slate-100 shadow-black font-black focus:outline-none"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할 일을 입력해주세요."
      />
      <DoitBtn isActive={false} condition="add" onClick={handleButtonClick} />
    </div>
  );
}
