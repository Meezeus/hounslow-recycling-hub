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
      const resjson = res.json()
      return resjson;
    }
  }
