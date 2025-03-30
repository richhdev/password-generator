import generatePassword from "@/utils/generate-password";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = Object.fromEntries(searchParams.entries());
  const json = generatePassword(query);
  const status = json.hasOwnProperty("error") ? 400 : 200;

  return new Response(JSON.stringify(json), {
    status: status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
