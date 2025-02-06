import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg'; // SVG 사용을 위한 import
// import QRIcon from '../assets/images/qricon.svg'; // SVG 아이콘 import
import { RankingDTO } from './types/RankingDTO';
import { mockRankingData } from './data/mockRankingData';

const { height } = Dimensions.get('window');

const RankingList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>우리 지점 랭킹</Text>
      <Text style={styles.subHeader}>00시 00분 기준</Text>
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
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity style={styles.floatingButton}>
          <Text style={styles.buttonText}>AOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.qrButton}>
          {/* <QRIcon width={24} height={24} style={styles.qrIcon} /> */}
          <Text style={styles.buttonText}>입장 QR 코드</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingButton}>
          <Text style={styles.buttonText}>iOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rank: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  name: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  time: {
    fontSize: 16,
    color: '#777',
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
  qrIcon: {
    marginRight: 8,
  },
});

export default RankingList;
