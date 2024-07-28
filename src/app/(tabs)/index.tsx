import { Image, StyleSheet, Platform } from 'react-native';
import { View, Text, SafeAreaView } from 'react-native';
import products from '@/data/products';


export default function HomeScreen() {
  const product = products[0];
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text>${product.price}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    // justifyContent: 'center',
    color: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  price:{
    color: "green",
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  
});
