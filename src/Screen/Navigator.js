import {
    createSwitchNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';

  // 리액트 네이티브에서는 웹 앱과 달리 네이게이션이 여러가지가 사용자마다 선택해서 쓰고 있다.
  // react-native-navigation (wix) 
  // react-navigation (react-community)
  // native-navigation (airbnb)
  // react-native-router-flux 

  // 있다. 이전 회사 프로젝트는 react-native-router-flux 으로 사용 했었는데
  
  import AuthLoading from './AuthLoading';
  import Auth from './Auth';
  
  import FullDetail from './FullDetail';
  
  import TopTabFirst from './TopTabFirst';
  import TopTabSecond from './TopTabSecond';
  import TopTabThird from './TopTabThird';
  
  import SecondTab from './SecondTab';
  import ThirdTab from './ThirdTab';
  
  import Detail from './Detail';
  
  // TopTabNavigator 는 어디로 이동 하던지 항상 Top 메뉴를 갖고 있다.
  // 이건 꼭 대기에 있는 Tab ( First, Second, Third )
  // 여기에는 3 개의 Tab이 있는데 Second, Third Tab에는 별거 없다. 
  // 다만 TopTabFirst 에서는 다른 페이지로 이동 할 수 있는 버튼이 포함 되어 있다.
  const TopTab = createMaterialTopTabNavigator({
    TopTabFirst,
    TopTabSecond,
    TopTabThird,
  });
  
  // 이것은 첫번째 Tab 버튼인데 인데 Top 버튼이나 Bottom 버튼 이나 똑같은 곳을 
  // 찾기 때문에 이렇게 처리 되었다. 
  const FirstTabStack = createStackNavigator({
    TopTab,
    Detail,
  });
  
  // 이건 하단에 Tab을 나타 내는 것
  // 이름은 하단 버튼인데 
  const BottomTab = createBottomTabNavigator({
    FirstTabStack,
    SecondTab,
    ThirdTab,
  });
  
// 뷰 위에 다른 뷰를 쌓아 놓는 내비게이터 
// 예를 들어 Tab Navigator 위에서 다른 View 를 표시 할때 사용
  const MainNavi = createStackNavigator({
    MainTab: {
      screen: BottomTab,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    FullDetail,
  });
  
  // react-navigation 버전 3 에서는 꼭 createAppContainer 에 등록 해야 한다.
  // createSwitchNavigator 이것도 역시 이름 그대로 2가지의 경우 Switch 한다.
  export default createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading,
        Auth,
        MainNavi,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    )
  );
  