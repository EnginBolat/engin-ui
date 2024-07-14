import { useCallback, useMemo, useState, type LegacyRef } from 'react';
import {
  FlatList as RNFlatList,
  StyleSheet,
  View,
  type ListRenderItem,
} from 'react-native';

import { ActivityIndicator } from '../../loading';

type keyboardShouldPersistTapsType = boolean | 'always' | 'never' | 'handled';

interface IFlatlist {
  data: Array<any>;
  renderItem: ListRenderItem<any>;
  keyboardShouldPersistTaps?: keyboardShouldPersistTapsType;
  ref?: LegacyRef<RNFlatList>;
  horizontal?: boolean;
  initialScrollIndex?: number;
  numColumns?: number;
  onRefresh?: () => void;
  refreshing?: boolean;
  fadingEdgeLength?: number;
}

const FlatList = ({
  data,
  ref,
  renderItem,
  keyboardShouldPersistTaps,
  horizontal,
  initialScrollIndex,
  numColumns,
  onRefresh,
  refreshing,
  fadingEdgeLength,
}: Readonly<IFlatlist>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 30;
  const filteredList = useMemo(() => {
    return data;
  }, [data]);

  const handleLoadMore = useCallback(() => {
    if (currentPage * pageSize < data.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [currentPage, pageSize, data.length]);

  const paginatedList = useMemo(() => {
    if (data.length > 50) {
      filteredList.push(data.slice(0, currentPage * pageSize));
      return filteredList;
    } else {
      return filteredList;
    }
  }, [filteredList, data, currentPage, pageSize]);

  const renderFooter = useCallback(() => {
    if (currentPage * pageSize >= filteredList.length) return null;
    return (
      <View style={styles.indicatorStyle}>
        <ActivityIndicator size="small" />
      </View>
    );
  }, [currentPage, pageSize, filteredList]);

  return (
    <RNFlatList
      keyExtractor={(_, index) => {
        return index.toString();
      }}
      ref={ref}
      style={styles.listStyle}
      data={paginatedList}
      pagingEnabled={true}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      renderItem={renderItem}
      ListFooterComponent={renderFooter}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      horizontal={horizontal}
      initialScrollIndex={initialScrollIndex}
      numColumns={numColumns}
      onRefresh={onRefresh}
      refreshing={refreshing}
      fadingEdgeLength={fadingEdgeLength}
    />
  );
};

export default FlatList;

const styles = StyleSheet.create({
  listStyle: {
    width: '100%',
    flex: 1,
  },
  indicatorStyle: {
    paddingVertical: 12,
  },
});
