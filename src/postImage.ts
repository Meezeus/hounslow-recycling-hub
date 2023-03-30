export default function postImage(
  imageFile: File | undefined,
  authToken: string
) {
  if (!imageFile) {
    return;
  }

  let reader = new FileReader();
  reader.readAsDataURL(imageFile!);

  reader.onload = async function () {
    const encodedResult = reader.result;
    const encodedImage = new String(encodedResult).split(",", 2)[1];

    const fileName = imageFile.name.replace(/[^A-Za-z0-9.]/g, "");
    const res = await fetch(`/api/images/${fileName}`, {
      method: "PUT",
      body: encodedImage,
      headers: {
        Authorization: authToken,
      },
    });
    if (res.status === 200) {
      return `${process.env.NEXT_PUBLIC_IMAGE_BUCKET_URL}/${fileName}`;
    } else return "";
  };
}
