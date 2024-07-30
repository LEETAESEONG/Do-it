export type Detail = {
  id: string;
  tenantId: string;
  name: string;
  memo: string | null;
  imageUrl: string | null;
  isCompleted: boolean;
};

const getDetail = async (tenantId: string, itemId: string): Promise<Detail> => {
  const response = await fetch(
    `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${itemId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  const data = await response.json();
  return data;
};

export default getDetail;
