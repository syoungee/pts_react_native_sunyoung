import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, AppState, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRModal from '../modal/QRModal';
import { mockRankingData } from '../../data/mockRankingData.ts';
import { getCurrentTime } from '../utils/date.ts';
import styles from './RankingListStyles.ts';
import MyRanking from './MyRanking';
import RankingItem from './RankingItem';
import FloatingButton from '../FloatingButton';
import arrow from '../../../assets/images/arrow.png';

const RankingList = () => {
  const navigation = useNavigation();
  const [localDate, setLocalDate] = useState(getCurrentTime());
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const updateTime = () => setLocalDate(getCurrentTime());

    if (Platform.OS === 'web') {
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') updateTime();
      });
    } else {
      const subscription = AppState.addEventListener('change', (nextAppState) => {
        if (nextAppState === 'active') updateTime();
      });
      return () => subscription.remove();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>우리 지점 랭킹</Text>
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>전체 랭킹 보기</Text>
        <Image source={arrow} style={styles.arrowIcon} />
      </TouchableOpacity>
      <Text style={styles.subHeader}>{localDate} 기준</Text>

      {/* 나의 랭킹 */}
      <MyRanking />

      {/* 랭킹 리스트 */}
      <FlatList
        data={mockRankingData}
        keyExtractor={(item) => item.rank.toString()}
        renderItem={({ item }) => <RankingItem item={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* 플로팅 버튼 */}
      <FloatingButton
        onNavigateAOS={() => navigation.navigate('AOSPage')}
        onNavigateIOS={() => navigation.navigate('IOSPage')}
        onShowQRModal={() => setIsModalVisible(true)}
      />

      <QRModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </View>
  );
};

export default RankingList;
