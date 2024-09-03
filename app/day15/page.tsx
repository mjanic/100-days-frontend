"use client";

import SignUp from "./SignUp";
import SignUpWithEmail from "./SignUpWithEmail";

import { useState } from "react";

export default function Day14() {
  const [withEmail, setWithEmail] = useState(false);

  return (
    <div className="h-[100vh] flex items-center justify-center">
      {withEmail ? <SignUpWithEmail /> : <SignUp setWithEmail={setWithEmail} />}
    </div>
  );
}
