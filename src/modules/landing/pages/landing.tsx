"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUserStore } from "@/store";

export function LandingPage() {
  const { user } = useUserStore();
  console.log(user);
  return (
    <main className={"flex items-center justify-center min-h-dvh"}>
      <div className={"flex items-center gap-2 flex-col"}>
        <h1>This is your landing page</h1>

        {user ? (
          <div>
            <h1>
              Welcome, {user.firstName} {user.lastName}
            </h1>
          </div>
        ) : (
          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </main>
  );
}
