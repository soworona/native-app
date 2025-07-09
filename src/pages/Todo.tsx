import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import CustomBtn from '../components/Button';
import IconBtn from '../components/IconButton';
import TodoOptions from '../components/TodoOptions';

const Todo = () => {
  const colors = useTheme().colors;
  const [todoTask, setTodoTask] = useState('');

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: colors.card }]}>
      <View
        style={[
          styles.navbar,
          { height: 60, borderColor: colors.border, borderBottomWidth: 1 },
        ]}
      >
        <TodoOptions icon="back" />
        <TodoOptions icon="profile" />
      </View>
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
        <TodoOptions label="Show completed" icon="completed" />
        <TodoOptions label="Show active" icon="active" />
      </View>
    </SafeAreaView>
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
    paddingHorizontal: 10,
  },
  container: {
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default Todo;
