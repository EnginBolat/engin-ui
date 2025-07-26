import { SectionList, StyleSheet, Text, View } from 'react-native';
import { AppColors, IAppColors } from '../../constants/AppColors';
import { capitalize, splitCamelCase } from '../../utils/helper';
import { useCallback } from 'react';

type SectionItem = {
  key: string;
  value: string;
};

type SectionData = {
  title: string;
  data: SectionItem[];
};

const transformColorsToSections = (colors: IAppColors): SectionData[] =>
  Object.entries(colors).map(([key, value]) => {
    if (typeof value === 'object') {
      return {
        title: key,
        data: Object.entries(value).map(([subKey, subValue]) => ({
          key: subKey,
          value: subValue,
        })),
      };
    } else {
      return {
        title: key,
        data: [{ key, value }],
      };
    }
  });

const Colors = () => {
  const sections = transformColorsToSections(AppColors);

  const SectionHeader = useCallback(
    ({ title }: { title: string }) => (
      <Text style={styles.header}>{capitalize(splitCamelCase(title))}</Text>
    ),
    [],
  );

  const renderItem = useCallback(({ item }: { item: SectionItem }) => {
    const backgroundColor = item.value ?? '#FFF';

    return (
      <View style={styles.itemContainer}>
        <View style={[styles.colorBox, { backgroundColor }]} />
        <Text style={styles.itemText}>
          {capitalize(splitCamelCase(item.key))}
        </Text>
      </View>
    );
  }, []);

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.key + index}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({ section: { title } }) => (
        <SectionHeader title={title} />
      )}
      renderItem={renderItem}
    />
  );
};

export default Colors;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
    marginHorizontal: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  colorBox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 14,
  },
});
