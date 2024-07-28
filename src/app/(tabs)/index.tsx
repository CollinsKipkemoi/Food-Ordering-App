import { Image, StyleSheet, Platform } from 'react-native';
import { View } from 'react-native';
import products from '@/data/products';
import OneProduct from '@/src/components/OneProduct';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <OneProduct product={products[0]} />
      <OneProduct product={products[1]} />
      <OneProduct product={products[2]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    color: "black",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  price:{
    color: "green",
  },
  image: {
    width: '60%',
    aspectRatio: 1,
  },
  
});
