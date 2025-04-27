// app/research/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ResearchContentSection from "@/components/ContentDetailSection";
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
// Make the component function 'async' and await 'params'
export default async function ResearchDetailPage({ params }: { params: { slug: string } }) {
  // Await params before destructuring to avoid the warning/error
  const { slug } = await params;

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
    <div className="bg-gray-50"> {/* Background matches the content section */}
        <div className="container mx-auto px-4 py-16 md:py-24"> {/* Add padding to the container */}
            <div className="text-center mb-12">
                {/* Main Section Title - consistent with homepage */}
                {/* Using h1 for the main title of the page */}
                <h1 className="text-3xl md:text-4xl font-serif font-normal text-gray-900">PESQUISA E DESENVOLVIMENTO</h1>
            </div>
            {/* Render the reusable content section with the found item data */}
            <ResearchContentSection itemData={itemData} />
        </div>
    </div>
  );
}