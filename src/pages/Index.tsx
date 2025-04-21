
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Главный баннер */}
      <section className="bg-gradient-to-r from-primary/80 to-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Добро пожаловать на наш сайт</h1>
            <p className="text-xl mb-8">Мы предлагаем лучшие решения для вашего бизнеса</p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/services">Наши услуги</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Мы гарантируем высокое качество всех наших услуг и продуктов.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Надежность</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Наши клиенты доверяют нам уже более 10 лет.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Профессионализм</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Наша команда состоит из опытных профессионалов своего дела.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Блок с призывом к действию */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать работу с нами?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Свяжитесь с нами сегодня, и мы обсудим, как можем помочь вашему бизнесу развиваться.</p>
          <Button asChild size="lg">
            <Link to="/contacts">Свяжитесь с нами</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
