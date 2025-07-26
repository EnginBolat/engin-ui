import Svg, { Path } from 'react-native-svg';
import IconType from './IconType';

const ArrowUpIcon = ({ width, height, color }: IconType) => (
  <Svg
    width={width ?? '24'}
    height={height ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M19.9201 15.0506L13.4001 8.53062C12.6301 7.76063 11.3701 7.76063 10.6001 8.53062L4.08008 15.0506"
      stroke={color ?? '#292D32'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowUpIcon;
