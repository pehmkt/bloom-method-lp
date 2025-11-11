const Footer = () => {
  return (
    <footer className="bg-pink-dark text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <p className="text-sm opacity-90">
            © 2024 Método das 4 Fases. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
              Política de Privacidade
            </a>
            <a href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
              Termos de Uso
            </a>
            <a href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
              Contato
            </a>
          </div>
          <p className="text-xs opacity-75 max-w-2xl mx-auto">
            Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site
            NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca registrada da
            FACEBOOK, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
