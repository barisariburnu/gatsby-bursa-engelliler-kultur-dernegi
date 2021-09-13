import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Campaign from '../containers/campaign-page';

type CampaignPageProps = {};

const CampaignPage: React.FunctionComponent<CampaignPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Plastik Kapak Projesi"
        description="Bursa Engelliler Kültür Derneği, Türkiye Cumhuriyeti vatandaşı olan tüm engellilerin dayanışmasını sağlamak amacıyla kurulmuştur. Soru ve görüşleriniz için bize yazın."
      />

      <Campaign />
    </Layout>
  );
};

export default CampaignPage;
