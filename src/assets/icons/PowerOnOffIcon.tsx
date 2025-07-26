import React from 'react';
import { Svg, G, Defs, ClipPath, Rect, Path } from 'react-native-svg';
import IconType from './IconType';

const PowerOnOffIcon = ({ width, height, color }: IconType) => (
  <Svg
    width={width ?? '24'}
    height={height ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
  >
    <G clip-path="url(#clip0_129_2848)">
      <Path
        d="M14 12H10V0H14V12ZM18.213 1.754L17 3.353C19.984 5.085 22 8.308 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 8.308 4.016 5.085 7 3.353L5.787 1.754C2.322 3.857 0 7.651 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 7.651 21.678 3.857 18.213 1.754Z"
        fill={color ?? 'black'}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_129_2848">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default PowerOnOffIcon;
