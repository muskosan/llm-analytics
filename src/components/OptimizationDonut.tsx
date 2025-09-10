import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AlertTriangle, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: 'Passing', value: 23, color: '#22C55E' },
  { name: 'Warnings', value: 5, color: '#F59E0B' },
  { name: 'Critical', value: 2, color: '#EF4444' },
];

const issues = [
  { type: "Critical", count: 2, color: "text-dark-negative", bgColor: "bg-red-500/10", icon: XCircle },
  { type: "Warnings", count: 5, color: "text-yellow-400", bgColor: "bg-yellow-500/10", icon: AlertTriangle },
  { type: "Passing", count: 23, color: "text-dark-positive", bgColor: "bg-green-500/10", icon: CheckCircle },
];

export function OptimizationDonut() {
  const score = 74;

  return (
    <Card className="dark-card border-0">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-dark-primary">Site Optimization Score</CardTitle>
        <CardDescription className="text-dark-secondary font-medium">
          LLM visibility optimization status
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Score and Horizontal Bar */}
        <div className="space-y-4">
          {/* Overall Score */}
          <div className="text-center">
            <div className="text-3xl font-bold text-dark-primary mb-1">{score}%</div>
            <div className="text-sm font-medium text-dark-secondary">Overall Score</div>
          </div>
          
          {/* Inline Horizontal Bars */}
          <div className="flex gap-1 w-full h-3 rounded-full overflow-hidden bg-dark-hover">
            {data.map((item) => {
              const total = data.reduce((sum, d) => sum + d.value, 0);
              const percentage = (item.value / total) * 100;
              
              return (
                <div 
                  key={item.name}
                  className="h-full transition-all duration-300"
                  style={{ 
                    width: `${percentage}%`, 
                    backgroundColor: item.color 
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Issues Breakdown - 3 Column Layout */}
        <div className="grid grid-cols-3 gap-3">
          {issues.map((issue) => {
            const Icon = issue.icon;
            return (
              <div key={issue.type} className="text-center p-3 rounded-xl bg-dark-hover border border-dark-border">
                <div className={`w-10 h-10 rounded-xl ${issue.bgColor} flex items-center justify-center mx-auto mb-2`}>
                  <Icon className={`w-5 h-5 ${issue.color}`} />
                </div>
                <div className="text-lg font-bold text-dark-primary mb-1">{issue.count}</div>
                <div className="text-xs font-medium text-dark-secondary">{issue.type}</div>
              </div>
            );
          })}
        </div>

        {/* Priority Action */}
        <div className="pt-4 border-t border-dark-border">
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-bold text-dark-primary mb-2">Highest Priority Action</h4>
              <p className="text-sm text-dark-secondary font-medium">
                Optimize heading structure &amp; main content tags for better AI parsing
              </p>
            </div>
            <button className="dark-button-secondary w-full gap-2 group flex items-center justify-center whitespace-nowrap">
              View All Actions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}