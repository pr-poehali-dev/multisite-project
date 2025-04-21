
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Электромонтажные работы",
      items: [
        "Монтаж электропроводки",
        "Замена электропроводки",
        "Установка распределительных щитов",
        "Подключение и замена автоматов защиты"
      ]
    },
    {
      title: "Установка и замена",
      items: [
        "Установка и замена розеток и выключателей",
        "Установка светильников, люстр, бра",
        "Монтаж светодиодного освещения",
        "Подключение электрической плиты"
      ]
    },
    {
      title: "Диагностика и ремонт",
      items: [
        "Поиск и устранение неисправностей",
        "Устранение короткого замыкания",
        "Ремонт электропроводки",
        "Диагностика электросети"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Наши услуги</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg mb-6 text-center">
            Выполняю все виды электромонтажных работ в Колпино и пригороде.
            Работаю с частными домами, квартирами и коммерческими помещениями.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Таблица цен */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Цены на услуги</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-3 text-left">Услуга</th>
                  <th className="px-4 py-3 text-right">Цена, руб.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3">Вызов электрика</td>
                  <td className="px-4 py-3 text-right">От 1000</td>
                </tr>
                <tr className="border-b bg-muted/50">
                  <td className="px-4 py-3">Замена розетки/выключателя</td>
                  <td className="px-4 py-3 text-right">От 500</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Установка люстры</td>
                  <td className="px-4 py-3 text-right">От 1200</td>
                </tr>
                <tr className="border-b bg-muted/50">
                  <td className="px-4 py-3">Монтаж электропроводки (за точку)</td>
                  <td className="px-4 py-3 text-right">От 800</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Установка электрощита</td>
                  <td className="px-4 py-3 text-right">От 3000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4 text-muted-foreground">
            * Окончательная стоимость определяется после осмотра объекта
          </p>
        </div>

        {/* YouTube видео */}
        <div className="max-w-6xl mx-auto mb-16">
          <YouTubeEmbed channelId="@elektrikkolpino" />
        </div>

        {/* Блок с призывом к действию */}
        <div className="bg-secondary p-8 rounded-lg text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Нужна консультация?</h2>
          <p className="mb-6">Звоните прямо сейчас, и я отвечу на все ваши вопросы!</p>
          <Button asChild size="lg">
            <a href="tel:+79500308830">
              Позвонить: +7 (950) 030-88-30
            </a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
