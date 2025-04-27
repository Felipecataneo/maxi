import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function Methodology() {
  return (
    <section id="methodology" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Methodology</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven approach to implementing AI-powered customer intelligence
          </p>
        </div>

        <Tabs defaultValue="discover" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="analyze">Analyze</TabsTrigger>
            <TabsTrigger value="implement">Implement</TabsTrigger>
            <TabsTrigger value="optimize">Optimize</TabsTrigger>
          </TabsList>
          
          <TabsContent value="discover">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                    <h3 className="text-xl font-bold mb-2">Discovery Phase</h3>
                    <p className="text-gray-600">
                      We begin by understanding your business goals, existing data infrastructure, 
                      and specific challenges.
                    </p>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 rounded-lg shadow">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Stakeholder interviews and workshops</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Data audit and assessment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Opportunity identification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Strategy development and roadmap creation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analyze">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                    <h3 className="text-xl font-bold mb-2">Analysis Phase</h3>
                    <p className="text-gray-600">
                      We analyze your customer data using advanced AI algorithms to uncover 
                      patterns and insights.
                    </p>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 rounded-lg shadow">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Data preprocessing and cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>AI model selection and training</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Pattern recognition and segmentation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Insight generation and validation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="implement">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                    <h3 className="text-xl font-bold mb-2">Implementation Phase</h3>
                    <p className="text-gray-600">
                      We implement tailored solutions that integrate with your existing systems 
                      and workflows.
                    </p>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 rounded-lg shadow">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>System integration and deployment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>User interface development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Workflow automation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Team training and knowledge transfer</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="optimize">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                    <h3 className="text-xl font-bold mb-2">Optimization Phase</h3>
                    <p className="text-gray-600">
                      We continuously monitor, evaluate, and refine the solutions to ensure 
                      ongoing value creation.
                    </p>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 rounded-lg shadow">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Performance monitoring and reporting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Model fine-tuning and retraining</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Feedback integration and improvement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Scaling and expansion opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}