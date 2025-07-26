import Svg, { Path } from 'react-native-svg';
import IconType from './IconType';

const SettingsIcon = ({ width, height, color }: IconType) => (
  <Svg
    width={width ?? '24'}
    height={height ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M3 9.10937V14.8794C3 16.9994 3 16.9994 5 18.3494L10.5 21.5294C11.33 22.0094 12.68 22.0094 13.5 21.5294L19 18.3494C21 16.9994 21 16.9994 21 14.8894V9.10937C21 6.99937 21 6.99937 19 5.64937L13.5 2.46937C12.68 1.98937 11.33 1.98937 10.5 2.46937L5 5.64937C3 6.99937 3 6.99937 3 9.10937Z"
      stroke={color ?? '#292D32'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke={color ?? '#292D32'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SettingsIcon;
