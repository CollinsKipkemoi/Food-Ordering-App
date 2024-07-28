import { Image, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { Product } from '../Types';

const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';
type ProductProps = {
    product: Product;
};

const OneProduct = ({ product }: ProductProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    );

}

export default OneProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        color: "black",
        borderRadius: 10,
        maxWidth: '50%',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
    },
    price: {
        color: "green",
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },

});
