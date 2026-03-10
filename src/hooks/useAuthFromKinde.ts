import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useCallback, useMemo } from "react";

export default function useAuthFromKinde() {
  const { isLoading, isAuthenticated, getIdToken } = useKindeAuth();
  // Convex requires this function to be named `fetchAccessToken` 
  const fetchAccessToken = useCallback(
    async ({
      forceRefreshToken,
    }: {
      forceRefreshToken: boolean;
    }) => {
      void forceRefreshToken; // Convex passes this; Kinde's getIdToken() has no refresh option
      try {
        const response = await getIdToken();
        return response as string;
      } catch {
        return null;
      }
    },
    [getIdToken],
  );
  return useMemo(
    () => ({ isLoading, isAuthenticated, fetchAccessToken }),
    [isLoading, isAuthenticated, fetchAccessToken],
  );
}