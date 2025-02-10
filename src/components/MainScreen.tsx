// MainScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import RankingList from './RankingList';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RankingList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
});

export default MainScreen;
