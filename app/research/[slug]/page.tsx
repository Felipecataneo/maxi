// app/research/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ContentDetailSection from "@/components/ContentDetailSection"; // Use the common name
import { researchItems, getAllResearchSlugs } from "@/lib/researchData"; // Import data and helper
// Removed: import { PageProps } from 'next'; // No longer needed

// Optional: Generate static params for SSG
// This tells Next.js which [slug] pages to pre-render at build time
export async function generateStaticParams() {
  const slugs = getAllResearchSlugs(); // Get all slugs from your data
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Dynamic Route Page Component
// Correctly type the params object directly
export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Find the item data based on the slug
  const itemData = researchItems.find(item => item.slug === slug);

  // If item data is not found, show 404 page
  if (!itemData) {
    notFound(); // Renders the Next.js not-found page (or app/not-found.tsx if you have one)
  }

  return (
    <div className="bg-section-background"> {/* Use section background variable */}
        <div className="container mx-auto px-4 py-20 md:py-28"> {/* Add padding to the container */}
            <div className="text-center mb-12 animate-fade-in"> {/* Add animation */}
                {/* Main Section Title - consistent with homepage */}
                {/* Apply font-serif from base layer, just need text color and size */}
                <h1 className="text-3xl md:text-4xl text-gray-900 font-heading">PESQUISA E DESENVOLVIMENTO</h1>
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