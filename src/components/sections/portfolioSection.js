import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig, github } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
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
  width: 70%;
  
  max-width auto;
  max-height: auto;

  margin-left: 60px;
  padding-bottom: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;
const StyledAvatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;
const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.green};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.green};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

const PortfolioSection = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, skills, pic1, pic2, pic3 } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="portfolio" ref={revealContainer}>
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <SkillsContainer>
          {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
        </SkillsContainer>
      </StyledFlexContainer>

      <StyledFlexContainer>
        <StyledPic>
          <StyledAvatarLink href={github}>
            <StyledAvatar fluid={pic1.childImageSharp.fluid} alt="Avatar" />
          </StyledAvatarLink>
        </StyledPic>

        <StyledPic>
          <StyledAvatarLink href={github}>
            <StyledAvatar fluid={pic3.childImageSharp.fluid} alt="Avatar" />
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>

      <StyledFlexContainer>
        <StyledPic>
          <StyledAvatarLink href={github}>
            <StyledAvatar fluid={pic2.childImageSharp.fluid} alt="Avatar" />
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

// TODO: Make for-loop to iterate over pictures links, like "Other noteworthy projects"
// TODO: Add "See More" & "See Less" buttons to the page to load more pictures
// TODO: Integrate "Portfolio in the navbar and Index.js page"
// TODO: Add some cool hover action to show details of picture

PortfolioSection.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PortfolioSection;
