import  EmailLink  from './EmailLink';

const ContactMap = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.179225010461!2d-46.682814624691446!3d-23.563608062790095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f8130181a7%3A0x4467a967cf901433!2sR.%20Teodoro%20Sampaio%2C%20255%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005405-000!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr";

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl text-foreground font-heading mb-8">ENTRE EM CONTATO</h2>
        <div className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed flex flex-col items-center">
          <p>R. Teodoro Sampaio, 255 - Pinheiros, São Paulo - SP, 05405-000, Brasil</p>
          <div className="mt-2 flex justify-center">
            <EmailLink email="daniilomelo@maxiinstitute.br" />
          </div>
          <p className="mt-2">+55 (11) 93070-6287</p>
        </div>
      </div>
      <div className="w-full mt-8 animate-fade-in delay-100">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Maxi Institute Location on Google Maps"
          className="w-full h-[400px] md:h-[500px] shadow-xl"
        ></iframe>
      </div>
    </section>
  );
};
export default ContactMap