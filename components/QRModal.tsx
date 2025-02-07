import React, { useEffect, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

interface QRModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const QRModal: React.FC<QRModalProps> = ({ isVisible, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(180); // 3분 (180초)

  useEffect(() => {
    if (!isVisible) return; // 모달이 닫히면 타이머 초기화 안 함

    setTimeLeft(1); // 모달이 열릴 때 타이머 리셋

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer); // 타이머 종료
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  // 남은 시간을 MM:SS 형식으로 변환하는 함수
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  return (
    <Modal visible={isVisible} transparent animationType="none" onRequestClose={onClose}>
      <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose}>
        <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>QR 로그인</Text>

            {timeLeft > 0 ? (
              <>
                <Text style={styles.modalDesc}>
                  좌석에 있는 기기에
                  {'\n'} QR코드를 인식시켜주세요!
                </Text>
                <QRCode
                  value="https://example.com"
                  size={258}
                  color={'#000000'} // 정상 상태 (검정)
                />
                <Text style={styles.timeDesc}>인증시간 {formatTime(timeLeft)}</Text>
              </>
            ) : (
              <>
              <Text style={styles.modalDesc}>
                  스터디카페 QR 로그인 화면에
                  {'\n'} 인식해주세요.
                </Text>
                <QRCode
                  value="https://example.com"
                  size={258}
                  color={'#CCCCCC'} // 만료 상태 (회색)
                />
                <Text style={styles.expiredText}>인증 시간이 완료되었어요.{'\n'}다시 시도해주세요.</Text>
              </>
            )}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  expiredText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeDesc: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
});

export default QRModal;
