import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CompanyCardProps {
  name: string;
  sector: string;
  discount: string;
}

export const CompanyCard = ({ name, sector, discount }: CompanyCardProps) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      
      <View style={styles.infoContainer}>
        <Text style={styles.companyName}>{name}</Text>
        <Text style={styles.sector}>{sector}</Text>
      </View>

      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>{discount}</Text>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  infoContainer: {
    flex: 1,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sector: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  discountBadge: {
    backgroundColor: '#e8f5e9',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  discountText: {
color: '#2e7d32',
    fontWeight: 'bold',
    fontSize: 16,
  },
});