import EmailLink from './EmailLink';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-sm relative z-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <p className="text-gray-200 font-medium mb-4 text-lg">Instituto Maximize Ciência, Tecnologia e Inovação</p>
        
        <div className="mb-4 flex justify-center">
          <EmailLink email="daniilomelo@maxiinstitute.br" />
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          {/* Placeholder for social icons */}
        </div>

        <p>©2025 por Instituto Maximize Ciência, Tecnologia e Inovação.</p>
      </div>
    </footer>
  );
};

export default Footer;