import { FlatList, StyleSheet } from 'react-native';
import { View } from 'react-native';
import products from '@/data/products';
import OneProduct from '@/src/components/OneProduct';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <OneProduct product={item}
        />}
        numColumns={2}
        contentContainerStyle={{ gap: 3, padding: 10 }}
        columnWrapperStyle={{ gap: 3 }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
  }
});