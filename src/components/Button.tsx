import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CustomBtnProps = {
  onPress: () => void;
};

const CustomBtn = ({onPress}: CustomBtnProps) =>{
    return(
        <TouchableOpacity style={styles.backgroundStyle} onPress={onPress}>
            <Text 
            style={styles.txt}>Log in</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor:'#0098FF',
    width:345,
    borderRadius:10,
    height: 50,
    alignItems: 'center',
    paddingVertical: 14,
    marginVertical:20,
  },
  txt: {
    color:'white', 
    textAlign:'center',
    fontWeight:600,
  fontSize: 16}
  }
);

export default CustomBtn;