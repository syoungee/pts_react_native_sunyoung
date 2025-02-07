import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity, TouchableWithoutFeedback, AppState, Platform, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg'; // QR 코드 생성 라이브러리
// import { RankingDTO } from './types/RankingDTO';
import { mockRankingData } from './data/mockRankingData';

const { height } = Dimensions.get('window');

const RankingList = () => {
  const [localDate, setLocalDate] = useState(getCurrentTime());
  const [isModalVisible, setIsModalVisible] = useState(false); // 모달 상태 추가

  useEffect(() => {
    const updateTime = () => setLocalDate(getCurrentTime());

    if (Platform.OS === 'web') {
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          updateTime();
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    } else {
      const subscription = AppState.addEventListener('change', (nextAppState) => {
        if (nextAppState === 'active') {
          updateTime();
        }
      });
      return () => subscription.remove();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>우리 지점 랭킹</Text>
      <Text style={styles.subHeader}>{localDate} 기준</Text>

      <View style={styles.rankInfoContainer}>
        <Text style={styles.myRank}>
          나의 랭킹: <Text style={styles.bold}>23등</Text>
        </Text>
        <Text style={styles.rankChange}>+2 상승</Text>
        <Text style={styles.timeRemaining}>13시간 10분</Text>
      </View>

      <FlatList
        data={mockRankingData}
        keyExtractor={(item) => item.rank.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.rank}>{item.rank}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />

      {/* Floating Button (QR 코드 버튼) */}
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity style={styles.floatingButton}>
          <Text style={styles.buttonText}>AOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.qrButton} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.buttonText}>입장 QR 코드</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingButton}>
          <Text style={styles.buttonText}>iOS</Text>
        </TouchableOpacity>
      </View>

      {/* QR 코드 모달 */}
      <Modal visible={isModalVisible} transparent={true} animationType="none" onRequestClose={() => setIsModalVisible(false)}>
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={() => setIsModalVisible(false)}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>QR 로그인</Text>
              <Text style={styles.modalDesc}>
                좌석에 있는 기기에
                <br /> QR코드를 인식시켜주세요!
              </Text>
              <QRCode value="https://example.com" size={258} />
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

// 현재 시간을 "HH시 MM분" 형식으로 반환
const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}시 ${minutes}분`;
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
  rankInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f5',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  myRank: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  rankChange: {
    fontSize: 14,
    color: '#8647F0',
  },
  timeRemaining: {
    fontSize: 14,
    color: '#555',
  },
  listContainer: {
    maxHeight: height * 0.6,
  },
  rank: {},
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
  },
  floatingButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#8647F0',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 170,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 32,
    alignItems: 'center',
    width: 342,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalDesc: {
    fontSize: 16,
    textAlign: 'center',
    color: '#8E8E93',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: '#8647F0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RankingList;
