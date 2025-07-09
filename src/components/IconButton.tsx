import { Image, StyleSheet, View } from "react-native"

type IconBtnProps = {
    label:string
}

const IconMap: Record<string, any> = {
    chevronLeft: require ('.././assets/icons/arrow_back.png'),
    profile: require ('.././assets/icons/account_circle.png'),
}

const IconBtn = (props: IconBtnProps) => {
    return (
        <View>
            <Image 
            source={IconMap[props.label]} 
            style= {styles.icon}/>
        </View>
    )
};

const styles= StyleSheet.create({
    icon: {
    height: 35,
    width: 35,
    }
})

export default IconBtn;