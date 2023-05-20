import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: String;
      dni: Number;
    } & DefaultSession["user"];
  }
}
