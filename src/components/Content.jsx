import React from 'react';

import ContentElements from './ContentElements';

const Content = props => (
  <div className='content'>
    <div className={`content__mask ${props.collapse ? 'content__mask--collapse' : 'content__mask--show'}`} />
    <ContentElements content={props.content} />
  </div>
);

export default Content;
