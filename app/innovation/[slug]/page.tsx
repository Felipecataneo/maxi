// app/innovation/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ContentDetailSection from "@/components/ContentDetailSection"; // Import the reusable content section component
import { innovationItems, getAllInnovationSlugs } from "@/lib/innovationData"; // Import data and helper
// Removed: import { PageProps } from 'next'; // No longer needed

// Optional: Generate static params for SSG
// This tells Next.js which [slug] pages to pre-render at build time
export async function generateStaticParams() {
  const slugs = getAllInnovationSlugs(); // Get all slugs from your data
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Dynamic Route Page Component
// Correctly type the params object directly
export default async function InnovationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Find the item data based on the slug in innovationItems
  const itemData = innovationItems.find(item => item.slug === slug);

  // If item data is not found, show 404 page
  if (!itemData) {
    notFound(); // Renders the Next.js not-found page
  }

  // Render the page structure similar to the Research detail page
  return (
    <div className="bg-section-background"> {/* Use section background variable */}
        <div className="container mx-auto px-4 py-16 md:py-24"> {/* Add padding to the container */}
            <div className="text-center mb-12 animate-fade-in"> {/* Add animation */}
                {/* Main Section Title for Innovation & Entrepreneurship */}
                {/* Apply font-serif from base layer, just need text color and size */}
                <h1 className="text-3xl md:text-4xl text-gray-900">INOVAÇÃO E EMPREENDEDORISMO</h1>
            </div>
            {/* Render the reusable content section with the found innovation item data */}
            {/* Add animation delay to the content section */}
            <div className="animate-fade-in delay-100">
               <ContentDetailSection itemData={itemData} />
            </div>
        </div>
    </div>
  );
}