import { Detail } from "@/utils/get-detail";

type UpdateItemPayload = {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
};

async function updateItem(
  tenantId: string,
  itemId: number,
  data: UpdateItemPayload
): Promise<Detail> {
  try {
    const response = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${itemId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to update item with id ${itemId}`);
    }

    const updatedItem = await response.json();
    return updatedItem;
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
}

export default updateItem;
