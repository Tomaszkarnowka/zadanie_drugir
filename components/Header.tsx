import * as React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";

export const dynamic = "force-dynamic";
interface User {
  email: string;
}

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = (await supabase.auth.getUser()) as { data: { user: User | null } };

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      {user ? (
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center bg-blue-200 text-blue-700 text-6xl">
                {user.email.charAt(0)}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-info-content rounded-box w-52"
            >
              <li>
                <Link href="/user">
                  <button className="">Profile</button>
                </Link>
              </li>
              <li>
                <form action="/auth/sign-out" method="post">
                  <button className="">Logout</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link href="/login" className="btn btn-active btn-primary mr-4">
          Login
        </Link>
      )}
    </div>
  );
}
