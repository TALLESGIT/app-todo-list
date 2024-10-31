import React, { useRef, useState } from "react";
import { Alert, FlatList, Text, type TextInput, View } from "react-native";
import { Empty } from "../components/Empty";
import { Header } from "../components/Header";
import { Task } from "../components/Task";
import type { TaskDTO } from "../dtios/TaskDTO";
import { uuid } from "../utils/uuid";
import { styles } from "./styles";


export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([])
  const [newTask, setNewTask] = useState('')
  const newTaskInputRef = useRef<TextInput>(null);
 

  function handleAddTask() {
    if (newTask !== '' && newTask.length > 4) {
      setTasks((tasks) => [
        ...tasks,
        {id: uuid(), isCompleted: false, title: newTask.trim()}
      ])
  
      setNewTask('') 
  
      newTaskInputRef.current?.blur()
    }
  }

  function handleTaskDone(id: string) {
    setTasks((tasks) => tasks.map((task) => {
      return task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    }))
      
  }

  function handleTaskRemove(id: string) {
    Alert.alert('Remover essa tarefa', 'Tem certeza que deseja remover essa tarefa?', [
      {
        text: 'Sim',
        style: 'default',
        onPress: () => 
          setTasks((tasks) => tasks.filter((task) => task.id !== id)),
      },
      {
        text: 'Não',
        style: 'cancel'
      }
      
    ])
  }

  const totalTasksCreated = tasks.length
  const totalTasksCompleted = tasks.filter(({isCompleted}) => isCompleted).length


  return (
    <View style={styles.container}>
      <Header 
        inputRef={newTaskInputRef}
        task={newTask} 
        onChangeText={setNewTask} 
        onPress={handleAddTask}
      />
      <View style={styles.tasksContainer}>
        <View style={styles.info}>

          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas
            </Text>
              <View style={styles.CounterContainer}>
                <Text style={styles.CouterText}>{totalTasksCreated}</Text>
              </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluídas
            </Text>
              <View style={styles.CounterContainer}>
                <Text style={styles.CouterText}>{totalTasksCompleted}</Text>
              </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({item}) => (
           <Task 
             key={item.id} 
             onTaskDone={() => handleTaskDone(item.id)} 
             onTaskRemove={() => handleTaskRemove(item.id)}
             {...item}
            />
         )}
         ListEmptyComponent={<Empty/>}
        />
      </View>
    </View>
  )
} 

