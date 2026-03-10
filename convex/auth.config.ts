import { AuthConfig } from "convex/server";

// domain must match the ID token's "iss"; applicationID must match the ID token's "aud".
// Decode your ID token at jwt.io to confirm (use getIdToken() and paste the string).
export default {
  providers: [
    {
      domain: process.env.VITE_KINDE_DOMAIN as string,
      applicationID: process.env.VITE_KINDE_CLIENT_ID as string,
    },
  ],
} satisfies AuthConfig;