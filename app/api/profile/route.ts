import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export async function GET() {
  return new Response(
    JSON.stringify({
      name: "Capoo Cat",
    }),
    {
      status: 200,
    }
  );
}
