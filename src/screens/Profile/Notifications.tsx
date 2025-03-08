import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notifications: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notifications</Text>
            {/* Add your notification components here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Notifications;