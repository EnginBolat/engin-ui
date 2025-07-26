import Svg, { Path } from 'react-native-svg';
import IconType from './IconType';

const CalendarIcon = ({ width, height, color }: IconType) => (
  <Svg
    width={width ?? '24'}
    height={height ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M8 2V5"
      stroke={color ?? '#292D32'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 2V5"
      stroke={color ?? '#292D32'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.5 9.08984H20.5"
      stroke={color ?? '#292D32'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
      stroke={color ?? '#292D32'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.6947 13.6992H15.7037"
      stroke={color ?? '#292D32'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.6947 16.6992H15.7037"
      stroke={color ?? '#292D32'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9955 13.6992H12.0045"
      stroke={color ?? '#292D32'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9955 16.6992H12.0045"
      stroke={color ?? '#292D32'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.29431 13.6992H8.30329"
      stroke={color ?? '#292D32'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.29431 16.6992H8.30329"
      stroke={color ?? '#292D32'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CalendarIcon;
