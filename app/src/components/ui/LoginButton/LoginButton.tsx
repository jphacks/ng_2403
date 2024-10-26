import UserInfo from "@/lib/interface/UserInfo";

// components/GoogleLoginButton.tsx
import React from "react";
import { useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { env } from "@/env.mjs";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_DATABASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_DATABASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_DATABASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_DATABASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_DATABASE_MESSEGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_DATABASE_APP_ID,
  measurementId: env.NEXT_PUBLIC_DATABASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const LoginButton: React.FC<UserInfo> = (UserInfo) => {
  const [user, loading, error] = useAuthState(auth);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);

      UserInfo.UserInfoSet({
        id: user?.uid,
        UserInfoSet: UserInfo.UserInfoSet,
      });
    } catch (err) {
      console.error("Google Sign-in Error:", err);
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
};

export default LoginButton;
