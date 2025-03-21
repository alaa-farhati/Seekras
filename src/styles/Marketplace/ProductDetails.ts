import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    descriptionContainer: {
      backgroundColor: '#fff',
      padding: 15,
      marginTop: 8,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 10,
    },
    descriptionContent: {
      backgroundColor: '#EBECED',
      padding: 10,
      borderRadius: 10,
    },
    descriptionText: {
      fontSize: 16,
      color: '#000',
      lineHeight: 22,
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        marginTop: 8,
      },
      userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
      },
      messageInput: {
        flex: 1,
        backgroundColor: '#F0F2F5',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 12,
      },
      messagePlaceholder: {
        color: '#65676B',
      },
      basicInfoContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E4E6EB',
      },
      titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      productName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        flex: 1,
      },
      reservedBadge: {
        backgroundColor: '#E4E6EB',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 15,
      },
      reservedText: {
        fontSize: 14,
        color: '#65676B',
      },
      price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
      },
      timePosted: {
        fontSize: 14,
        color: '#65676B',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#E4E6EB',
      },
      headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 15,
      },
      backButton: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerActions: {
        flexDirection: 'row',
      },
      iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
      },
      mainImageContainer: {
        width: '100%',
        position: 'relative',
      },
      mainImage: {
        width: '100%',
        height: 240,
        backgroundColor: '#E4E6EB',
      },
      imageIndicators: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#CCC',
        marginHorizontal: 3,
      },
      activeIndicator: {
        backgroundColor: '#666',
      },
      sellerInfoContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginTop: 8,
      },
      sellerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      sellerIconContainer: {
        width: 30,
      },
      sellerName: {
        fontSize: 16,
        color: '#000',
      },
      conditionText: {
        fontSize: 16,
        color: '#000',
      },
      similarProductsContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginTop: 8,
        marginBottom: 80, // Add padding to avoid bottom navigation overlap
      },
     
      similarProductsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      similarProduct: {
        width: '48%',
      },
      similarProductImage: {
        width: '100%',
        height: 150,
        backgroundColor: '#E4E6EB',
        borderRadius: 8,
        marginBottom: 8,
      },
      similarProductInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      similarProductPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
      },
  });