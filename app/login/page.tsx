import React from "react";
import Link from "next/link";
import Messages from "./messages";

export default function Login() {
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
            action="/auth/sign-in"
            method="post"
          >
            <h3 className="text-xl font-medium text-base-300 ">
              Sign in to our platform
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
            <button className="btn btn-outline btn-primary">Sign In</button>
            <Messages />
          </form>
          <div className="flex flex-col">
            <p className="text-black">First time here?</p>
            <Link href="/signup" className="btn btn-outline btn-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
