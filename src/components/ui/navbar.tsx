
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold flex items-center">
          <img src="/logo-b.svg" alt="Логотип" className="h-8 w-8 mr-2" />
          <span>МойСайт</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:underline transition-all">Главная</Link>
          <Link to="/about" className="hover:underline transition-all">О нас</Link>
          <Link to="/services" className="hover:underline transition-all">Услуги</Link>
          <Link to="/contacts" className="hover:underline transition-all">Контакты</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
