import { Image, StyleSheet} from 'react-native';
import { View, Text} from 'react-native';

const OneProduct = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
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
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
    },
    price: {
        color: "green",
    },
    image: {
        width: '60%',
        aspectRatio: 1,
    },

});
