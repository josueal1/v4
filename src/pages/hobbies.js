import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, PortfolioSection, Contact } from '@components';
import styled from 'styled-components';
import { Main } from '@styles';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const PortfolioPage = ({ location, data }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <PortfolioSection data={data.hobbies.edges} />
      <Contact data={data.contact.edges} />
    </StyledMainContainer>
  </Layout>
);

PortfolioPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default PortfolioPage;

export const pageQuery = graphql`
  {
    hobbies: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hobbies/" } }) {
      edges {
        node {
          frontmatter {
            title
            skills
            pics {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
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
