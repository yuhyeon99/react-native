import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello! I  made a RN App!</Text>
      <StatusBar style="light" />
    </View>
  );
}

// StyleSheet.create를 사용해서 객체를 생성하면 스타일에 관한 자동완성기능이 작동한다
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize:28,
    color:'red'
  }
});
