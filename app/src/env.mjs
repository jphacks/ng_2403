import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // サーバサイドの環境変数
  server: {
    /** データベースの接続先のURL */
    DATABASE_URL: z.string().url(),
    DATABASE_API_KEY: z.string().min(1),
    DATABASE_AUTH_DOMAIN: z.string().min(1),
    DATABASE_PROJECT_ID: z.string().min(1),
    DATABASE_STORAGE_BUCKET: z.string().min(1),
    DATABASE_APP_ID: z.string().min(1),
    DATABASE_MEASUREMENT_ID: z.string().min(1),
    DATABASE_MESSEGING_SENDER_ID: z.string().min(1),
  },
  // クライアントサイドの環境変数
  client: {},
  experimental__runtimeEnv: {},
});
