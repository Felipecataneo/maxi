// components/ResearchContentSection.tsx
import Image from "next/image";

interface ResearchItemData {
  slug: string;
  title: string;
  imageSrc: string;
  detailedText: string;
}

interface ResearchContentSectionProps {
  itemData: ResearchItemData;
}

export default function ContentDetailSection({ itemData }: ResearchContentSectionProps) {
  const { title, imageSrc, detailedText } = itemData;

  // Split the detailedText into paragraphs based on one or more blank lines
  // This regex /\n\s*\n/ looks for a newline, followed by zero or more whitespace characters,
  // followed by another newline. This is a robust way to find paragraph breaks.
  const paragraphs = detailedText.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0);


  return (
    <section className="py-0">
      <div className="container mx-auto px-4 max-w-4xl">

        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900 text-center md:text-left">
          {title}
        </h2>

        <div>
          <div className="w-full mb-8">
             <Image
              src={imageSrc}
              alt={title}
              width={800} // Provide base width
              height={450} // Provide base height
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          <div className="text-gray-700 leading-relaxed">
            {/* Map over the processed paragraphs */}
            {paragraphs.map((paragraph, index) => (
                <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}