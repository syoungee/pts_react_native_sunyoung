import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './RankingListStyles';
import rankOne from '../../../assets/images/img_1st.png';
import rankTwo from '../../../assets/images/img_2nd.png';
import rankThree from '../../../assets/images/img_3rd.png';

interface RankingItemProps {
  item: {
    rank: number;
    name: string;
    time: string;
  };
}

const RankingItem: React.FC<RankingItemProps> = ({ item }) => {
  const getRankImage = (rank: number) => {
    if (rank === 1) return rankOne;
    if (rank === 2) return rankTwo;
    if (rank === 3) return rankThree;
    return null;
  };

  return (
    <View style={styles.item}>
      {getRankImage(item.rank) ? (
        <Image source={getRankImage(item.rank)!} style={styles.rankImage} />
      ) : (
        <Text style={[styles.rankText, styles.otherRank]}>{item.rank}</Text>
      )}
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );
};

export default RankingItem;
