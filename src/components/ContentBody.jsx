import React from 'react';

const ContentBody = props => (
  props.body.map((data, index) => (
    <div className='content-body' key={index}>
      <div className='content-body__subtitle'>
        {data.subtitle}
      </div>
      <div className='content-body__info'>
        {data.info}
      </div>
    </div>
  ))
);

export default ContentBody;
