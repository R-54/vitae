import React from 'react';

const CollapsibleContent = props => (
  <div className={`collapsible-content ${props.collapse ? 'collapsible-content--collapse' : 'collapsible-content--show'}`}>
    <div className='collapsible-content__contact'>
      <i className="fas fa-map-marker-alt"></i> &nbsp; Mexico, Mexico City<br />
      <i className="fas fa-phone"></i> &nbsp; +52 1 55 16 60 87 43<br />
      <i className="far fa-envelope"></i> &nbsp; vendeta.ivan@gmail.com<br />
      <i className="fab fa-github"></i> &nbsp; github/R-54
    </div>
    <div className='collapsible-content__profile--title'>
      P r o f i l e
    </div>
    <div className='collapsible-content__profile--content'>
      I am a passionate pragmatic programmer.<br />
      I am always searching to learn new things and become better at the current ones i know.<br />
      I am a videogame, chess player and a sports fan.<br />
      If i need to describe myself in one word, that word would be loyalty.<br />
    </div>
  </div>
);

export default CollapsibleContent;
