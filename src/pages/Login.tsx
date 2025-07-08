import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomInput from '../components/Index';
import { useState } from 'react';
import CustomBtn from '../components/Button';
import { useNavigation, useTheme } from '@react-navigation/native';
import LoginOptionBtn from '../components/LoginOption';
import Divider from '../components/Divider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const colors = useTheme().colors;

  return (
    <View style={styles.container}>
      <Text style={[styles.baseTxt, {color: colors.text}]}>
        Hey, Hello 👋
      </Text>
      <Text style={[styles.smallTxt, { color: colors.text }]}>
        Enter your credentials to access your account
      </Text>
      <View style={styles.btnGrp}>
        <LoginOptionBtn label="Google"/>
        <LoginOptionBtn label="Facebook"/>
      </View>
      
      <View style={styles.btnGrp}>
        <Divider/>
        <Text style={{color: colors.border, fontWeight:600}}>or</Text>
        <Divider/>
      </View>

      <View style={styles.formContainer}>
        <CustomInput label="Email" value={email} onChangeText={setEmail} />
        <CustomInput
          style={styles.container}
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
    borderRadius: 15,
    width:'100%'
  },
  baseTxt: {
    fontSize: 30,
    fontWeight: 800,
    marginBottom: 15
  },
  smallTxt: {
    fontSize: 17,
    fontWeight: 200,
    marginBottom:30
  },
  link: {
    color: '#4D81E7',
  },
  btnGrp: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    width:'100%',
    marginBottom:15
  }
});

export default Login;
