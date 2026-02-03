import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMdGlobe,
} from 'react-icons/io';
import {
  CampaignWrapper,
  CampaignImage,
  CampaignPageTitle,
  CampaignDetails,
  SocialProfiles,
} from './style';

const getSocialLinks = () => {
  const links = [];

  if (process.env.SITE_URL) {
    links.push({
      icon: <IoMdGlobe />,
      url: process.env.SITE_URL,
      tooltip: 'Website',
    });
  }

  if (process.env.FACEBOOK_URL) {
    links.push({
      icon: <IoLogoFacebook />,
      url: process.env.FACEBOOK_URL,
      tooltip: 'Facebook',
    });
  }

  if (process.env.TWITTER_URL) {
    links.push({
      icon: <IoLogoTwitter />,
      url: process.env.TWITTER_URL,
      tooltip: 'Twitter',
    });
  }

  if (process.env.INSTAGRAM_URL) {
    links.push({
      icon: <IoLogoInstagram />,
      url: process.env.INSTAGRAM_URL,
      tooltip: 'Instagram',
    });
  }

  if (process.env.LINKEDIN_URL) {
    links.push({
      icon: <IoLogoLinkedin />,
      url: process.env.LINKEDIN_URL,
      tooltip: 'LinkedIn',
    });
  }

  return links;
};

interface CampaignProps {}

const Campaign: React.FunctionComponent<CampaignProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/campaign.(jpg|jpeg|png)/" }) {
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

  const SocialLinks = getSocialLinks();

  return (
    <CampaignWrapper>
      <CampaignPageTitle>
        <h2>Our Campaign</h2>
        <p>
          Join us in making a difference. Learn more about our current campaign and how you can contribute
          to create positive change in our community.
        </p>
      </CampaignPageTitle>

      {Data.avatar && (
        <CampaignImage>
          <Image
            fluid={Data.avatar.childImageSharp.fluid}
            alt="Campaign"
          />
        </CampaignImage>
      )}

      <CampaignDetails>
        <p>
          Every day, we work towards our mission of creating meaningful impact. Your support can make
          a real difference in achieving our goals and helping those in need.
        </p>
        <p>
          Through this campaign, we aim to raise awareness and gather resources that will directly
          benefit our community. Every contribution, no matter how small, helps us move closer to our objectives.
        </p>

        <h2>How It Works</h2>
        <p>
          Our campaign follows a transparent process to ensure that all contributions are used effectively
          and responsibly. We keep our supporters informed every step of the way, providing regular updates
          on our progress and impact.
        </p>

        <p>
          To learn more about our work and impact, visit our <a href="/about">about page</a>.
          If you'd like to get involved or have questions, feel free to <a href="/contact">contact us</a>.
        </p>

        {SocialLinks.length > 0 && (
          <SocialProfiles>
            <SocialProfile items={SocialLinks} />
          </SocialProfiles>
        )}
      </CampaignDetails>
    </CampaignWrapper>
  );
};

export default Campaign;
