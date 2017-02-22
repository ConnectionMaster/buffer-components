import React from 'react';
import Icon from '../../Icon';

const PersonsIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M7.5,2.22760761 C7.18722107,2.08020563 6.85063542,2 6.5,2 C4.84314575,2 3.5,3.790861 3.5,6 C3.5,8.209139 4.84314575,10 6.5,10 C6.85063542,10 7.18722107,9.91979437 7.5,9.77239239 C6.33480763,9.22327718 5.5,7.7416251 5.5,6 C5.5,4.2583749 6.33480763,2.77672282 7.5,2.22760761 Z M7.5,11 L1.99554521,11 C1.17955446,11 0.5,11.6715729 0.5,12.5 L0.5,14 L7.5,14 L2.5,14 L2.5,12.5 C2.5,11.6715729 3.17955446,11 3.99554521,11 L7.5,11 Z" />
    <path d="M9.5,10 C7.84314575,10 6.5,8.209139 6.5,6 C6.5,3.790861 7.84314575,2 9.5,2 C11.1568542,2 12.5,3.790861 12.5,6 C12.5,8.209139 11.1568542,10 9.5,10 Z M3.5,12.5 C3.5,11.6715729 4.17955446,11 4.99554521,11 L14.0044548,11 C14.8304216,11 15.5,11.6657972 15.5,12.5 L15.5,14 L3.5,14 L3.5,12.5 Z" />
  </Icon>;

PersonsIcon.propTypes = {
  ...Icon.propTypes,
};

export default PersonsIcon;
