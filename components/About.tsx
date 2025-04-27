import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Maxi Institute</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded on the belief that customer intelligence is the cornerstone of business success, Maxi Institute 
              combines cutting-edge AI technology with deep industry expertise to deliver transformative solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of data scientists, AI specialists, and business strategists work together to help 
              organizations unlock the full potential of their customer data, driving growth and improving 
              customer experiences.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">✓</span>
                </div>
                <span className="font-medium">Industry Leaders</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">✓</span>
                </div>
                <span className="font-medium">Research-backed</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">✓</span>
                </div>
                <span className="font-medium">Client Success</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mb-12 lg:mb-0 order-1 lg:order-2">
            <Image
              src="/about-image.png"
              alt="About Maxi Institute"
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