import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoLogoFacebook,
  IoMdGlobe,
} from 'react-icons/io';
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';

const SocialLinks = [
  {
    icon: <IoMdGlobe />,
    url: 'https://bursaengellilerkulturdernegi.com',
    tooltip: 'Resmi Web Sayfası',
  },
  {
    icon: <IoLogoFacebook />,
    url: 'https://facebook.com/Bursa-Engelliler-K%C3%BClt%C3%BCr-Derne%C4%9Fi-724123230988082/',
    tooltip: 'Facebook',
  },
];

interface AboutProps { }

const About: React.FunctionComponent<AboutProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/kurumsal.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>Kurumsal</h2>
        <p>
          Bursa Engelliler Kültür Derneği,
          Türkiye Cumhuriyeti vatandaşı olan tüm engellilerin eğitim ve sağlık başta olmak üzere
          maddi ve manevi tüm ihtiyaçlarına katkıda bulunarak sosyal dayanışmalarını sağlamak amacıyla kurulmuştur.
          Bünyesinde toplanan engelli vatandaşlar için din, dil, ırk, bölge ve cinsiyet ayırımı yapmaksızın gerekli tüm çalışmaları yapar.
        </p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="Bursa Engelliler Kültür Derneği" />
      </AboutImage>

      <AboutDetails>
        <h2>Biz Kimiz?</h2>
        <p>
          Bursa Engelliler Kültür Derneği,
          Türkiye Cumhuriyeti vatandaşı olan tüm engellilerin eğitim ve sağlık başta olmak üzere
          maddi ve manevi tüm ihtiyaçlarına katkıda bulunarak sosyal dayanışmalarını sağlamak amacıyla kurulmuştur.
          Bünyesinde toplanan engelli vatandaşlar için din, dil, ırk, bölge ve cinsiyet ayırımı yapmaksızın gerekli tüm çalışmaları yapar.
        </p>
        <p>
          Engelli bireylere; tedavi, yardım ve eğitim imkanı sağlamaya odaklanmıştır.
          Ailelerinin ve genelde toplumun bilinçlendirilmesiyle de bu kişilerin toplumsal yaşama aktif katılımına öncülük yapar.
        </p>

        <h2>Ne Yapıyoruz?</h2>
        <p>
          Bursa Engelliler Kültür Derneği;
          bünyesinde bulunan engelli vatandaşlar için din, dil, ırk, bölge ve cinsiyet ayırımı gözetmeksizin
          gerekli desteği sağlamayı amaçlamaktadır.
        </p>

        <h3>Eğitim</h3>
        <p>
          Düzenli aralıklara öğrencilerimize eğitim/burs desteği yapıyoruz.
          Siz de öğrencilerimizin eğitim hayatlarına katkıda bulunmak için <a href='/bize-ulasin'> bize ulaşabilirsiniz</a>.
        </p>

        <h3>Sağlık</h3>
        <p>
          Tedavi imkanı bulunan üyelerimizin ameliyat masraflarını karşılıyoruz.
          Siz de engelli üyelerimizin hayatlarına umutla dokunmak için <a href='/bize-ulasin'> bize ulaşabilirsiniz</a>.
        </p>

        <h3>Erzak</h3>
        <p>
          Her ay üyelerimize erzak desteği gerçekleştiriyoruz.
          Siz de engelli ailelerimizin temel gıda ihtiyaçlarına katkıda bulunmak için <a href='/bize-ulasin'> bize ulaşabilirsiniz</a>.
        </p>

        <h3>Kira</h3>
        <p>
          Her ay üyelerimizin kira ödemelerine destek oluyoruz.
          Siz de barınma ihtiyacını karşılamakta zorlanan engelli ailelerimize destek olmak için <a href='/bize-ulasin'> bize ulaşabilirsiniz</a>.
        </p>

        <h2>İstatistikler</h2>
        <p>
          Bursa Engelliler Kültür Derneği;
          engelli ve engelli ailelerine hizmet etmeyi vizyon olarak edinmiştir.
          Engelli ve engelli ailelerinin yaşadıkları sorunları toplumun diğer fertlerine anlatarak
          bu kişilerin toplumsal yaşama aktif katılımına öncülük yapar.
        </p>
        <p>
          Yardımseverleri ve engelli ailelerini bir araya getirerek gönül köprüsü oluşturur.
          Yardımseverlerin destekleri; eğitim, sağlık, gıda ve kira yardımı şeklinde doğrudan engelli ailelerine ulaştırılır.
        </p>
        <p>
          <li>50+ Öğrenciye Eğitim ve Burs Desteği</li>
          <li>7+ Engelliye Sağlık Desteği</li>
          <li>50+ Engelli Ailesine Düzenli Erzak Desteği</li>
          <li>10+ Düzenli Kira Desteği</li>
        </p>
        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
