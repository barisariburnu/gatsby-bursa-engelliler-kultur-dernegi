import React, { useEffect } from "react"
import { navigate } from "gatsby"
import Layout from '../components/layout';
import SEO from '../components/seo';


const RedirectPage: React.FC = () => {
  useEffect(() => {
    // Burada istediğiniz koşulları kontrol edebilirsiniz.
    // Örneğin, belirli bir süre bekleyerek veya bir işlem sonucuna göre yönlendirme yapabilirsiniz.
    // Aşağıdaki örnekte, sayfa yüklendiğinde 3 saniye sonra "/hedef-sayfa" sayfasına yönlendirme yapılıyor.
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

    <div>
      <p>Bağış sayfasına yönlendiriliyor...</p>
    </div>
    </Layout>
  );
};

export default RedirectPage;
