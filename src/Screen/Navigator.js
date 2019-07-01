import {
    createSwitchNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';
  
  import AuthLoading from './AuthLoading';
  import Auth from './Auth';
  
  import FullDetail from './FullDetail';
  
  import TopTabFirst from './TopTabFirst';
  import TopTabSecond from './TopTabSecond';
  import TopTabThird from './TopTabThird';
  
  import SecondTab from './SecondTab';
  import ThirdTab from './ThirdTab';
  
  import Detail from './Detail';
  
  // 이건 꼭 대기에 있는 Tab
  const TopTab = createMaterialTopTabNavigator({
    TopTabFirst,
    TopTabSecond,
    TopTabThird,
  });
  
  const FirstTabStack = createStackNavigator({
    TopTab,
    Detail,
  });
  
  // 이건 하단에 Tab을 나타 내는 것
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
  
  // createAppContainer 이름 그대로 내비게이터를 관장하는 컨테이너
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
  