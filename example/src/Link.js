import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, children, className }) => {
  return (
    <a href={href} className={`text-blue-500 hover:text-blue-700 ${className}`}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Link;
