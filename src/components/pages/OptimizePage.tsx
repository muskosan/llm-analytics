import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Wrench, 
  TrendingUp, 
  Clock,
  Target,
  Globe,
  Eye,
  FileText,
  Shield,
  Search
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const overallScore = 74;
const donutData = [
  { name: 'Passing', value: 23, color: '#10b981' },
  { name: 'Warnings', value: 5, color: '#f59e0b' },
  { name: 'Critical', value: 2, color: '#ef4444' },
];

const progressMetrics = [
  { name: "Content Quality", score: 85, color: "bg-mint-500" },
  { name: "Accessibility & Rendering", score: 72, color: "bg-blue-500" },
  { name: "Answer-friendly Formatting", score: 68, color: "bg-purple-500" },
  { name: "Structured Data & Semantics", score: 78, color: "bg-orange-500" },
  { name: "Discoverability & Crawlability", score: 82, color: "bg-green-500" },
];

const actionItems = [
  {
    id: 1,
    title: "Optimize heading structure for AI parsing",
    impact: "High",
    effort: "Medium", 
    priority: 94,
    confidence: 89,
    affectedUrls: 23,
    tags: ["Technical SEO", "Content Structure"]
  },
  {
    id: 2,
    title: "Add schema markup for better content understanding",
    impact: "High",
    effort: "Low",
    priority: 87,
    confidence: 92,
    affectedUrls: 45,
    tags: ["Structured Data", "EEAT Signals"]
  },
  {
    id: 3,
    title: "Improve meta descriptions for AI snippet optimization",
    impact: "Medium",
    effort: "Low",
    priority: 76,
    confidence: 85,
    affectedUrls: 67,
    tags: ["Content Optimization"]
  },
  {
    id: 4,
    title: "Enhance internal linking structure",
    impact: "Medium",
    effort: "High",
    priority: 65,
    confidence: 78,
    affectedUrls: 89,
    tags: ["Technical SEO", "Navigation"]
  },
];

const technicalIssues = [
  { type: "Critical Issues", count: 2, color: "text-red-600", bgColor: "bg-red-50", icon: XCircle },
  { type: "Warnings", count: 5, color: "text-yellow-600", bgColor: "bg-yellow-50", icon: AlertTriangle },
  { type: "Passing", count: 23, color: "text-green-600", bgColor: "bg-green-50", icon: CheckCircle },
];

