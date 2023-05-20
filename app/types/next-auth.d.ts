import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import type UserType from "./user";

declare module "next-auth" {
  interface Session {
    user: UserType & {
      id: string;
      dni: number;
      name: string;
      email: string;
      image: string;
    };
  }
  interface User {
    id: string;
    dni: number;
    name: string;
    email: string;
    image: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    dni: number;
    name: string;
    email: string;
    image: string;
  }
}
