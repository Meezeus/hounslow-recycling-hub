import type { NextApiRequest, NextApiResponse } from "next";

const api = "https://f6omof7w1e.execute-api.eu-west-1.amazonaws.com/prod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // construct url
  const { param } = req.query;
  const category = param !== undefined ? param[0] : "";
  const id = param !== undefined ? param[1] : "";
  const url = `${api}/${category}` + `${id !== undefined ? `/${id}` : ""}`;
  const token =
    req.headers.authorization !== undefined ? req.headers.authorization : "";

  // construct headers
  const headers = {
    "content-type": "application/json",
    "x-api-key": `${process.env.FRONTEND_APIKEY}`,
    Authorization: token,
  };

  // handle requests
  if (req.method === "GET" || req.method === "DELETE") {
    const resapi = await fetch(url, {
      method: req.method,
      mode: "cors",
      headers: headers,
    });
    res.status(resapi.status).json(resapi.body);
  } else if (req.method === "PATCH" || req.method === "POST") {
    const resapi = await fetch(url, {
      method: req.method,
      mode: "cors",
      body: JSON.stringify(req.body),
      headers: headers,
    });
    res.status(resapi.status).json(req.body);
  }
}
