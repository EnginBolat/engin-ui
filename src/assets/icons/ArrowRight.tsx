import Svg, { Path } from 'react-native-svg';
import IconType from './IconType';

const ArrowRightIcon = ({ width, height, color }: IconType) => (
  <Svg
    width={width ?? '24'}
    height={height ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M8.90991 19.9201L15.4299 13.4001C16.1999 12.6301 16.1999 11.3701 15.4299 10.6001L8.90991 4.08008"
      stroke={color ?? '#292D32'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowRightIcon;
