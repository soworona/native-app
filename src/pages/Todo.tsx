import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import CustomBtn from '../components/Button';
import IconBtn from '../components/IconButton';
import Icon from '@react-native-vector-icons/material-icons';
import TodoOptions from '../components/TodoOptions';

const Todo = () => {
  const colors = useTheme().colors;
  const [todoTask, setTodoTask] = useState('');

  return (
    <View style={[styles.screen, { backgroundColor: colors.card }]}>
      <SafeAreaView>
        <View
          style={[
            styles.navbar,
            { height:60, borderColor: colors.border, borderBottomWidth: 1 },
          ]}
        >
          <IconBtn label="chevronLeft" />
          <IconBtn label="profile" />
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <CustomBtn
          onPress={() => {
            console.log('df');
          }}
        />
      </View>
      <View
        style={[
          styles.navbar,
          {
            borderColor: colors.border,
            borderTopWidth: 1,
          },
        ]}
      >
        <TodoOptions label="Show all" icon="all" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  navbar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  container: {
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default Todo;
