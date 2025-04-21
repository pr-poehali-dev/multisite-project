
import Layout from "@/components/layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">О нас</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Наша компания была основана в 2010 году с целью предоставления высококачественных услуг для бизнеса. 
            За это время мы накопили богатый опыт и завоевали доверие множества клиентов.
          </p>
          
          <p className="text-lg mb-6">
            Мы специализируемся на разработке инновационных решений, которые помогают нашим клиентам 
            оптимизировать бизнес-процессы и достигать поставленных целей.
          </p>
          
          <div className="my-10 bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
            <p className="text-lg">
              Помогать бизнесу расти и развиваться, предоставляя инновационные и эффективные решения.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Наша команда</h2>
          <p className="text-lg mb-6">
            В нашей компании работают профессионалы с многолетним опытом в различных областях. 
            Мы постоянно совершенствуем свои навыки и следим за последними тенденциями в отрасли.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Наши ценности</h2>
          <ul className="list-disc pl-6 text-lg mb-6">
            <li className="mb-2">Качество во всем, что мы делаем</li>
            <li className="mb-2">Инновации и постоянное совершенствование</li>
            <li className="mb-2">Честность и прозрачность в отношениях с клиентами</li>
            <li className="mb-2">Ответственный подход к каждому проекту</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
