import { useTheme } from "@react-navigation/native"
import { View } from "react-native"

const Divider = () => {
    const colors = useTheme().colors;
    return(
        <View 
        style={{
            backgroundColor: colors.border,
            width:150,
            height: 1}}>
            
        </View>
    )
}

export default Divider