import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";
import { Authenticated, Unauthenticated, useConvexAuth } from "convex/react";

export default function App() {
  const { isLoading } = useConvexAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Authenticated>
        <LoggedIn />
      </Authenticated>
      <Unauthenticated>
        <LoggedOut />
      </Unauthenticated>
    </>
  );
}
