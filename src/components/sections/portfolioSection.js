import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 200px));
  ${media.tablet`grid-template-columns: repeat(2, minmax(200px, 200px));`};
  ${media.phablet`grid-template-columns: repeat(1, minmax(320px, 320px));`};
  width: 90%;
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding-bottom: 30px;
  margin: auto;
  list-style: none;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.slate};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.green};
    font-size: ${fontSizes.sm};
    line-height: 12px;
  }
`;
const StyledPic = styled.div`
  position: relative;
  width: 100%;
  max-width auto;
  max-height: auto;
  padding: 5px;
  ${media.tablet`width:100%`};
  ${media.phablet`width: 100%;`};
`;
const StyledAvatar = styled(Img)`
  mix-blend-mode: multiply;
  // filter: grayscale(50%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  height: 300px;
  width: 300px;
  ${media.phablet`height:200px; width:100%;`};
`;

const PortfolioSection = ({ data }) => {
  const { frontmatter } = data[0].node;
  const { title, skills, pics } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="portfolio" ref={revealContainer}>
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <SkillsContainer>
          {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
        </SkillsContainer>
      </StyledFlexContainer>

      <StyledFlexContainer>
        {pics &&
          pics.map((pic, i) => (
            <StyledPic key={i}>
              <StyledAvatar fluid={pic.childImageSharp.fluid} alt="Avatar" />
            </StyledPic>
          ))}
      </StyledFlexContainer>
    </StyledContainer>
  );
};

// TODO: Add "Other noteworthy hobbies"
// TODO: Add "See More" & "See Less" buttons to the page to load more pictures
// TODO: Integrate "Portfolio in the navbar and Index.js page"
// TODO: Add some cool hover action to show details of picture

PortfolioSection.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PortfolioSection;
