import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BrainCircuit, Droplets } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-small-white/[0.2] z-0" />
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-10" />
          <div className="container mx-auto px-4 relative z-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              您的专属Web3投研助理
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
              快人一步捕获Alpha。我们为您精选、分析并提供最有价值的空投和KOL洞察。
            </p>
            <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20">
                立即开始
              </span>
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">为什么选择 AlphaLeads?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="items-center">
                  <Droplets size={48} className="mb-4 text-primary" />
                  <CardTitle>Alpha空投</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    为最有潜力的空投项目提供“保姆级”教程，通过我们精选的机会最大化您的回报。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="items-center">
                  <BrainCircuit size={48} className="mb-4 text-primary" />
                  <CardTitle>KOL洞察</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    我们总结并翻译顶级加密KOL的核心观点。为您节省时间，直击重点。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="items-center">
                  <CheckCircle size={48} className="mb-4 text-primary" />
                  <CardTitle>任务管理</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    连接钱包，使用我们的交互式清单跟踪您的空投进度，不错过任何一个关键步骤。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">选择您的订阅计划</h2>
            <div className="max-w-md mx-auto">
              <Card className="relative bg-card/50 border-primary/50">
                <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
                <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
                <CardHeader className="items-center">
                  <CardTitle className="text-2xl">Pro 会员</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold mb-4">¥199<span className="text-lg font-normal text-muted-foreground">/月</span></p>
                  <ul className="space-y-4 mb-8 text-left">
                    <li className="flex items-center gap-3"><CheckCircle className="text-primary" size={20}/> 解漏所有Alpha空投教程</li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-primary" size={20}/> 无限制访问KOL洞察精粹</li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-primary" size={20}/> 空投项目任务跟踪功能</li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-primary" size={20}/> 优先客户支持</li>
                  </ul>
                  <button className="w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      成为Pro会员
                    </span>
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="about" className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AlphaLeads. 保留所有权利.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="#" className="hover:text-primary">推特</Link>
            <Link href="#" className="hover:text-primary">电报群</Link>
            <Link href="#" className="hover:text-primary">Discord</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
