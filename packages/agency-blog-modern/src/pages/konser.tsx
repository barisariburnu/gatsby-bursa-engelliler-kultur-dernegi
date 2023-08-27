
import React, { useEffect } from "react"
import { navigate } from "gatsby"
import Layout from '../components/layout';
import PersonalBlog from '../containers/home';
import SEO from '../components/seo';

const KonserPage = () => {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("https://donate.stripe.com/5kAaFV9GtglW71m7st?locale=tr")
    }, 100) 

    return () => clearTimeout(redirectTimer)
  }, [])

  return (
    <Layout>
      <SEO
        title="Bize Ulaşın"
        description="Bursa Engelliler Kültür Derneği, Türkiye Cumhuriyeti vatandaşı olan tüm engellilerin dayanışmasını sağlamak amacıyla kurulmuştur. Soru ve görüşleriniz için bize yazın."
      />
      <PersonalBlog />
    </Layout>
  );
};

export default KonserPage;
