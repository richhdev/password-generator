import generatePassword from "@/utils/generate-password";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const options = request.query;
  const result = generatePassword(options);
  const statusCode = typeof result === "string" ? 200 : 400;
  const bodyJson = result
    ? { password: result }
    : { error: "At least one option must be set to true" };

  response.status(statusCode).json(bodyJson);
}
