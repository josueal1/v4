import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, About, Featured, Contact } from '@components';
import styled from 'styled-components';
// from 404.js
import { Main } from '@styles';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const EcoMercePage = ({ location, data }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <About data={data.problemStatement.edges} />
      <About data={data.analysis.edges} />
      <About data={data.research.edges} />

      <About data={data.design.edges} />
      <About data={data.design2.edges} />
      <About data={data.design3.edges} />
      <About data={data.design4.edges} />

      <About data={data.userEval.edges} />
      <Featured data={data.featured.edges} />
      <Contact data={data.contact.edges} />
    </StyledMainContainer>
  </Layout>
);

EcoMercePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default EcoMercePage;

export const pageQuery = graphql`
  {
    problemStatement: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/ecomerce/problemStatement/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }

    analysis: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/ecomerce/analysis/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 8000, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }

    design: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/ecomerce/design/index.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }

    design2: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/ecomerce/design/index_2.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }

    design3: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/ecomerce/design/index_3.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }

    design4: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/ecomerce/design/index_4.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }

    userEval: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/ecomerce/userEval/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }

    research: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/ecomerce/research/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }

    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/Eco-merce/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tech
            github
            external
          }
          html
        }
      }
    }

    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
            buttonText
          }
          html
        }
      }
    }
  }
`;
