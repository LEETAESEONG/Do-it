type Item = {
  id: string;
  isCompleted: boolean;
  name: string;
};

const getItems = async (
  tenantId: string,
  page: number = 1,
  pageSize: number = 10
): Promise<Item[]> => {
  const response = await fetch(
    `https://assignment-todolist-api.vercel.app/api/${tenantId}/items?page=${page}&pageSize=${pageSize}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  const data = await response.json();
  return data;
};

export default getItems;
