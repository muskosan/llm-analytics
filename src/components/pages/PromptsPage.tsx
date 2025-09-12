import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import { Progress } from "../ui/progress";
import { Plus, Search, Filter, MoreVertical, Play, Pause } from "lucide-react";
import { Input } from "../ui/input";

const promptsData = [
  {
    id: 1,
    text: "What are the best project management tools for remote teams in 2024?",
    status: true,
    visibility: 94,
    presence: 82,
    runCount: 1247,
    lastRun: "2 hours ago"
  },
  {
    id: 2,
    text: "How to implement AI chatbots for customer service automation?",
    status: true,
    visibility: 89,
    presence: 76,
    runCount: 892,
    lastRun: "4 hours ago"
  },
  {
    id: 3,
    text: "Best practices for digital marketing automation in 2024",
    status: false,
    visibility: 85,
    presence: 71,
    runCount: 756,
    lastRun: "1 day ago"
  },
  {
    id: 4,
    text: "Software development lifecycle management tools comparison",
    status: true,
    visibility: 82,
    presence: 68,
    runCount: 634,
    lastRun: "6 hours ago"
  },
  {
    id: 5,
    text: "Cloud infrastructure security best practices and tools",
    status: true,
    visibility: 78,
    presence: 64,
    runCount: 523,
    lastRun: "3 hours ago"
  },
  {
    id: 6,
    text: "Enterprise data analytics platforms for business intelligence",
    status: false,
    visibility: 74,
    presence: 59,
    runCount: 445,
    lastRun: "2 days ago"
  },
  {
    id: 7,
    text: "Mobile app development frameworks comparison 2024",
    status: true,
    visibility: 71,
    presence: 56,
    runCount: 387,
    lastRun: "8 hours ago"
  },
];

export function PromptsPage() {
  const [selectedPrompts, setSelectedPrompts] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectAll = () => {
    if (selectedPrompts.length === promptsData.length) {
      setSelectedPrompts([]);
    } else {
      setSelectedPrompts(promptsData.map(p => p.id));
    }
  };

  const handleSelectPrompt = (id: number) => {
    setSelectedPrompts(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  const filteredPrompts = promptsData.filter(prompt =>
    prompt.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <header className="bg-dark-card border-b border-dark-border px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-dark-primary">Prompts</h1>
            <p className="text-sm text-dark-secondary mt-1">Manage and monitor your AI prompt performance</p>
          </div>
          <Button size="sm" className="gap-2 dark-button-primary">
            <Plus className="w-4 h-4" />
            Add New Prompt
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-8 bg-dark-bg">
        {/* Search and Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-secondary" />
              <Input
                placeholder="Search prompts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-dark-card border-dark-border text-dark-primary placeholder:text-dark-secondary"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2 border-dark-border text-dark-primary hover:bg-dark-hover">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
          {selectedPrompts.length > 0 && (
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-dark-tag text-dark-primary border-dark-border">{selectedPrompts.length} selected</Badge>
              <Button variant="outline" size="sm" className="border-dark-border text-dark-primary hover:bg-dark-hover">Bulk Enable</Button>
              <Button variant="outline" size="sm" className="border-dark-border text-dark-primary hover:bg-dark-hover">Bulk Disable</Button>
            </div>
          )}
        </div>

        <Card className="dark-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-dark-primary">Active Prompts</CardTitle>
                <CardDescription className="text-dark-secondary">
                  Monitor performance and manage your prompt portfolio
                </CardDescription>
              </div>
              <Badge variant="outline" className="font-medium border-dark-border text-dark-primary">
                {filteredPrompts.length} prompts
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-dark-border hover:bg-dark-table-hover transition-colors duration-200">
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedPrompts.length === promptsData.length}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead className="font-semibold text-dark-primary">Prompt Text</TableHead>
                    <TableHead className="font-semibold text-dark-primary w-20">Status</TableHead>
                    <TableHead className="font-semibold text-dark-primary w-32">Visibility</TableHead>
                    <TableHead className="font-semibold text-dark-primary w-24">Presence %</TableHead>
                    <TableHead className="font-semibold text-dark-primary w-24">Run Count</TableHead>
                    <TableHead className="font-semibold text-dark-primary w-28">Last Run</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPrompts.map((prompt) => (
                    <TableRow 
                      key={prompt.id}
                      className="border-dark-border hover:bg-dark-table-hover transition-colors"
                    >
                      <TableCell>
                        <Checkbox
                          checked={selectedPrompts.includes(prompt.id)}
                          onCheckedChange={() => handleSelectPrompt(prompt.id)}
                        />
                      </TableCell>
                      <TableCell className="max-w-md">
                        <p className="text-sm font-medium text-dark-primary leading-relaxed">
                          {prompt.text}
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={prompt.status}
                            size="sm"
                          />
                          {prompt.status ? (
                            <Play className="w-4 h-4 text-dark-positive" />
                          ) : (
                            <Pause className="w-4 h-4 text-dark-secondary" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-dark-secondary">Score</span>
                            <span className="font-medium text-dark-primary">{prompt.visibility}/100</span>
                          </div>
                          <Progress value={prompt.visibility} className="h-2" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm font-medium text-dark-primary">
                          {prompt.presence}%
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="font-medium bg-dark-tag text-dark-primary border-dark-border">
                          {prompt.runCount.toLocaleString()}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-dark-secondary">
                          {prompt.lastRun}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="text-dark-secondary hover:text-dark-primary hover:bg-dark-hover">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}