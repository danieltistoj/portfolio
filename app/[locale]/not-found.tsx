import Link from "next/link";

import { Button } from "../../components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-6 text-white">
      <div className="max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="text-sm text-white/60">
          The page you are looking for does not exist.
        </p>
        <Button asChild>
          <Link href="/en">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
