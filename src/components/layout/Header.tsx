import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
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
          <Button>
            连接钱包
          </Button>
        </nav>
      </div>
    </header>
  );
}
