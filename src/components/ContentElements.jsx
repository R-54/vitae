import React from 'react';

import ContentBody from './ContentBody';

const ContentElements = props => (
  props.content.map((data, index) => (
    <div className='content-elements' key={index} >
      <div className='content-elements__title'>
        {data.title}
      </div>
      <ContentBody body={data.body} />
    </div>
  ))
);

export default ContentElements;
