import React from 'react';
import { graphql } from 'gatsby';
import PostCardMinimal from '../components/post-card-minimal/post-card-minimal';
import Pagination from '../components/pagination/pagination';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { BlogPostsWrapper } from './templates.style';
export const pageQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    sitePage {
      path
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD [<span>] MMMM [</span>]", locale: "tr")
            title
            description
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 170, maxHeight: 170, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

const BlogList = (props: any) => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? '/page/1' : `/page/${(currentPage - 1).toString()}`;
  const nextPage = `/page/${(currentPage + 1).toString()}`;
  const PrevLink = !isFirst && prevPage;
  const NextLink = !isLast && nextPage;

  return (
    <Layout>
      <SEO title={`Page ${currentPage}`} />

      <BlogPostsWrapper>
        {posts.map(({ node }: any) => {
          return (
            <PostCardMinimal
              key={node.fields.slug}
              title={node.frontmatter.title || node.fields.slug}
              image={
                node.frontmatter.cover == null
                  ? null
                  : node.frontmatter.cover.childImageSharp.fluid
              }
              url={node.fields.slug}
              description={node.frontmatter.description || node.excerpt}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
            />
          );
        })}

        <Pagination
          prevLink={PrevLink}
          nextLink={NextLink}
          currentPage={`${currentPage}`}
          totalPage={`${numPages}`}
        />
      </BlogPostsWrapper>
    </Layout>
  );
};

export default BlogList;