export function OptimizePage() {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "bg-red-900/20 text-red-400 border-red-800";
      case "Medium": return "bg-yellow-900/20 text-yellow-400 border-yellow-800";
      case "Low": return "bg-green-900/20 text-green-400 border-green-800";
      default: return "bg-dark-tag text-dark-primary border-dark-border";
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case "High": return "bg-purple-900/20 text-purple-400 border-purple-800";
      case "Medium": return "bg-blue-900/20 text-blue-400 border-blue-800";  
      case "Low": return "bg-dark-positive/20 text-dark-positive border-green-800";
      default: return "bg-dark-tag text-dark-primary border-dark-border";
    }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-dark-card border-b border-dark-border px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-dark-primary">Optimize</h1>
            <p className="text-sm text-dark-secondary mt-1">Improve your LLM visibility with actionable insights</p>
          </div>
          <Button size="sm" className="gap-2 dark-button-primary">
            <Wrench className="w-4 h-4" />
            Fix Issues
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-8 bg-dark-bg">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md bg-dark-card border-dark-border">
            <TabsTrigger value="overview" className="text-dark-secondary data-[state=active]:text-dark-primary data-[state=active]:bg-dark-hover">Overview</TabsTrigger>
            <TabsTrigger value="actions" className="text-dark-secondary data-[state=active]:text-dark-primary data-[state=active]:bg-dark-hover">Actions</TabsTrigger>
            <TabsTrigger value="technical" className="text-dark-secondary data-[state=active]:text-dark-primary data-[state=active]:bg-dark-hover">Technical</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Overall Score Donut */}
              <Card className="dark-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-dark-primary">Overall Score</CardTitle>
                  <CardDescription className="text-dark-secondary">Current optimization status</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="relative mb-6">
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={donutData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {donutData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-dark-primary">{overallScore}%</div>
                        <div className="text-sm text-dark-secondary">Score</div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full dark-button-primary">
                    Fix Issues
                  </Button>
                </CardContent>
              </Card>

              {/* Progress Metrics */}
              <div className="lg:col-span-2">
                <Card className="dark-card h-full">
                  <CardHeader>
                    <CardTitle className="text-dark-primary">Optimization Areas</CardTitle>
                    <CardDescription className="text-dark-secondary">Performance breakdown by category</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {progressMetrics.map((metric) => (
                      <div key={metric.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-dark-primary">{metric.name}</span>
                          <span className="text-sm font-semibold text-dark-primary">{metric.score}%</span>
                        </div>
                        <div className="w-full bg-dark-tag rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full ${metric.color} transition-all duration-300`}
                            style={{ width: `${metric.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Actions Tab */}
          <TabsContent value="actions" className="space-y-6">
            <div className="grid gap-6">
              {actionItems.map((action) => (
                <Card key={action.id} className="dark-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 mr-4">
                        <h3 className="font-semibold text-dark-primary mb-2">{action.title}</h3>
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className={`${getImpactColor(action.impact)} border-dark-border`}>
                              Impact: {action.impact}
                            </Badge>
                            <Badge variant="outline" className={`${getEffortColor(action.effort)} border-dark-border`}>
                              Effort: {action.effort}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {action.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs bg-dark-tag text-dark-primary border-dark-border">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-dark-primary mb-1">{action.priority}</div>
                        <div className="text-xs text-dark-secondary">Priority Score</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-dark-tag rounded-lg">
                        <div className="text-lg font-semibold text-dark-primary">{action.confidence}%</div>
                        <div className="text-xs text-dark-secondary">Confidence</div>
                      </div>
                      <div className="text-center p-3 bg-dark-tag rounded-lg">
                        <div className="text-lg font-semibold text-dark-primary">{action.affectedUrls}</div>
                        <div className="text-xs text-dark-secondary">Affected URLs</div>
                      </div>
                      <div className="text-center p-3 bg-dark-tag rounded-lg">
                        <div className="text-lg font-semibold text-dark-positive">High</div>
                        <div className="text-xs text-dark-secondary">ROI Potential</div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full gap-2 border-dark-border text-dark-primary hover:bg-dark-hover">
                      Show Implementation Details
                      <TrendingUp className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Technical Tab */}
          <TabsContent value="technical" className="space-y-8">
            {/* Issues Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {technicalIssues.map((issue) => {
                const Icon = issue.icon;
                const getDarkBgColor = (type: string) => {
                  switch (type) {
                    case "Critical Issues": return "bg-red-900/20";
                    case "Warnings": return "bg-yellow-900/20";
                    case "Passing": return "bg-green-900/20";
                    default: return "bg-dark-tag";
                  }
                };
                const getDarkIconColor = (type: string) => {
                  switch (type) {
                    case "Critical Issues": return "text-red-400";
                    case "Warnings": return "text-yellow-400";
                    case "Passing": return "text-green-400";
                    default: return "text-dark-secondary";
                  }
                };
                return (
                  <Card key={issue.type} className="dark-card">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 rounded-xl ${getDarkBgColor(issue.type)} flex items-center justify-center mx-auto mb-3`}>
                        <Icon className={`w-6 h-6 ${getDarkIconColor(issue.type)}`} />
                      </div>
                      <div className="text-2xl font-bold text-dark-primary mb-1">{issue.count}</div>
                      <div className="text-sm text-dark-secondary">{issue.type}</div>
                    </CardContent>
                  </Card>
                );
              })}
              
              {/* CTA Card */}
              <Card className="rounded-xl border-2 border-dashed border-dark-positive bg-green-900/10 dark-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-green-900/20 flex items-center justify-center mx-auto mb-3">
                    <Eye className="w-6 h-6 text-dark-positive" />
                  </div>
                  <div className="text-sm font-semibold text-dark-positive mb-1">Unlock Full Insights</div>
                  <div className="text-xs text-green-300">AI crawl insights</div>
                </CardContent>
              </Card>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="crawlability" className="border border-dark-border rounded-xl bg-dark-card dark-shadow px-6">
                  <AccordionTrigger className="hover:no-underline py-6 text-dark-primary">
                    <div className="flex items-center space-x-3">
                      <Search className="w-5 h-5 text-dark-cta" />
                      <span className="font-semibold">Discoverability & Crawlability</span>
                      <Badge variant="secondary" className="bg-dark-tag text-dark-primary border-dark-border">3 issues</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-3">
                      <div className="p-4 bg-red-900/20 rounded-lg border border-red-800">
                        <div className="flex items-start space-x-3">
                          <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                          <div>
                            <div className="font-medium text-red-300">Robots.txt blocking important pages</div>
                            <div className="text-sm text-red-400 mt-1">12 pages affected</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-800">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                          <div>
                            <div className="font-medium text-yellow-300">Slow page load speeds</div>
                            <div className="text-sm text-yellow-400 mt-1">8 pages need optimization</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="accessibility" className="border border-dark-border rounded-xl bg-dark-card dark-shadow px-6">
                  <AccordionTrigger className="hover:no-underline py-6 text-dark-primary">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="font-semibold">Accessibility & Rendering</span>
                      <Badge variant="secondary" className="bg-dark-tag text-dark-primary border-dark-border">1 issue</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-800">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-yellow-300">Missing alt text on images</div>
                          <div className="text-sm text-yellow-400 mt-1">5 images need descriptions</div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="content" className="border border-dark-border rounded-xl bg-dark-card dark-shadow px-6">
                  <AccordionTrigger className="hover:no-underline py-6 text-dark-primary">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-purple-400" />
                      <span className="font-semibold">Content Quality</span>
                      <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-800">All Good</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="p-4 bg-green-900/20 rounded-lg border border-green-800">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-green-300">Content quality meets standards</div>
                          <div className="text-sm text-green-400 mt-1">All pages have good content structure</div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}