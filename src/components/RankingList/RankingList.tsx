import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, AppState, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRModal from '../modal/QRModal';
import { mockRankingData } from '../../data/mockRankingData.ts';
import { getCurrentTime } from '../utils/date.ts';
import styles from './RankingListStyles.ts';
import qrIcon from '../../../assets/images/icon_qr.png';
import arrow from '../../../assets/images/arrow.png';
import MyRanking from './MyRanking';
import RankingItem from './RankingItem';

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
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('AOSPage')}>
          <Text style={styles.buttonText}>AOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.qrButton} onPress={() => setIsModalVisible(true)}>
          <Image source={qrIcon} style={styles.qrIcon} />
          <Text style={styles.buttonText}>입장 QR 코드</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('IOSPage')}>
          <Text style={styles.buttonText}>iOS</Text>
        </TouchableOpacity>
      </View>

      <QRModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </View>
  );
};

export default RankingList;
