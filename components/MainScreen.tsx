import React from 'react';
import { View, StyleSheet } from 'react-native';
import RankingList from '../components/RankingList';
// import FloatingButton from '../components/FloatingButton';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <RankingList />
      {/* <FloatingButton type="AOS" />
      <FloatingButton type="iOS" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
});

export default MainScreen;
