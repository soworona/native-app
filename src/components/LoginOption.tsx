import { useTheme } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

type LoginOptionBtnProps ={
    label: string,
}
const logoMap: Record<string, any> = {
  Facebook: require('.././assets/icons/icons8-facebook-192.png'),
  Google: require('.././assets/icons/icons8-google-192.png'),
};

const LoginOptionBtn = (props:LoginOptionBtnProps) => {
      const colors = useTheme().colors;
    
    return(
        <View
        style={[styles.btn, {backgroundColor: colors.card, borderColor: colors.border}]}>
            <Image 
            source ={logoMap[props.label]}
            style = {styles.icon}/> 
            <Text 
            style={[ styles.txt, {color:colors.text}]}>{props.label}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    btn: {
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        gap: 8,
        paddingHorizontal:20,
        paddingVertical: 7,
        borderRadius:10, 
        width:160,
    },
    txt: {
        fontSize: 16,
        fontWeight: 500
    },
    icon: {
        width:35,
        height: 35
    }
})
export default LoginOptionBtn;