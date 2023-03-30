export default async function postImage(
  imageFile: File | undefined,
  authToken: string
) {
  if (imageFile !== undefined) {
    const res = await fetch(`/api/images/${imageFile.name}`, {
      method: "PUT",
      body: imageFile,
      headers: {
        "content-type": "application/octet-stream",
        Authorization: authToken,
      },
    });
    const linktoimage =
      await "${process.env.NEXT_PUBLIC_IMAGE_BUCKET_URL}/${imageFile.name}";
    return linktoimage;
  }
  const n = await "";
  return n;
}
