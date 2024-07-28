# REACT NATIVE MADE SIMPLE

- We use a flatlist to render a scrollable long list of items
- it takes data which is a collection of data to be rendered and a call bacll function on how the data should be rendered
- We can as well specify the number of columns

```javascript
<FlatList
  data={products}
  renderItem={({ item }) => <OneProduct product={item} />}
  numColumns={2}
  contentContainerStyle={{ gap: 3, padding: 10 }}
  columnWrapperStyle={{ gap: 3 }}
/>
```

- When rendering images, we can use the resize mode property to specify how the image should be resized. It works just like the object-fit property in css
- We can also use the source property to specify the image source

```javascript
<Image
  source={{ uri: product.image || defaultPizzaImage }}
  style={styles.image}
  resizeMode="contain"
/>
```
