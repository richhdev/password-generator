import generatePassword from "@/utils/generate-password";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const json = generatePassword(request.query);
  const status = json.hasOwnProperty("error") ? 400 : 200;
  response.status(status).json(json);
}
