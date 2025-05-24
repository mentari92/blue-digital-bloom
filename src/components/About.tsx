
import { useTranslation } from 'react-i18next';
import { Award, Users, Briefcase } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Award,
      number: '7+',
      label: t('about.experience')
    },
    {
      icon: Briefcase,
      number: '150+',
      label: t('about.projects')
    },
    {
      icon: Users,
      number: '50+',
      label: t('about.clients')
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-primary-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Bio Section with Photo */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Mentari Rahman</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I'm a passionate digital marketing professional with over 7 years of specialized experience 
                    helping fintech and SaaS companies achieve breakthrough growth. My journey began with a deep 
                    fascination for how technology can transform businesses and connect them with their ideal customers.
                  </p>
                  <p>
                    Throughout my career, I've developed expertise in creating data-driven marketing strategies 
                    that deliver measurable results. I specialize in SEO optimization, marketing automation, 
                    and performance analytics – always focusing on sustainable growth that scales with your business.
                  </p>
                  <p>
                    What sets me apart is my deep understanding of the fintech and SaaS landscape. I know the 
                    unique challenges these industries face, from complex regulatory environments to highly 
                    competitive markets. This insight allows me to craft targeted campaigns that resonate 
                    with your specific audience and drive meaningful conversions.
                  </p>
                  <p>
                    When I'm not optimizing campaigns or analyzing performance metrics, I'm staying ahead of 
                    the latest digital marketing trends and technologies. I believe in continuous learning 
                    and innovation to ensure my clients always have access to cutting-edge strategies.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
                  <img
                    src="/lovable-uploads/d8b35abc-5412-4417-93e7-d5ce1d026081.png"
                    alt="Mentari Rahman - Digital Marketing Expert"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expertise Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Expertise</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Strategic Digital Marketing for Fintech & SaaS
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Advanced SEO & Search Marketing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Marketing Automation & Lead Nurturing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Performance Analytics & Conversion Optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Growth Strategy & Campaign Management
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/3e520fd5-7820-47db-8efc-77f947af499f.png"
                  alt="Mentari Rahman with colleagues in a collaborative work environment"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
