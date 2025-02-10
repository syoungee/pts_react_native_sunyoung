import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './RankingList/RankingListStyles.ts';
import qrIcon from '../../assets/images/icon_qr.png';
import arrow from '../../assets/images/arrow.png';

interface FloatingButtonProps {
  onNavigateAOS: () => void;
  onNavigateIOS: () => void;
  onShowQRModal: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onNavigateAOS, onNavigateIOS, onShowQRModal }) => {
  return (
    <View style={styles.floatingButtonContainer}>
      <TouchableOpacity style={styles.floatingButton} onPress={onNavigateAOS}>
        <Text style={styles.buttonText}>AOS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.qrButton} onPress={onShowQRModal}>
        <Image source={qrIcon} style={styles.qrIcon} />
        <Text style={styles.buttonText}>입장 QR 코드</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.floatingButton} onPress={onNavigateIOS}>
        <Text style={styles.buttonText}>iOS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;
