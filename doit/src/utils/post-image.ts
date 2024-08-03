async function postImage(
  tenantId: string,
  imageFile: File
): Promise<{ url: string }> {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${tenantId}/images/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

export default postImage;
