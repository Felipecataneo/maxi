import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Customer Intelligence?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join leading organizations that are leveraging AI-powered customer intelligence to drive 
          growth and improve customer experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
            Schedule a Demo
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-blue-700 text-lg py-6 px-8">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}