// Removed Image import as we're using an iframe now
// import Image from "next/image";

export default function ContactMap() {
  // The embed URL for the location R. Teodoro Sampaio, 255 - Pinheiros, São Paulo
  // You can generate this from Google Maps -> Share -> Embed a map
  // Using a placeholder version number
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.179225010461!2d-46.682814624691446!3d-23.563608062790095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f8130181a7%3A0x4467a967cf901433!2sR.%20Teodoro%20Sampaio%2C%20255%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005405-000!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr";

  return (
    // Use section background and padding
    <section id="contact" className="bg-section-background py-16 md:py-24">
      <div className="container mx-auto px-4 text-center animate-fade-in"> {/* Add animation */}
        {/* Apply font-serif from base layer, just need text color and size */}
        <h2 className="text-3xl md:text-4xl text-gray-900 mb-8">ENTRE EM CONTATO</h2>
        <div className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed"> {/* Use muted-foreground, leading-relaxed */}
          <p>R. Teodoro Sampaio, 255 - Pinheiros, São Paulo - SP, 05405-000, Brasil</p>
          <p className="mt-2">daniilomelo@maxiinstitute.br</p>
          <p className="mt-2">+55 (11) 99999-9999</p>
        </div>
      </div>
      {/* Map iframe container */}
      <div className="w-full mt-8 animate-fade-in delay-100"> {/* Add animation */}
        {/* Google Maps Embed iframe */}
        <iframe
          src={mapEmbedUrl}
          width="100%" // Set width to 100%
          height="500" // Set a fixed height or use Tailwind height classes
          style={{ border: 0 }} // Remove border
          allowFullScreen={true} // Allow fullscreen
          loading="lazy" // Lazy load the iframe
          referrerPolicy="no-referrer-when-downgrade" // Recommended policy
          title="Maxi Institute Location on Google Maps" // Accessible title
          className="w-full h-[400px] md:h-[500px] shadow-xl" // Use Tailwind classes for responsive height and add shadow
        ></iframe>
      </div>
    </section>
  );
}