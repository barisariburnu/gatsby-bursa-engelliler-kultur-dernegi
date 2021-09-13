import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoLogoFacebook,
  IoMdGlobe,
} from 'react-icons/io';
import {
  CampaignWrapper,
  CampaignImage,
  CampaignPageTitle,
  CampaignDetails,
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

interface CampaignProps { }

const Campaign: React.FunctionComponent<CampaignProps> = () => {
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
    <CampaignWrapper>
      <CampaignPageTitle>
        <h2>Plastik Kapak Projesi</h2>
        <p>
          Engelli bireyin tek başına hareket etmesini, özgürce gezmesini, alışveriş yapabilmesini ve yaşadığı dünyayı
          keşfetmesini sağlayabilirsiniz. İçtiğiniz su şişesinin ya da damacananın, zeytinyağınızın, meşrubatınızın kapağını atmak
          yerine biriktirirseniz sizler de engelli vatandaşlarımızın hayatlarına özgürce devam etmelerine yardımcı olabilirsiniz.
        </p>
      </CampaignPageTitle>

      <CampaignImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="Bursa Engelliler Kültür Derneği" />
      </CampaignImage>

      <CampaignDetails>
        <p>
          Her gün Türkiye çapında belki de tonlarcası çöpe atılıp kaybolup giden plastik kapakların geri dönüştürülmesi için bize destek olun.
          İçtiğiniz su şişesinin ya da damacananın, zeytinyağınızın, meşrubatınızın kapağını atmak yerine biriktirirseniz sizler de
          engelli vatandaşlarımızın özgür kalmasına  yardımcı olabilirsiniz.
        </p>
        <p>
          Bursa Engelliler Kültür Derneği olarak yürüttüğümüz bu kampanyada toplanan kapakların geri dönüşümü sayesinde elde edilecek gelirin tamamı;
          şu anda tedavi görmeyi bekleyen onlarca kişiyi hayatla buluşturacak.
        </p>

        <h2>Kapaklar nasıl iyiliğe dönüşüyor?</h2>
        <p>
          Bursa Engelliler Kültür Derneği'ne ulaşan kapaklar önce tartılır ardından gönderen kişinin iletişim bilgileri ile kayıt altına alınır.
          Daha sonra içindeki yabancı maddelerden ayrıştırılan kapaklar anlaşmalı geri dönüşüm firmasına tekrar tartılarak ve faturalandırılarak
          teslim edilir. Elde edilen gelir, derneğin kurumsal hesabı aracılığı ile teslim alınarak engelli bireylerin sağlık, kiyafet ve gıda
          ihtiyaçları karşılanır.
        </p>

        <p>
          Engelli bireylerin hayatlarına nasıl katkıda bulunduğumuz hakkında detaylı bilgi almak için
          <a href='/kurumsal'> bu sayfayı </a> ziyaret edebilirsiniz. Siz de engelli üyelerimizin hayatlarına umutla dokunmak için
          <a href='/bize-ulasin'> bize ulaşabilirsiniz</a>.
        </p>
        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </CampaignDetails>
    </CampaignWrapper>
  );
};

export default Campaign;
