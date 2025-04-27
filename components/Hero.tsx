import Image from "next/image";
// Removed Button import, as no buttons are in this Hero section now

export default function Hero() {
  return (
    // Section with standard padding, light background (implicitly from body/layout)
    // and a container with flex layout for side-by-side content
    <section className="py-16 md:py-24"> {/* Standard vertical padding */}
      <div className="container mx-auto px-4">
        {/* Flex container for side-by-side layout on large screens, stacked on small */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-16"> {/* Added gap for spacing */}

          {/* Text Content Area (left on large screens) */}
          <div className="lg:w-1/2 text-center lg:text-left"> {/* Text alignment adjusted */}
            {/* Apply font-serif, color, size, and leading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-tight text-gray-900">
              BEM-VINDO AO <br/> INSTITUTO <br/> MAXIMIZE CIÊNCIA, <br/> TECNOLOGIA E <br/> INOVAÇÃO
            </h1>
            {/* Removed paragraph and buttons */}
          </div>

          {/* Image Area (right on large screens) */}
          <div className="lg:w-1/2">
            {/* The Image component */}
            <Image
              src="/hero.png" // Using the image path you provided
              alt="Meeting Image" // Descriptive alt text
              width={800} // Provide dimensions for optimization
              height={500} // Provide dimensions for optimization
              // Use layout="responsive" is deprecated in Next.js 13+, use fill or sizing classes
              // For side-by-side, setting max-width and h-auto is common.
              // The original image dimensions might be useful here to maintain aspect ratio.
              // Let's use width/height and add responsive classes.
              className="w-full h-auto rounded-lg shadow-xl" // Ensure responsiveness and add styles
            />
          </div>

        </div>
      </div>
    </section>
  );
}