
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: 'Digital Marketing Expert',
        subtitle: '7 Years of Fintech & SaaS Experience',
        description: 'Transform your business with proven digital marketing strategies, advanced SEO techniques, and powerful automation solutions.',
        cta: 'Get Started',
        learnMore: 'Learn More'
      },
      services: {
        title: 'My Services',
        subtitle: 'Comprehensive Digital Solutions',
        digitalMarketing: {
          title: 'Digital Marketing',
          description: 'Strategic campaigns that drive growth and ROI for fintech and SaaS companies.'
        },
        seo: {
          title: 'SEO Optimization',
          description: 'Advanced SEO strategies to boost your search rankings and organic traffic.'
        },
        automation: {
          title: 'Marketing Automation',
          description: 'Streamline your processes with intelligent automation solutions.'
        }
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Success Stories',
        viewProject: 'View Project'
      },
      about: {
        title: 'About Me',
        subtitle: 'Experienced Digital Marketing Professional',
        description: 'With 7 years of specialized experience in the fintech and SaaS industries, I help businesses scale through strategic digital marketing, SEO optimization, and marketing automation.',
        experience: 'Years Experience',
        projects: 'Projects Completed',
        clients: 'Happy Clients'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Ready to grow your business?',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message'
      }
    }
  },
  id: {
    translation: {
      nav: {
        home: 'Beranda',
        services: 'Layanan',
        portfolio: 'Portofolio',
        about: 'Tentang',
        contact: 'Kontak'
      },
      hero: {
        title: 'Ahli Digital Marketing',
        subtitle: '7 Tahun Pengalaman Fintech & SaaS',
        description: 'Transformasikan bisnis Anda dengan strategi digital marketing terbukti, teknik SEO canggih, dan solusi otomasi yang powerful.',
        cta: 'Mulai Sekarang',
        learnMore: 'Pelajari Lebih Lanjut'
      },
      services: {
        title: 'Layanan Saya',
        subtitle: 'Solusi Digital Komprehensif',
        digitalMarketing: {
          title: 'Digital Marketing',
          description: 'Kampanye strategis yang mendorong pertumbuhan dan ROI untuk perusahaan fintech dan SaaS.'
        },
        seo: {
          title: 'Optimasi SEO',
          description: 'Strategi SEO canggih untuk meningkatkan peringkat pencarian dan traffic organik Anda.'
        },
        automation: {
          title: 'Otomasi Marketing',
          description: 'Sederhanakan proses Anda dengan solusi otomasi yang cerdas.'
        }
      },
      portfolio: {
        title: 'Portofolio',
        subtitle: 'Kisah Sukses',
        viewProject: 'Lihat Proyek'
      },
      about: {
        title: 'Tentang Saya',
        subtitle: 'Profesional Digital Marketing Berpengalaman',
        description: 'Dengan 7 tahun pengalaman khusus di industri fintech dan SaaS, saya membantu bisnis berkembang melalui digital marketing strategis, optimasi SEO, dan otomasi marketing.',
        experience: 'Tahun Pengalaman',
        projects: 'Proyek Selesai',
        clients: 'Klien Puas'
      },
      contact: {
        title: 'Hubungi Saya',
        subtitle: 'Siap mengembangkan bisnis Anda?',
        name: 'Nama',
        email: 'Email',
        subject: 'Subjek',
        message: 'Pesan',
        send: 'Kirim Pesan'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
