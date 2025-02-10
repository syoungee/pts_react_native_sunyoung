import React from 'react';
import { View } from 'react-native';
import RankingList from './RankingList/RankingList';
import styles from './MainScreenStyles';

const MainScreen = () => (
  <View style={styles.container}>
    <RankingList />
  </View>
);

export default MainScreen;
