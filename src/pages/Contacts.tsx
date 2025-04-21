
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { Phone, MessageSquare, Clock } from "lucide-react";

const Contacts = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Контакты</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg mb-6 text-center">
            Для заказа услуг электрика в Колпино и решения ваших проблем с электрикой,
            свяжитесь со мной любым удобным способом:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Phone className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <a 
                  href="tel:+79500308830" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  +7 (950) 030-88-30
                </a>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <MessageSquare className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Мессенджеры</h3>
                <div className="flex flex-col space-y-2">
                  <a 
                    href="https://wa.me/79500308830" 
                    className="hover:text-primary transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href="https://t.me/+79500308830" 
                    className="hover:text-primary transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Время работы</h3>
                <p>Ежедневно</p>
                <p className="font-medium">с 8:00 до 22:00</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Нужен электрик срочно?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <a href="tel:+79500308830">
                  Позвонить сейчас
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://wa.me/79500308830" target="_blank" rel="noopener noreferrer">
                  Написать в WhatsApp
                </a>
              </Button>
            </div>
          </div>
          
          {/* YouTube видео */}
          <div className="max-w-6xl mx-auto">
            <YouTubeEmbed channelId="@elektrikkolpino" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
