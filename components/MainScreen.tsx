// MainScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import RankingList from '../components/RankingList'; // RankingList 컴포넌트
import { useNavigation } from '@react-navigation/native'; // 네비게이션 사용

const MainScreen = () => {
  const navigation = useNavigation(); // 네비게이션 훅 사용

  return (
    <View style={styles.container}>
      <RankingList navigation={navigation} />
      {/* <FloatingButton type="AOS" />
      <FloatingButton type="iOS" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
});

export default MainScreen;
