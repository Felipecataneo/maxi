import Image from "next/image";
// Removed Button import, as no buttons are in this Hero section now

export default function Hero() {
  return (
    // Section with standard padding, light background (implicitly from body/layout)
    // and a container with flex layout for side-by-side content
    <section className="relative overflow-hidden py-20 md:py-28"> {/* Added overflow-hidden, removed bg-gray-50 */}
        {/* Optional: Add a subtle background gradient or pattern here */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent z-0"></div> */}

      <div className="container mx-auto px-4 relative z-10"> {/* Added relative z-10 to keep content above potential background */}
        {/* Flex container for side-by-side layout on large screens, stacked on small */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-16"> {/* Added gap for spacing */}

          {/* Text Content Area (left on large screens) */}
          <div className="lg:w-1/2 text-center lg:text-left animate-slide-right"> {/* Text alignment adjusted, add animation */}
            {/* Apply font-serif from base layer, just need text color, size and leading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-gray-900"> {/* sm:text-5xl for better intermediate size */}
              BEM-VINDO AO <br/> INSTITUTO <br/> MAXIMIZE CIÊNCIA, <br/> TECNOLOGIA E <br/> INOVAÇÃO
            </h1>
            {/* Removed paragraph and buttons */}
          </div>

          {/* Image Area (right on large screens) */}
          <div className="lg:w-1/2 animate-slide-left delay-100"> {/* Add animation with delay */}
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
              className="w-full h-auto rounded-lg shadow-xl transform transition-transform hover:scale-[1.02]" // Ensure responsiveness, add shadow, and a subtle hover effect
            />
             {/* Optional: Add a Lottie animation related to science, tech, or collaboration */}
             {/* This would require installing a Lottie library (e.g., `lottie-react`) and finding a free animation JSON */}
             {/* <div className="mt-4 text-center text-muted-foreground">Optional Lottie Animation Here</div> */}
          </div>

        </div>
      </div>
    </section>
  );
}