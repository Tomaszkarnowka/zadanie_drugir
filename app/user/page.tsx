import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
interface User {
  email: string;
}
export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  interface User {
    email: string;
  }

  const {
    data: { user },
  } = (await supabase.auth.getUser()) as { data: { user: User } };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-neutral-content p-8 rounded-lg shadow-md w-96 text-center">
        <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center bg-blue-200 text-blue-700 text-6xl">
          {user.email.charAt(0)}
        </div>
        <h1 className="text-2xl font-bold mb-4 text-black">{user.email}</h1>
        <button className="bg-accent text-white p-2 rounded-md hover:bg-accent-focus focus:outline-none focus:ring focus:ring-blue-200 ">
          Edytuj profil
        </button>
      </div>
    </div>
  );
}
