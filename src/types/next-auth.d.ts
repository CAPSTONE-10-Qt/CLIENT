import NextAuth, {
  type DefaultSession,
  type DefaultProfile,
  type DefaultUser,
} from "next-auth";
import type { GithubProfile } from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      userId: string;
      name: string;
      image: string;
      email: string;
      accessToken: string;
    } & DefaultSession["user"];
  }
  interface User extends DefaultUser {
    id: number;
  }
}

import { JWT } from "@auth/core/jwt";

declare module "@auth/core/jwt" {
  interface JWT {
    id: number;
    userId: string;
    accessToken: string;
  }
}
