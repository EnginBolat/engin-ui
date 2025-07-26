import React from 'react';

import { Icons, IconsType } from '../../assets/icons/Icons';
import IconType from '../../assets/icons/IconType';

interface Props extends IconType {
  iconName: IconsType;
}

const CustomIcon = ({ color, height, width, iconName }: Props) => {
  const IconComponent = Icons[iconName];

  return <IconComponent color={color} width={width} height={height} />;
};

export default CustomIcon;
