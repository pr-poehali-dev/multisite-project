
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold flex items-center">
          <span>⚡ Электрик Колпино</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:underline transition-all">Главная</Link>
          <Link to="/services" className="hover:underline transition-all">Услуги</Link>
          <Link to="/contacts" className="hover:underline transition-all">Контакты</Link>
          <a href="tel:+79500308830" className="bg-white text-primary px-3 py-1 rounded-md font-medium hover:bg-opacity-90 transition-all">
            +7 (950) 030-88-30
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
