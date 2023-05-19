import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mysearchparam = searchParams.get("mysearchparam");

  console.log(mysearchparam);

  return new Response(JSON.stringify({ name: "jhon" }), {
    status: 401,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("Post Request", body);

  return new Response("OK");
}
