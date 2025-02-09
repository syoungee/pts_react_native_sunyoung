import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity, AppState, Platform, Image } from 'react-native';
import QRModal from './QRModal';
import { mockRankingData } from './data/mockRankingData';
import qrIcon from '../assets/images/icon_qr.png';
import rankOne from '../assets/images/img_1st.png';
import rankTwo from '../assets/images/img_2nd.png';
import rankThree from '../assets/images/img_3rd.png';

const { height } = Dimensions.get('window');
const RankingList = () => {
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
      <Text style={styles.subHeader}>{localDate} 기준</Text>

      <FlatList
        data={mockRankingData}
        keyExtractor={(item) => item.rank.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {item.rank === 1 ? (
              <Image source={rankOne} style={styles.rankImage} />
            ) : item.rank === 2 ? (
              <Image source={rankTwo} style={styles.rankImage} />
            ) : item.rank === 3 ? (
              <Image source={rankThree} style={styles.rankImage} />
            ) : (
              <Text style={[styles.rankText, styles.otherRank]}>{item.rank}</Text>
            )}
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity style={styles.floatingButton}>
          <Text style={styles.buttonText}>AOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.qrButton} onPress={() => setIsModalVisible(true)}>
          <Image source={qrIcon} style={styles.qrIcon} />
          <Text style={styles.buttonText}>입장 QR 코드</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingButton}>
          <Text style={styles.buttonText}>iOS</Text>
        </TouchableOpacity>
      </View>

      <QRModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </View>
  );
};

const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}시 ${now.getMinutes().toString().padStart(2, '0')}분`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  subHeader: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  listContainer: {
    maxHeight: height * 0.6,
  },
  rankText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rankImage: {
    width: 28,
    height: 36.75,
  },
  otherRank: {
    width: 30,
    textAlign: 'center',
  },
  name: {},
  time: {},
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    height: 64,
  },
  floatingButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  floatingButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#8647F0',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#8647F0',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 170,
    height: 52,
    justifyContent: 'center',
  },
  qrIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RankingList;
