import * as React from 'react';
import styled from 'styled-components';
import { Image } from 'react-native';

const HeaderMenu = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/menu.svg')}
    />
  );
}

export default HeaderMenu;