# 스터디워크 개발 과제 - 랭킹 확인 및 QR 인증 서비스

## 🚀 기술 스택

- Frontend: React Native v15.1.3

## 📦 설치 및 실행 방법

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## 📂 프로젝트 구조

```
📦 pts_react_native_sunyoung
├── 📂 app
├── 📂 components
│   ├── 📜 RankingList.tsx
│   ├── 📜 QRModal.tsx
│   ├── 📜 AOSPage.tsx
│   ├── 📜 IOSPage.tsx
├── 📜 .gitignore
├── 📜 package.json
├── 📜 README.md
└── ...
```

## 🔥 주요 기능

1. 랭킹 확인 기능

- 1 ~ 3등은 뱃지 부여
- "00시 00분 기준"은 localDate 사용, background -> foreground 전환 시 현재 시간으로 새로고침
- AOS, IOS 버튼 클릭 시 화면 전환
  <br/>
  <img src="https://github.com/user-attachments/assets/8ae65f3b-148a-47d6-bf5e-d8d645748c05" width="400"/>
  <img src="https://github.com/user-attachments/assets/f01efa86-26c1-4da3-8d36-3764e6f74cf4" width="400"/>

2-1. QR code 팝업

- 팝업 생성과 동시에 QR code 이미지 생성
- 3분 타이머
- QR 코드 인식 시 황선영\_95(랜덤 2자리 숫자)
  <br/>
  <img src="https://github.com/user-attachments/assets/f03f1eae-7432-4b48-97d7-ea06aa5e5570" width="400"/>

2-2. QR code 팝업 비활성화

- 3분 타이머 종료 후 비활성화 & 새로고침 버튼 활성화
- 새로 고침 후 QR 코드 인식 시 황선영\_25(이전 과는 다른 랜덤 2자리 숫자)
  <br/>
  <img src="https://github.com/user-attachments/assets/2ec6f4a8-72d8-456b-9be5-008652b450d6" width="400"/>
