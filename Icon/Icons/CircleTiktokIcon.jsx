import React from 'react';
import Icon from '..';

const CircleTiktokIcon = ({ color, size }) => (
  <Icon color={color} size={size}>
    <g>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9.19889 2.6696C8.86713 2.67005 8.53478 2.6705 8.20133 2.67566C8.1926 3.81668 8.19326 4.95811 8.19392 6.10091C8.19429 6.74698 8.19466 7.39349 8.19333 8.04061C8.19189 8.25602 8.19211 8.47118 8.19233 8.68623C8.19292 9.26491 8.1935 9.84277 8.16167 10.4224C8.15703 10.5833 8.07634 10.7247 7.99798 10.862C7.99173 10.8729 7.9855 10.8839 7.97932 10.8948C7.72064 11.3165 7.24495 11.6045 6.74859 11.6098C5.99989 11.6761 5.29851 11.0631 5.19284 10.3337C5.19205 10.298 5.19078 10.262 5.18951 10.2259C5.18228 10.0202 5.17491 9.8104 5.25318 9.6187C5.36452 9.30268 5.5782 9.02333 5.85954 8.84099C6.2449 8.57331 6.76026 8.53331 7.20128 8.67598C7.20128 8.39482 7.20608 8.11378 7.21089 7.83276C7.21733 7.45574 7.22377 7.07875 7.21862 6.70154C6.25323 6.52086 5.22218 6.82621 4.48614 7.46725C3.83677 8.01761 3.41842 8.82666 3.33841 9.67237C3.32941 9.88938 3.33308 10.1114 3.34375 10.3337C3.43575 11.3738 4.06745 12.3428 4.96516 12.8722C5.50686 13.1916 6.14189 13.3649 6.77759 13.3286C7.81398 13.3112 8.82303 12.7555 9.4044 11.9032C9.76575 11.3911 9.97076 10.7728 10.0054 10.1514C10.0145 9.29781 10.0139 8.44262 10.0133 7.58642C10.013 7.14525 10.0127 6.70381 10.0138 6.26218C10.2448 6.41319 10.4808 6.56087 10.7341 6.67554C11.3158 6.95155 11.9599 7.0849 12.6009 7.1059V5.31613C11.9169 5.2398 11.2138 5.01412 10.7168 4.52109C10.2188 4.04007 9.97409 3.34703 9.93909 2.66666C9.69255 2.66894 9.44588 2.66927 9.19889 2.6696Z" />
    </g>
  </Icon>
);

CircleTiktokIcon.propTypes = {
  ...Icon.propTypes,
};

export default CircleTiktokIcon;