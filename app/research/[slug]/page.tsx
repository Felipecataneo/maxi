// app/research/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ContentDetailSection from "@/components/ContentDetailSection"; // Use the common name
import { researchItems, getAllResearchSlugs } from "@/lib/researchData"; // Import data and helper

// Optional: Generate static params for SSG
// This tells Next.js which [slug] pages to pre-render at build time
export async function generateStaticParams() {
  const slugs = getAllResearchSlugs(); // Get all slugs from your data
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Dynamic Route Page Component
export default async function ResearchDetailPage({ params }: { params: { slug: string } }) {
  // Await params before destructuring to avoid the warning/error
  const { slug } = await params; // <--- CORRECTED LINE

  // Find the item data based on the slug
  const itemData = researchItems.find(item => item.slug === slug);

  // If item data is not found, show 404 page
  if (!itemData) {
    notFound(); // Renders the Next.js not-found page (or app/not-found.tsx if you have one)
  }

  // Assuming you want the main "PESQUISA E DESENVOLVIMENTO" title on this page too
  // It's more consistent with the reference site's section titles.
  // Let's wrap the reusable section component.

  return (
    <div className="bg-section-background"> {/* Use section background variable */}
        <div className="container mx-auto px-4 py-16 md:py-24"> {/* Add padding to the container */}
            <div className="text-center mb-12 animate-fade-in"> {/* Add animation */}
                {/* Main Section Title - consistent with homepage */}
                {/* Apply font-serif from base layer, just need text color and size */}
                <h1 className="text-3xl md:text-4xl text-gray-900">PESQUISA E DESENVOLVIMENTO</h1>
            </div>
            {/* Render the reusable content section with the found item data */}
            {/* Add animation delay to the content section */}
            <div className="animate-fade-in delay-100">
              <ContentDetailSection itemData={itemData} />
            </div>
        </div>
    </div>
  );
}