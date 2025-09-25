import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserCircle2 } from "lucide-react";

export function AppHeader() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image src="/globe.svg" alt="AlphaLeads Logo" width={24} height={24} className="dark:invert"/>
        <span className="text-xl font-bold">AlphaLeads</span>
      </Link>
      <nav className="ml-10 flex gap-4 sm:gap-6">
        <Link href="/airdrops" className="text-sm font-medium text-primary underline underline-offset-4" prefetch={false}>
          Alpha Airdrops
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          KOL Insights
        </Link>
      </nav>
      <div className="ml-auto">
        <Button variant="outline" size="icon">
          <UserCircle2 className="h-5 w-5" />
          <span className="sr-only">User Profile</span>
        </Button>
      </div>
    </header>
  );
}
