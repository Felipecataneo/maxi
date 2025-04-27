import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Empowering Organizations with AI-Powered Customer Intelligence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We help organizations leverage AI to improve customer experiences and unlock powerful insights
              from customer data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8">
                Get Started
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <Image
              src="/hero-image.png"
              alt="AI Customer Intelligence"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}