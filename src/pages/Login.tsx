import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomInput from '../components/Index';
import { useState } from 'react';
import CustomBtn from '../components/Button';
import { useNavigation, useTheme } from '@react-navigation/native';
import LoginOptionBtn from '../components/LoginOption';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const colors = useTheme().colors;

  return (
    <View style={styles.container}>
      <Text style={[styles.baseTxt, { color: colors.text }]}>
        Hey, Hello 👋
      </Text>
      <Text style={[styles.smallTxt, { color: colors.text }]}>
        Enter your credentials to access your account
      </Text>
      <View>
        <LoginOptionBtn/>

      </View>
      <View style={styles.formContainer}>
        <CustomInput label="Email" value={email} onChangeText={setEmail} />
        <CustomInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureText
        />
      </View>
      <CustomBtn
        onPress={() => {
          navigation.navigate('Home');
          console.log('df');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'green',
  },
  formContainer: {
    height: 200,
    backgroundColor: '#EDF1F3',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 20,
  },
  baseTxt: {
    fontSize: 30,
    fontWeight: 800,
  },
  smallTxt: {
    fontSize: 18,
    fontWeight: 200,
  },
  link: {
    color: '#4D81E7',
  },
});

export default Login;
