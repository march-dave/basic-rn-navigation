#  설치 방법

1. yarn add react-navigation react-native-gesture-handler styled-components
2. react-native link


시작:
![alt text](https://github.com/march-dave/basic-rn-navigation/blob/master/RN-navigation-Android.png)

Logout: 
![alt text](https://github.com/march-dave/basic-rn-navigation/blob/master/RN-navagation-LoginScreen.png)


# 이런
react-native 0.60.0
으로 설치 했다가 react-native-gesture-handler 링크 다 깨져서
다시 0.59.9 로 내림 -- 이게 언제 해결 될라나.

0.59.9 에서 링크 된것을 
이전에 react-navigation, react-native-gesture-handler link 한것을 unlink 한다.

해결 방법: RN 0.59.9 의 auto link를 제거 하고 pod로 실행 하면 된다.
안드로이는 아직 잘 모르겠네 이건 찾아 봐야 한다.

#  Error 내용은 아래와 같은

error React Native CLI uses autolinking for native dependencies, but the following modules are linked manually: 
  - react-native-gesture-handler (to unlink run: "react-native unlink react-native-gesture-handler")