import { Header } from "@/components/layout/Header";
import Image from "next/image";
import { CheckCircle, BrainCircuit, Droplets } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-24 pb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            您的专属Web3投研助理
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            快人一步捕获Alpha。我们为您精选、分析并提供最有价值的空投和KOL洞察。
          </p>
          <a href="#pricing" className="bg-primary text-white px-8 py-3 font-semibold rounded-lg hover:bg-primary/90 transition-transform hover:scale-105 inline-block">
            立即开始
          </a>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-background/50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">为什么选择 AlphaLeads?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-foreground/10 rounded-lg text-center">
                <Droplets size={48} className="mx-auto mb-4 text-primary" />
                <h4 className="text-xl font-semibold mb-2">Alpha空投</h4>
                <p className="text-foreground/70">
                  为最有潜力的空投项目提供“保姆级”教程，通过我们精选的机会最大化您的回报。
                </p>
              </div>
              <div className="p-8 border border-foreground/10 rounded-lg text-center">
                <BrainCircuit size={48} className="mx-auto mb-4 text-primary" />
                <h4 className="text-xl font-semibold mb-2">KOL洞察</h4>
                <p className="text-foreground/70">
                  我们总结并翻译顶级加密KOL的核心观点。为您节省时间，直击重点。
                </p>
              </div>
              <div className="p-8 border border-foreground/10 rounded-lg text-center">
                <CheckCircle size={48} className="mx-auto mb-4 text-primary" />
                <h4 className="text-xl font-semibold mb-2">任务管理</h4>
                <p className="text-foreground/70">
                  连接钱包，使用我们的交互式清单跟踪您的空投进度，不错过任何一个关键步骤。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">选择您的订阅计划</h3>
            <div className="max-w-md mx-auto bg-foreground/5 border border-foreground/10 rounded-lg p-8">
              <h4 className="text-2xl font-semibold text-center mb-2">Pro 会员</h4>
              <p className="text-4xl font-bold text-center mb-4">¥199<span className="text-lg font-normal text-foreground/70">/月</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><CheckCircle className="text-primary" size={20}/> 解锁所有Alpha空投教程</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-primary" size={20}/> 无限制访问KOL洞察精粹</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-primary" size={20}/> 空投项目任务跟踪功能</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-primary" size={20}/> 优先客户支持</li>
              </ul>
              <button className="w-full bg-primary text-white py-3 font-semibold rounded-lg hover:bg-primary/90">
                成为Pro会员
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="about" className="border-t border-foreground/10 py-8">
        <div className="container mx-auto px-4 text-center text-foreground/70">
          <p>&copy; {new Date().getFullYear()} AlphaLeads. 保留所有权利.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-primary">推特</a>
            <a href="#" className="hover:text-primary">电报群</a>
            <a href="#" className="hover:text-primary">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
