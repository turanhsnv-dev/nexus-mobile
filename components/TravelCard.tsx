import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface TravelCardProps {
  title: string;
  location: string;
  price: string;
  imageUrl: string; 
}

export const TravelCard = ({ title, location, price, imageUrl }: TravelCardProps) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.image} 
      />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>📍 {location}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.perNight}> / gecə</Text>
        </View>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200, 
    resizeMode: 'cover', 
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  perNight: {
    color: '#999',
  }
});