import { StyleSheet, Text, View } from "react-native"

const Home= () => {
    return(
        <View style={styles.container}>
            <Text style={styles.baseText}>
                Hello user!
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#333533',
  },
  baseText: {
    color: 'white'
  }
});

export default Home;