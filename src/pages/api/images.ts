import type { NextApiRequest, NextApiResponse } from "next";

const api = process.env.API_URL;
const ibn = process.env.IMAGE_BUCKET_NAME;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // construct url
  const { param } = req.query;
  const filename = param !== undefined ? param[0] : "";
  const url = `${api}/images/${ibn}/${filename}`;
  const token =
    req.headers.authorization !== undefined ? req.headers.authorization : "";

  // construct headers
  const headers = {
    "content-type": "application/octet-stream",
    "x-api-key": `${process.env.FRONTEND_APIKEY}`,
    Authorization: token,
  };

  if (req.method === "PUT") {
    const resapi = await fetch(url, {
      method: req.method,
      mode: "cors",
      body: req.body,
      headers: headers,
    });
    const resapijson = await resapi.json();
    res.status(resapi.status).json(resapijson);
  }
}
