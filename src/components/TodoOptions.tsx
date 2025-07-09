import { Image, StyleSheet, Text, View } from "react-native"
import Icon from "@react-native-vector-icons/material-icons";
import { useTheme } from "@react-navigation/native";

type TodoOptionsProps = {
    icon: string
    label: string
}

const OptionMap: Record<string, any> = {
    all: require ('.././assets/icons/arrow_back.png'),
    active: require ('.././assets/icons/account_circle.png'),
}

const TodoOptions = (props: TodoOptionsProps) => {
    const colors = useTheme().colors;
    return(
        <View style={}>
             <Icon name="menu" size={27} color={colors.text} />
             <Text style={{color: colors.text}}> {props.label} </Text>
        </View>
    )
};

const styles= StyleSheet.create({
    constainer: {
        
    }
})

export default TodoOptions;