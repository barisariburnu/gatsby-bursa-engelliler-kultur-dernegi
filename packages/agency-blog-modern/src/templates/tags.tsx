import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card/post-card';
import SEO from '../components/seo';
import { TagPostsWrapper, TagPageHeading, TagName } from './templates.style';

const Tags = ({ pageContext, data }: any) => {
  const { tagName } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title={tagName} description={`${totalCount} gönderi`} />

      <TagPostsWrapper>
        <TagPageHeading>
          <TagName>{tagName}</TagName>
          {`${totalCount} gönderi bulundu`}
        </TagPageHeading>
        {edges.map(({ node, index }: any) => (
          <PostCard
            key={node.fields.slug}
            title={node.frontmatter.title}
            url={node.fields.slug}
            description={node.frontmatter.description || node.excerpt}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
          />
        ))}
      </TagPostsWrapper>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tagName: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tagName] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD [<span>] MMMM [</span>]", locale: "tr")
            title
            tags
            description
          }
        }
      }
    }
  }
`;
