export type Detail = {
  id: string;
  tenantId: string;
  name: string;
  memo: string | null;
  imageUrl: string | null;
  isCompleted: boolean;
};

const getDetail = async (tenantId: string, itemId: string): Promise<Detail> => {
  try {
    const response = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${itemId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch item details");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching item details:", error);
    throw error;
  }
};

export default getDetail;
