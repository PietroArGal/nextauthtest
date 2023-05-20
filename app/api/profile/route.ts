export const runtime = "edge";

export async function GET() {
  return new Response(
    JSON.stringify({
      name: "Capoo",
      age: 22,
    }),
    {
      status: 200,
    }
  );
}
