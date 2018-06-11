import React from 'react';

const NavBar = props => (
  <div className='nav-bar'>
    <div className='nav-bar__name'>
      I V A N &nbsp; R O D R I G U E Z<br />
      <p className='name__job-title'>
        Software developer
      </p>
    </div>
    <button
      className={`nav-bar__button ${props.collapse ? 'nav-bar__button--rotate-right' : 'nav-bar__button--rotate-left'}`}
      onClick={props.handleCollapse}
    >
      <i className='fas fa-ellipsis-v fa-2x'></i>
    </button>
  </div>
);

export default NavBar;
