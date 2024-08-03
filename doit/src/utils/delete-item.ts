async function deleteItem(
  tenantId: string,
  itemId: number
): Promise<{ message: string }> {
  try {
    const response = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${itemId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to delete item with id ${itemId}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
}

export default deleteItem;
