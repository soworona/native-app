import { StyleSheet, Text, TextInput, View } from 'react-native';

type InputTextProps = {
  label: string;
  value: string;
  secureText?: boolean;
  onChangeText:(text:string) => void
};
const CustomInput = (props: InputTextProps) => {
  return (
    <View>
      <Text style={styles.baseText}>{props.label}</Text>
      <TextInput
        style={{
          width: 325,
          height: 50,
          borderRadius: 10,
          padding: 10,
          backgroundColor: 'white',
          color: 'black',
        }}
        secureTextEntry={props.secureText}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  baseText: {
    padding:5,
    color:'gray'

  },
});

export default CustomInput;
