// Notable Mentions & Credits:
/*
https://gist.github.com/oak-wildwood/2c7de99a022f1b9f7e9d9707686ff7ba
https://github.com/gatsbyjs/gatsby/issues/18665#issuecomment-542017788
https://stackoverflow.com/a/51637303
*/

import React from 'react';

class RedirectPage extends React.Component {
  componentDidMount() {
    window.location.replace('https://calendly.com/josueal1/30min');
  }

  render() {
    return null;
  }
}

export default RedirectPage;

// TODO:  Embed calendar into blue background but keep it mobile friendly
// using the CalendlyEmbedReact.js component

/* 
import { theme, mixins, media, Main } from '@styles';
import styled from 'styled-components';


const StyledCalendlyDiv = styled.div`
  height: 1020px;
  min-width: 320px;
`;
  
class CalendlyEmbed extends React.Component {
  calendlyScriptSrc = 'https://assets.calendly.com/assets/external/widget.js'
  buildCalendlyUrl = (account, eventName) =>
    `https://calendly.com/${account}/${eventName}`

  componentDidMount() {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src', this.calendlyScriptSrc)
    head.appendChild(script)
  }

  componentWillUnmount() {
    const head = document.querySelector('head')
    const script = document.querySelector('script')
    head.removeChild(script)
  }

  render() {
    const { account, eventName } = this.props
    return (
      <div id="schedule_form">
        <StyledCalendlyDiv className="calendly-inline-widget" data-url={this.buildCalendlyUrl(account, eventName)}> 
          
        </StyledCalendlyDiv>
      </div>
    )
  }
}

export default CalendlyEmbed;
*/
