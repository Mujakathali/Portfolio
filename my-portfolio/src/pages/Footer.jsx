import React from 'react';
import StarBackground from '../components/Starb';

const Footer = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '640px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: '100px',
      overflow: 'hidden',
    }}>
      <StarBackground />
      Footer
    </div>
  )
}

export default Footer