import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import { useTheme } from '@react-navigation/native';

type TodoOptionsProps = {
  icon: string;
  label?: string;
};

const IconMap: Record<string, any> = {
  all: 'checklist',
  active: 'pending-actions',
  completed: 'task',
  back: 'chevron-left',
  profile : 'face-3'
};

const TodoOptions = (props: TodoOptionsProps) => {
  const colors = useTheme().colors;
  return props.label ? (
    <View style={styles.constainer}>
      <Icon name={IconMap[props.icon]} size={27} color={colors.text} />
      <Text style={{ color: colors.text, fontSize: 14 }}> {props.label} </Text>
    </View>
  ) : (
    <View style={{height:'100%', width:50, alignItems:'center', justifyContent:'center'}}>
      <Icon name={IconMap[props.icon]} size={29} color={colors.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    padding: 10,
    alignItems: 'center',
    gap: 5,
  },
});

export default TodoOptions;
