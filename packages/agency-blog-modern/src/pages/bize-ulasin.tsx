import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../containers/contact';

type ContactPageProps = {};

const ContactPage: React.FunctionComponent<ContactPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Bize Ulaşın"
        description="Bursa Engelliler Kültür Derneği, Türkiye Cumhuriyeti vatandaşı olan tüm engellilerin dayanışmasını sağlamak amacıyla kurulmuştur. Soru ve görüşleriniz için bize yazın."
      />

      <Contact />
    </Layout>
  );
};

export default ContactPage;
