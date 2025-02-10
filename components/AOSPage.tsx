import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import leftArrowIcon from '../assets/images/icon_arrow_left.png'; // 아이콘 경로

type NavigationProp = NativeStackNavigationProp<{ AOSPage: undefined }>;

interface Props {
  navigation: NavigationProp;
}

const AOSPage: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* 왼쪽 상단 아이콘 클릭 시 뒤로 가기 */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={leftArrowIcon} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 16,
    padding: 10,
  },
  backIcon: {
    width: 32,
    height: 32,
  },
});

export default AOSPage;
