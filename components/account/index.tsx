import { useSession as AuthSession, signIn, signOut } from "next-auth/react";
import React from "react";

const index: React.FC = () => {
    const { data: session } = AuthSession();
  return (
    <>
      {session ? (
          <>
            <h1>Signed in as {session.user.email}</h1>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
    </>
  );
};

export default index;
