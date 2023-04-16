import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import { Greet } from './Components/Greet';
//import Welcome from './Components/Welcome';
import Hello from './Hello';

export default function App() {
  return (
    <View style={styles.container}>
      {/* {<Greet />} */}
      {/* {<Welcome />} */}
      <Hello />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
