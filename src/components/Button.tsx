import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CustomBtnProps = {
  onPress: () => void;
};

const CustomBtn = ({onPress}: CustomBtnProps) =>{
    return(
        <TouchableOpacity style={styles.backgroundStyle} onPress={onPress}>
            <Text 
            style={{
              color:'white', 
              textAlign:'center',
              fontWeight:600}}>LOGIN</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor:'#1D61E7',
    width:345,
    borderRadius:10,
    height: 50,
    alignItems: 'center',
    paddingVertical: 14,
    marginTop:20,
    marginLeft:20
  },
});

export default CustomBtn;