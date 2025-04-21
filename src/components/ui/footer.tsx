
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">О компании</h3>
            <p className="text-sm">
              Мы предоставляем качественные услуги и решения для наших клиентов с 2010 года.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы сайта</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Главная</Link></li>
              <li><Link to="/about" className="hover:underline">О нас</Link></li>
              <li><Link to="/services" className="hover:underline">Услуги</Link></li>
              <li><Link to="/contacts" className="hover:underline">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>Телефон: +7 (123) 456-78-90</li>
              <li>Email: info@mysite.ru</li>
              <li>Адрес: г. Москва, ул. Примерная, д. 123</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-4 text-center">
          <p className="text-sm">© {currentYear} МойСайт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
