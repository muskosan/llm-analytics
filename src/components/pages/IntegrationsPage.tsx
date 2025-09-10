import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink, Code, BarChart3, MessageSquare } from "lucide-react";

const integrations = [
  {
    title: "API",
    description: "Build your own integrations",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    textColor: "text-dark-cta"
  },
  {
    title: "Looker Studio",
    description: "Bring scores into dashboards", 
    icon: BarChart3,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    textColor: "text-dark-positive"
  },
  {
    title: "Request",
    description: "Submit integration request",
    icon: MessageSquare,
    color: "from-purple-500 to-purple-600", 
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-400"
  }
];

export function IntegrationsPage() {
  return (
    <>
      <header className="bg-dark-bg border-b border-dark-border px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-dark-primary">Integrations</h1>
            <p className="text-sm text-dark-secondary mt-1">Connect AI8 Digital with your existing tools</p>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          {integrations.map((integration) => {
            const Icon = integration.icon;
            return (
              <Card 
                key={integration.title}
                className="dark-card border-0 hover:bg-dark-hover transition-all duration-200 group cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${integration.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="mb-3 text-dark-primary">{integration.title}</CardTitle>
                  <CardDescription className="mb-6 text-dark-secondary">
                    {integration.description}
                  </CardDescription>
                  <button className="dark-button-secondary w-full gap-2 group-hover:bg-dark-hover">
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 max-w-4xl">
          <Card className="dark-card border-0 bg-gradient-to-r from-dark-card to-dark-hover">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-dark-primary mb-4">
                  Need a Custom Integration?
                </h3>
                <p className="text-dark-secondary mb-6">
                  Our team can help you build custom integrations to fit your specific workflow needs.
                </p>
                <button className="dark-button-primary">
                  Contact Our Team
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}