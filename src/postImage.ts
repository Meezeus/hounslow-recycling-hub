export default async function postImage(imageFile : File) {
    if (imageFile !== undefined) {

      const res = await fetch(`/api/images/${imageFile.name}`, {
        method: "PUT",
        body: imageFile,
        headers: {
          "content-type": "application/octet-stream",
          Authorization: props.authToken,
        },
      });
      const linktoimage = '${process.env.NEXT_PUBLIC_IMAGE_BUCKET_URL}/${imageFile.name}'
      return linktoimage;
    }
    return "";
  }
