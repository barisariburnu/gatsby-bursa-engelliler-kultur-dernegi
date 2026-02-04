import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoLinkedin,
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
        icon: <IoLogoFacebook />,
        url: 'https://www.facebook.com/p/Bursa-Engelliler-K%C3%BClt%C3%BCr-Derne%C4%9Fi-100068079677300/',
        tooltip: 'Facebook',
    },
    {
        icon: <IoLogoInstagram />,
        url: 'https://www.instagram.com/huseyin.ariburnu/',
        tooltip: 'Instagram',
    },
    {
        icon: <IoLogoTwitter />,
        url: '#',
        tooltip: 'Twitter',
    },
    {
        icon: <IoLogoLinkedin />,
        url: '#',
        tooltip: 'Linked In',
    },
];

interface AboutProps { }

const About: React.FunctionComponent<AboutProps> = () => {
    const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
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
                <h2>Hakkımızda</h2>
                <p>
                    Bursa Engelliler Kültür Derneği olarak, engelli bireylerin toplumsal hayata tam ve eşit katılımını desteklemek,
                    haklarını savunmak ve sosyal dayanışmayı artırmak için çalışıyoruz.
                </p>
            </AboutPageTitle>

            <AboutImage>
                {Data.avatar && (
                    <Image fluid={Data.avatar.childImageSharp.fluid} alt="Hakkımızda" />
                )}
            </AboutImage>

            <AboutDetails>
                <h2>Biz Kimiz?</h2>
                <p>
                    Derneğimiz, Bursa'da yaşayan engelli vatandaşlarımızın ve ailelerinin sesi olmak amacıyla kurulmuştur.
                    Eğitim, istihdam, erişilebilirlik ve sosyal farkındalık alanlarında projeler üreterek, engelli bireylerin
                    yaşam kalitesini artırmayı hedefliyoruz.
                </p>
                <p>
                    Dayanışmanın gücüne inanıyor, her bireyin potansiyelini gerçekleştirebileceği engelsiz bir dünya için
                    el birliğiyle çalışıyoruz. Sizlerin desteğiyle daha fazla hayata dokunmaya devam ediyoruz.
                </p>

                <SocialProfiles>
                    <SocialProfile items={SocialLinks} />
                </SocialProfiles>
            </AboutDetails>
        </AboutWrapper>
    );
};

export default About;
