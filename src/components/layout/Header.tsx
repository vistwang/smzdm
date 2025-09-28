import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image src="/globe.svg" alt="AlphaLeads Logo" width={24} height={24} className="dark:invert"/>
          <span className="text-xl font-bold">AlphaLeads</span>
        </Link>
        <nav className="ml-auto flex items-center gap-6 text-sm">
          <Link href="#features" className="hover:text-primary transition-colors" prefetch={false}>
            核心功能
          </Link>
          <Link href="#pricing" className="hover:text-primary transition-colors" prefetch={false}>
            价格方案
          </Link>
          <Link href="#about" className="hover:text-primary transition-colors" prefetch={false}>
            关于我们
          </Link>
          <Button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              连接钱包
            </span>
          </Button>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
}