
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { Link } from "react-router-dom";
import { Lightbulb, Tool, Clock, Shield } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Главный баннер */}
      <section className="bg-gradient-to-r from-primary/80 to-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Услуги электрика в Колпино</h1>
            <p className="text-xl mb-8">Выполняю все виды электромонтажных работ любой сложности</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <a href="tel:+79500308830">Позвонить сейчас</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Узнать цены</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают меня</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Lightbulb className="h-8 w-8 text-primary" />
                <CardTitle>Опыт</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Более 10 лет опыта электромонтажных работ в Колпино и области.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Tool className="h-8 w-8 text-primary" />
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Использую профессиональный инструмент и качественные материалы.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Clock className="h-8 w-8 text-primary" />
                <CardTitle>Оперативность</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Быстрый выезд на объект и выполнение работ в кратчайшие сроки.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle>Гарантия</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Предоставляю гарантию на все выполненные работы.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* YouTube видео */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <YouTubeEmbed channelId="@elektrikkolpino" />
        </div>
      </section>

      {/* Блок с призывом к действию */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужен электрик?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Свяжитесь со мной прямо сейчас, и я решу вашу проблему!</p>
          <Button asChild size="lg">
            <a href="tel:+79500308830">
              Позвонить: +7 (950) 030-88-30
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
