import { ActivityIndicator as RNActivityIndicator } from 'react-native';

interface IActivityIndicator {
  animating?: boolean;
  hidesWhenStopped?: boolean;
  size?: number | 'small' | 'large';
}

const ActivityIndicator = ({
  animating,
  hidesWhenStopped,
  size,
}: Readonly<IActivityIndicator>) => {
  return (
    <RNActivityIndicator
      animating={animating}
      hidesWhenStopped={hidesWhenStopped}
      size={size}
    />
  );
};

export default ActivityIndicator;
