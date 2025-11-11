const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <p className="text-sm">
            © 2024 Método 4 Fases. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:underline transition-opacity">
              Política de Privacidade
            </a>
            <a href="#" className="hover:underline transition-opacity">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
