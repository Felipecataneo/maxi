import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      title: "Customer Insights",
      description: "Extract valuable insights from customer interactions with advanced AI.",
      icon: "📊",
    },
    {
      title: "Behavioral Analysis",
      description: "Understand customer behavior patterns to predict future needs.",
      icon: "🔍",
    },
    {
      title: "Personalization",
      description: "Deliver personalized experiences based on powerful customer intelligence.",
      icon: "🎯",
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect with your existing data infrastructure.",
      icon: "🔄",
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered solutions can transform your customer intelligence capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}