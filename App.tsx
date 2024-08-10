
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './router'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GuessNumber">
          {
            routes.map((item, index) => {
              return <Stack.Screen key={index} name={item.name} component={item.component} />
            })
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})