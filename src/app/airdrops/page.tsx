import { AppHeader } from "@/components/layout/AppHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tag } from "lucide-react";

export default function AirdropsPage() {
  // Placeholder data based on the project plan
  const airdrops = [
    {
      logo: "/file.svg", // Placeholder logo
      name: "Project Zeta",
      description: "A next-gen DeFi protocol on Solana.",
      reward: "~$500",
      difficulty: "中",
      cost: "< 50U",
      status: "正在进行",
      progress: 75,
    },
    {
      logo: "/file.svg",
      name: "LayerSync",
      description: "The first ZK-rollup for decentralized storage.",
      reward: "未知",
      difficulty: "高",
      cost: "> 50U",
      status: "正在进行",
      progress: 40,
    },
    {
      logo: "/file.svg",
      name: "TokenFlow",
      description: "A decentralized exchange with low slippage.",
      reward: "~$150",
      difficulty: "低",
      cost: "0U",
      status: "即将开始",
      progress: 0,
    },
    {
      logo: "/file.svg",
      name: "EthBridge",
      description: "Cross-chain bridge for Ethereum and Cosmos.",
      reward: "已发币",
      difficulty: "中",
      cost: "< 50U",
      status: "已发币",
      progress: 100,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Alpha Airdrops</h1>
          {/* Filters would go here */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {airdrops.map((airdrop, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src={airdrop.logo} alt={`${airdrop.name} logo`} className="w-12 h-12 rounded-full dark:invert" />
                  <div>
                    <CardTitle>{airdrop.name}</CardTitle>
                    <CardDescription>{airdrop.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant={airdrop.status === "正在进行" ? "default" : "secondary"}>{airdrop.status}</Badge>
                  <div className="text-lg font-semibold">{airdrop.reward}</div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>任务难度</span>
                    <span className="font-medium text-foreground">{airdrop.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>预估成本</span>
                    <span className="font-medium text-foreground">{airdrop.cost}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2">
                 <div className="w-full">
                    <p className="text-sm text-muted-foreground mb-1">任务进度: {airdrop.progress}%</p>
                    <Progress value={airdrop.progress} />
                 </div>
                <Button className="w-full">
                  查看交互教程
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
