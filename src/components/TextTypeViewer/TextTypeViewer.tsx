import React, { useCallback } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

import { TextType } from '../../constants/AppTextType';

type TextStylePreview = {
  name: string;
  style: any;
};

type SectionData = {
  title: string;
  data: TextStylePreview[];
};

const transformTextTypeToSections = (): SectionData[] => {
  const entries: SectionData[] = [];

  for (const [categoryKey, categoryValue] of Object.entries(TextType)) {
    if (typeof categoryValue === 'object') {
      const items: TextStylePreview[] = [];

      for (const [subKey, subValue] of Object.entries(categoryValue)) {
        if (typeof subValue === 'object' && 'fontSize' in subValue) {
          items.push({
            name: `${subKey}`,
            style: subValue,
          });
        } else {
          for (const [weightKey, weightValue] of Object.entries(subValue)) {
            items.push({
              name: `${subKey} ${weightKey}`,
              style: weightValue,
            });
          }
        }
      }

      entries.push({
        title: categoryKey,
        data: items,
      });
    }
  }

  return entries;
};

const TextTypeViewer = () => {
  const sections = transformTextTypeToSections();

  const SectionHeader = useCallback(
    ({ title }: { title: string }) => (
      <Text style={styles.header}>{title}</Text>
    ),
    [],
  );

  const renderItem = useCallback(
    ({ item }: { item: TextStylePreview }) => (
      <View style={styles.itemContainer}>
        <Text style={[styles.label, item.style]}>{item.name}</Text>
        <Text style={styles.info}>
          {`size: ${item.style.fontSize}, line: ${item.style.lineHeight}, weight: ${item.style.fontWeight}`}
        </Text>
      </View>
    ),
    [],
  );

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.name + index}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({ section: { title } }) => (
        <SectionHeader title={title} />
      )}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    marginHorizontal: 12,
  },
  itemContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomWidth: 0.3,
    borderColor: '#ddd',
  },
  label: {
    fontSize: 16,
  },
  info: {
    fontSize: 12,
    color: '#666',
  },
});

export default TextTypeViewer;
