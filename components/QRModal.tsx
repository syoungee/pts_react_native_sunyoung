import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import refreshIcon from '../assets/images/icon_refresh_2.png';

interface QRModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const QRModal: React.FC<QRModalProps> = ({ isVisible, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(180); // 3분 (180초)
  const timerRef = useRef<NodeJS.Timeout | null>(null); // 🔥 타이머를 추적하는 useRef 추가

  useEffect(() => {
    if (!isVisible) return;

    // ✅ 기존 타이머 클리어 후 새로운 타이머 시작
    if (timerRef.current) clearInterval(timerRef.current);

    setTimeLeft(180); // 타이머 리셋

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isVisible]);

  // MM:SS 형식 변환
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  // 🔄 QR 코드 리프레시 기능 (타이머 재시작)
  const onRefresh = () => {
    if (timerRef.current) clearInterval(timerRef.current); // 기존 타이머 정리
    setTimeLeft(180); // QR 코드 활성화

    // ⏳ 새로운 타이머 시작
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
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
                <QRCode value="https://example.com" size={258} color={'#000000'} />
                <Text style={styles.timeDesc}>인증시간 {formatTime(timeLeft)}</Text>
              </>
            ) : (
              <>
                <Text style={styles.modalDesc}>
                  스터디카페 QR 로그인 화면에
                  {'\n'} 인식해주세요.
                </Text>
                {/* QR 코드 감싸는 뷰 (중앙에 아이콘 추가) */}
                <View style={styles.qrContainer}>
                  <QRCode value="https://example.com" size={258} color={'#CCCCCC'} />
                  {/* 🔄 중앙에 리프레시 아이콘 배치 (TouchableOpacity 추가) */}
                  <TouchableOpacity style={styles.refreshContainer} onPress={onRefresh}>
                    <View style={styles.refreshCircle}>
                      <Image source={refreshIcon} style={styles.refreshIcon} />
                    </View>
                  </TouchableOpacity>
                </View>
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
    marginTop: 15,
    marginBottom: 10,
  },
  timeDesc: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#000',
  },
  /** ✅ QR 코드 & 리프레시 아이콘 관련 스타일 */
  qrContainer: {
    position: 'relative',
  },
  refreshContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -36 }, { translateY: -36 }],
  },
  refreshCircle: {
    width: 72,
    height: 72,
    backgroundColor: 'white',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android 그림자
  },
  refreshIcon: {
    width: 40,
    height: 40,
  },
});

export default QRModal;
