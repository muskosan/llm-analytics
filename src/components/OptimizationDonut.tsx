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
        {/* Donut Chart - Made Smaller */}
        <div className="relative">
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={60}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "#1E293B",
                    border: "1px solid #374151",
                    borderRadius: "12px",
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 8px 24px",
                    fontWeight: 500,
                    color: "#FFFFFF"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-dark-primary mb-1">{score}%</div>
              <div className="text-xs font-medium text-dark-secondary">Overall Score</div>
            </div>
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
            <button className="dark-button-secondary w-full gap-2 group">
              View All Actions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}