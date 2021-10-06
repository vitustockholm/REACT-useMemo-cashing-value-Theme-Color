import React from 'react';
import PropTypes from 'prop-types';

//Styles
import { StyledCard } from './Card.style';

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
