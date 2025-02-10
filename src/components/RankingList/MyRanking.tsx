import React from 'react';
import { View, Text } from 'react-native';
import styles from './RankingListStyles';

const MyRanking: React.FC = () => {
  return (
    <View style={styles.myRankingContainer}>
      <View style={styles.myRankingLeft}>
        <Text style={styles.myRankingText}>나의 랭킹: </Text>
        <Text style={styles.myRankingRank}>23등</Text>
        <Text style={styles.rankChangeText}>+2 상승</Text>
      </View>
      <View style={styles.myRankingRight}>
        <Text style={styles.myRankingText}>13시간 10분</Text>
      </View>
    </View>
  );
};

export default MyRanking;
