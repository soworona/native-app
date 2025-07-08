import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';

const RootStack = createNativeStackNavigator();

function App() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer theme= {colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;



