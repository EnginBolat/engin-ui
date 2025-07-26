import { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { IconList } from '../../assets/icons/Icons';
import { AppColors } from '../../constants/AppColors';
import { TextType } from '../../constants/AppTextType';
import IconType from '../../assets/icons/IconType';
import Seperator from '../Seperator/Seperator';

type ItemType = {
  key: string;
  Component: React.FC<IconType>;
};

const IconTypeViewer = () => {
  const ListHeaderComponent = useCallback(
    () => <Text style={styles.listheader}>Icons</Text>,
    [],
  );

  const renderItem = useCallback(
    ({ item: Item }: { item: ItemType }) => (
      <View style={styles.itemContainer}>
        <Item.Component />
        <Text>{Item.key}</Text>
      </View>
    ),
    [],
  );

  return (
    <FlatList
      keyExtractor={(item, index) => `${item.key}-${index}`}
      data={IconList}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={renderItem}
      ItemSeparatorComponent={Seperator}
      initialNumToRender={10}
      windowSize={24}
    />
  );
};

export default IconTypeViewer;

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: AppColors.menu.inactive,
    opacity: 0.5,
  },
  itemContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  listheader: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    ...TextType.heading.large.bold,
  },
});
