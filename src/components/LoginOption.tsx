import { useTheme } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"

const LoginOptionBtn = () => {
      const colors = useTheme().colors;
    
    return(
        <TouchableOpacity
        style={styles.btn}>
            <Image 
            source ={require('.././assets/icons8-facebook-192.png')} 
            style = {styles.icon}/> 
            <Text 
            style={[ styles.txt, {color: colors.text} ]}>Facebook</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btn: {
        borderWidth:1,
        borderColor:'#E9E9E9',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap: 8,
        paddingHorizontal:20,
        paddingVertical: 10,
        borderRadius:10
    },
    txt: {
        fontSize: 16,
        fontWeight: 400
    },
    icon: {
        width:35,
        height: 35
    }
})
export default LoginOptionBtn;