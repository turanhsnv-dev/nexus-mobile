import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../constants/colors';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  variant?: 'primary' | 'outline' | 'ghost';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const CustomButton = memo(({ 
  title, 
  onPress, 
  isLoading = false, 
  variant = 'primary', 
  style, 
  textStyle,
  disabled 
}: CustomButtonProps) => {
  
  const getBackgroundColor = () => {
    if (disabled) return '#9CA3AF';
    switch (variant) {
      case 'outline': return 'transparent';
      case 'ghost': return 'transparent';
      default: return Colors.light.tint; // Default Red
    }
  };

  const getTextColor = () => {
    if (disabled) return '#F3F4F6';
    switch (variant) {
      case 'outline': return Colors.light.tint;
      case 'ghost': return Colors.light.textSecondary;
      default: return '#FFFFFF';
    }
  };

  const getBorder = () => {
    if (variant === 'outline') return { borderWidth: 1, borderColor: Colors.light.tint };
    return {};
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: getBackgroundColor() },
        getBorder(),
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.text, { color: getTextColor() }, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});