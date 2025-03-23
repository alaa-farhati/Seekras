import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: '#fff',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#E4E6EB',
        elevation: 2,
      },
      headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1877F2',
      },
      headerIcons: {
        flexDirection: 'row',
      },
      iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 20,
        backgroundColor: '#E4E6EB',
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E4E6EB',
        margin: 15,
        borderRadius: 20,
        paddingHorizontal: 15,
        height: 45,
      },
      searchIcon: {
        marginRight: 10,
      },
      searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#000',
      },
      categoriesContainer: {
        backgroundColor: '#fff',
        paddingVertical: 5,
       
      },
      categoriesList: {
        paddingHorizontal: 10,
      },
      categoryItem: {
        alignItems: 'center',
        marginHorizontal: 8,
        paddingVertical: 8,
        minWidth: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
      },
      activeCategoryItem: {
        borderBottomWidth: 3,
        borderBottomColor: '#1877F2',
      },
      categoryText: {
        marginTop: 6,
        fontSize: 13,
        color: '#65676B',
      },
      activeCategoryText: {
        color: '#1877F2',
        fontWeight: 'bold',
      },
      productsGrid: {
        padding: 8,
      },
      productRow: {
        justifyContent: 'space-between',
      },
      productCard: {
        width: '48.5%',
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      imageContainer: {
        position: 'relative',
      },
      productImage: {
        width: '100%',
       borderRadius: 12,
        aspectRatio: 1.2,
        backgroundColor: '#E4E6EB',
      },
      savedBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#1877F2',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      productInfo: {
        padding: 12,
      },
      priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
      },
      title: {
        fontSize: 13,
        marginTop: 6,
        color: '#000',
        fontWeight: '500',
      },
      location: {
        fontSize: 12,
        color: '#65676B',
        marginTop: 6,
      },
      bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 6,
      },
      timePosted: {
        fontSize: 12,
        color: '#65676B',
      },
      sponsored: {
        fontSize: 12,
        color: '#65676B',
        fontStyle: 'italic',
      },
});

export default styles;
