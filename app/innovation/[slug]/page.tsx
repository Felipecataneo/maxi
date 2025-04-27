// app/innovation/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ContentDetailSection from "@/components/ContentDetailSection"; // Import the reusable content section component
import { innovationItems, getAllInnovationSlugs } from "@/lib/innovationData"; // Import data and helper

// Optional: Generate static params for SSG
// This tells Next.js which [slug] pages to pre-render at build time
export async function generateStaticParams() {
  const slugs = getAllInnovationSlugs(); // Get all slugs from your data
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Dynamic Route Page Component
// Make the component function 'async' and await 'params'
export default async function InnovationDetailPage({ params }: { params: { slug: string } }) {
  // Await params before destructuring
  const { slug } = await params;

  // Find the item data based on the slug in innovationItems
  const itemData = innovationItems.find(item => item.slug === slug);

  // If item data is not found, show 404 page
  if (!itemData) {
    notFound(); // Renders the Next.js not-found page
  }

  // Render the page structure similar to the Research detail page
  return (
    <div className="bg-gray-50"> {/* Background matches the content section */}
        <div className="container mx-auto px-4 py-16 md:py-24"> {/* Add padding to the container */}
            <div className="text-center mb-12">
                {/* Main Section Title for Innovation & Entrepreneurship */}
                <h1 className="text-3xl md:text-4xl font-serif font-normal text-gray-900">INOVAÇÃO E EMPREENDEDORISMO</h1>
            </div>
            {/* Render the reusable content section with the found innovation item data */}
            <ContentDetailSection itemData={itemData} />
        </div>
    </div>
  );
}