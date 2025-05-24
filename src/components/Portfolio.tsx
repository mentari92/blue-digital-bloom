
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'FinTech Growth Campaign',
      description: 'Increased user acquisition by 300% for a leading fintech platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
      category: 'Digital Marketing',
      results: '+300% User Growth'
    },
    {
      title: 'SaaS SEO Optimization',
      description: 'Boosted organic traffic by 250% for a B2B SaaS company',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      category: 'SEO',
      results: '+250% Organic Traffic'
    },
    {
      title: 'Marketing Automation Suite',
      description: 'Implemented automation that reduced costs by 40% while increasing conversions',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500',
      category: 'Automation',
      results: '+150% Efficiency'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 font-bold text-lg">
                    {project.results}
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700">
                    {t('portfolio.viewProject')}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
