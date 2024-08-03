type PostItemPayload = {
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
};

async function postItem(tenantId: string, data: PostItemPayload): Promise<any> {
  try {
    const response = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to create item`);
    }

    const newItem = await response.json();
    return newItem;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
}

export default postItem;
