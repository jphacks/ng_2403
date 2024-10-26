import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // サーバサイドの環境変数
  server: {
    /** データベースの接続先のURL */
  },
  // クライアントサイドの環境変数
  client: {
    NEXT_PUBLIC_DATABASE_URL: z.string().url(),
    NEXT_PUBLIC_DATABASE_API_KEY: z.string().min(1),
    NEXT_PUBLIC_DATABASE_AUTH_DOMAIN: z.string().min(1),
    NEXT_PUBLIC_DATABASE_PROJECT_ID: z.string().min(1),
    NEXT_PUBLIC_DATABASE_STORAGE_BUCKET: z.string().min(1),
    NEXT_PUBLIC_DATABASE_APP_ID: z.string().min(1),
    NEXT_PUBLIC_DATABASE_MEASUREMENT_ID: z.string().min(1),
    NEXT_PUBLIC_DATABASE_MESSEGING_SENDER_ID: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
    NEXT_PUBLIC_DATABASE_API_KEY: process.env.NEXT_PUBLIC_DATABASE_API_KEY,
    NEXT_PUBLIC_DATABASE_AUTH_DOMAIN:
      process.env.NEXT_PUBLIC_DATABASE_AUTH_DOMAIN,
    NEXT_PUBLIC_DATABASE_PROJECT_ID:
      process.env.NEXT_PUBLIC_DATABASE_PROJECT_ID,
    NEXT_PUBLIC_DATABASE_STORAGE_BUCKET:
      process.env.NEXT_PUBLIC_DATABASE_STORAGE_BUCKET,
    NEXT_PUBLIC_DATABASE_APP_ID: process.env.NEXT_PUBLIC_DATABASE_APP_ID,
    NEXT_PUBLIC_DATABASE_MEASUREMENT_ID:
      process.env.NEXT_PUBLIC_DATABASE_MEASUREMENT_ID,
    NEXT_PUBLIC_DATABASE_MESSEGING_SENDER_ID:
      process.env.NEXT_PUBLIC_DATABASE_MESSEGING_SENDER_ID,
  },
});
