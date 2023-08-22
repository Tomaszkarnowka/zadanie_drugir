import React from "react";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-neutral-content rounded-md max-w-lg shadow-lg relative w-96">
        <div className="flex justify-end p-2">
          <Link href="/" className="text-black ">
            X
          </Link>
        </div>
        <div className="p-5">
          <form
            className="flex flex-col w-full text-foreground"
            action="/auth/sign-up"
            method="post"
          >
            <h3 className="text-xl font-medium text-base-300 ">
              Sign Up to our platform
            </h3>
            <label className="text-md text-base-300" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-md px-4 py-2  border mb-6"
              name="email"
              placeholder="you@example.com"
              required
            />
            <label className="text-md text-base-300" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-md px-4 py-2  border mb-6 "
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
            <button className="bg-accent-focus rounded px-4 py-2 text-base-300 mb-2">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
