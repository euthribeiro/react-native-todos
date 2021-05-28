import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { useTheme } from '../hooks/useTheme';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const { isDarkTheme } = useTheme();
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle === '') {
      return;
    }

    const data:Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    };

    setTasks(oldState => [...oldState, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(oldState => oldState.map(task => {
      if(task.id === id) {
        task.done = !task.done;
      }
      return task;
    }));
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(task => task.id !== id));
  }

  return (
    <View style={isDarkTheme ? { backgroundColor: '#1F1F1F', flex: 1 } : { flex: 1 }}>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}