import Svg, { Path } from 'react-native-svg';
import IconType from './IconType';

const ExportIcon = ({ height, width, color }: IconType) => (
  <Svg
    width={width ?? '24'}
    height={height ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M13 11.0008L21.2 2.80078"
      stroke={color ?? '#292D32'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 6.8V2H17.2"
      stroke={color ?? '#292D32'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
      stroke={color ?? '#292D32'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ExportIcon;
