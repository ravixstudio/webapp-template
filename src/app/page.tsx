import {Button} from "@//components/ui/button";
import Link from 'next/link'

export default function Page() {
  return (
    <main className={"flex items-center justify-center min-h-dvh"}>
      <div className={"flex items-center gap-2 flex-col"}>
        <h1>This is your landing page</h1>
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
      </div>
    </main>
  );
}