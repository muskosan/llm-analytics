import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Search, Filter, ExternalLink, Unlock, TrendingUp } from "lucide-react";

const citationsData = [
  {
    dr: 87,
    domain: "techcrunch.com",
    pa: 92,
    url: "/article/ai-tools-comparison-2024",
    sentiment: 85,
    visibility: 94,
    firstSeen: "2024-01-20"
  },
  {
    dr: 78,
    domain: "forbes.com",
    pa: 89,
    url: "/digital-transformation-leaders",
    sentiment: 78,
    visibility: 87,
    firstSeen: "2024-01-18"
  },
  {
    dr: 65,
    domain: "medium.com",
    pa: 72,
    url: "/productivity-tools-review",
    sentiment: 92,
    visibility: 76,
    firstSeen: "2024-01-22"
  },
  {
    dr: 82,
    domain: "wired.com",
    pa: 85,
    url: "/ai-business-automation",
    sentiment: 68,
    visibility: 89,
    firstSeen: "2024-01-19"
  },
  {
    dr: 59,
    domain: "businessinsider.com",
    pa: 76,
    url: "/startup-tools-guide",
    sentiment: 88,
    visibility: 72,
    firstSeen: "2024-01-21"
  },
  {
    dr: 74,
    domain: "venturebeat.com",
    pa: 79,
    url: "/enterprise-software-trends",
    sentiment: 75,
    visibility: 83,
    firstSeen: "2024-01-17"
  }
];

const CircularIndicator = ({ value, type }: { value: number; type: 'sentiment' | 'visibility' }) => {
  const getColor = (val: number, indicatorType: string) => {
    if (indicatorType === 'sentiment') {
      if (val >= 80) return { bg: 'bg-green-900/20', text: 'text-green-400', ring: 'stroke-green-400' };
      if (val >= 60) return { bg: 'bg-yellow-900/20', text: 'text-yellow-400', ring: 'stroke-yellow-400' };
      return { bg: 'bg-red-900/20', text: 'text-red-400', ring: 'stroke-red-400' };
    } else {
      if (val >= 80) return { bg: 'bg-blue-900/20', text: 'text-blue-400', ring: 'stroke-blue-400' };
      if (val >= 60) return { bg: 'bg-purple-900/20', text: 'text-purple-400', ring: 'stroke-purple-400' };
      return { bg: 'bg-dark-tag', text: 'text-dark-secondary', ring: 'stroke-gray-500' };
    }
  };

  const colors = getColor(value, type);
  const circumference = 2 * Math.PI * 12;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-10 h-10">
      <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          r="12"
          stroke="#374151"
          strokeWidth="3"
          fill="transparent"
        />
        <circle
          cx="16"
          cy="16"
          r="12"
          className={colors.ring}
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className={`absolute inset-0 flex items-center justify-center ${colors.bg} rounded-full`}>
        <span className={`text-xs font-semibold ${colors.text}`}>{value}</span>
      </div>
    </div>
  );
};

export function CitationsPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-dark-card border-b border-dark-border px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-dark-primary">Citations</h1>
            <p className="text-sm text-dark-secondary mt-1">Track how AI models cite your content</p>
          </div>
          <Button variant="outline" className="gap-2 border-dark-border text-dark-primary hover:bg-dark-hover">
            <ExternalLink className="w-4 h-4" />
            Export Citations
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-8 bg-dark-bg">
        {/* Search and Filters */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-secondary" />
            <Input
              placeholder="Search citations..."
              className="pl-10 bg-dark-card border-dark-border text-dark-primary placeholder:text-dark-secondary"
            />
          </div>
          <Button variant="outline" size="sm" className="gap-2 border-dark-border text-dark-primary hover:bg-dark-hover">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        {/* Citations Table */}
        <Card className="dark-card mb-8">
          <CardHeader>
            <CardTitle className="text-dark-primary">Citations Overview</CardTitle>
            <CardDescription className="text-dark-secondary">
              Domains and pages where AI models reference your brand
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-dark-border hover:bg-dark-table-hover">
                    <TableHead className="font-semibold text-dark-primary">DR</TableHead>
                    <TableHead className="font-semibold text-dark-primary">Domain</TableHead>
                    <TableHead className="font-semibold text-dark-primary">PA</TableHead>
                    <TableHead className="font-semibold text-dark-primary">URL</TableHead>
                    <TableHead className="font-semibold text-dark-primary text-center">Sentiment</TableHead>
                    <TableHead className="font-semibold text-dark-primary text-center">Visibility</TableHead>
                    <TableHead className="font-semibold text-dark-primary">First Seen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {citationsData.map((citation, index) => (
                    <TableRow 
                      key={index}
                      className="border-dark-border hover:bg-dark-table-hover transition-colors"
                    >
                      <TableCell>
                        <Badge 
                          variant="secondary" 
                          className={`font-medium border-dark-border ${
                            citation.dr >= 80 ? 'bg-green-900/20 text-green-400' :
                            citation.dr >= 60 ? 'bg-yellow-900/20 text-yellow-400' :
                            'bg-red-900/20 text-red-400'
                          }`}
                        >
                          {citation.dr}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-dark-tag rounded-sm flex items-center justify-center">
                            <span className="text-xs font-medium text-dark-secondary">
                              {citation.domain.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <span className="font-medium text-dark-primary">{citation.domain}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm font-medium text-dark-primary">{citation.pa}</span>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        <span className="text-sm text-dark-cta hover:text-blue-300 cursor-pointer truncate block">
                          {citation.url}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <CircularIndicator value={citation.sentiment} type="sentiment" />
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <CircularIndicator value={citation.visibility} type="visibility" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-dark-secondary">
                          {new Date(citation.firstSeen).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Insight Footer */}
        <Card className="dark-card bg-gradient-to-r from-dark-card to-dark-hover">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-dark-tag flex items-center justify-center">
                  <Unlock className="w-6 h-6 text-dark-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-primary mb-1">
                    See all the citations that AI is using to speak about you
                  </h3>
                  <p className="text-sm text-dark-secondary">
                    Get complete citation analytics, source tracking, and competitive intelligence
                  </p>
                </div>
              </div>
              <Button className="dark-button-primary px-8">
                Upgrade
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}