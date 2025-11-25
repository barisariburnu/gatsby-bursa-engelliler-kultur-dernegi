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
      icon: & lt; IoMdGlobe /& gt;,
    url: process.env.SITE_URL,
      tooltip: 'Website',
    });
}

if (process.env.FACEBOOK_URL) {
  links.push({
    icon: & lt; IoLogoFacebook /& gt;,
  url: process.env.FACEBOOK_URL,
    tooltip: 'Facebook',
    });
  }

if (process.env.TWITTER_URL) {
  links.push({
    icon: & lt; IoLogoTwitter /& gt;,
  url: process.env.TWITTER_URL,
    tooltip: 'Twitter',
    });
  }

if (process.env.INSTAGRAM_URL) {
  links.push({
    icon: & lt; IoLogoInstagram /& gt;,
  url: process.env.INSTAGRAM_URL,
    tooltip: 'Instagram',
    });
  }

if (process.env.LINKEDIN_URL) {
  links.push({
    icon: & lt; IoLogoLinkedin /& gt;,
  url: process.env.LINKEDIN_URL,
    tooltip: 'LinkedIn',
    });
  }

return links;
};

interface CampaignProps { }

const Campaign: React.FunctionComponent & lt; CampaignProps & gt; = () =& gt; {
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
    & lt; CampaignWrapper & gt;
      & lt; CampaignPageTitle & gt;
        & lt; h2 & gt;Our Campaign & lt;/h2&gt;
        & lt; p & gt;
          Join us in making a difference.Learn more about our current campaign and how you can contribute
          to create positive change in our community.
        & lt;/p&gt;
      & lt;/CampaignPageTitle&gt;

  {
    Data.avatar & amp;& amp; (
        & lt; CampaignImage & gt;
          & lt; Image
    fluid = { Data.avatar.childImageSharp.fluid }
    alt = "Campaign"
      /& gt;
        & lt;/CampaignImage&gt;
      )
  }

      & lt; CampaignDetails & gt;
        & lt; p & gt;
          Every day, we work towards our mission of creating meaningful impact.Your support can make
          a real difference in achieving our goals and helping those in need.
        & lt;/p&gt;
        & lt; p & gt;
          Through this campaign, we aim to raise awareness and gather resources that will directly
          benefit our community.Every contribution, no matter how small, helps us move closer to our objectives.
        & lt;/p&gt;

        & lt; h2 & gt;How It Works & lt;/h2&gt;
        & lt; p & gt;
          Our campaign follows a transparent process to ensure that all contributions are used effectively
          and responsibly.We keep our supporters informed every step of the way, providing regular updates
          on our progress and impact.
        & lt;/p&gt;

        & lt; p & gt;
          To learn more about our work and impact, visit our & lt;a href = '/about' & gt;about page & lt;/a&gt;.
          If you'd like to get involved or have questions, feel free to &lt;a href=' / contact'&gt;contact us&lt;/a&gt;.
    & lt;/p&gt;

  {
    SocialLinks.length & gt; 0 & amp;& amp; (
          & lt; SocialProfiles & gt;
            & lt;SocialProfile items = { SocialLinks } /& gt;
          & lt;/SocialProfiles&gt;
        )
  }
      & lt;/CampaignDetails&gt;
    & lt;/CampaignWrapper&gt;
  );
};

export default Campaign;
