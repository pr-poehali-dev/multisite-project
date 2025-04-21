
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">⚡ Электрик Колпино</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="tel:+79500308830" 
              className="flex items-center gap-2 hover:underline"
            >
              <Phone size={18} />
              <span>+7 (950) 030-88-30</span>
            </a>
            <a 
              href="https://wa.me/79500308830" 
              className="hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a 
              href="https://t.me/+79500308830" 
              className="hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm opacity-80">
          © {new Date().getFullYear()} ⚡ Электрик Колпино. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
