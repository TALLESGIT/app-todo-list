import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import type { TaskDTO } from '../../dtios/TaskDTO';
import { theme } from '../../theme';
import { styles } from "./styles";

type TaskProps = TaskDTO & {
  onTaskDone: (id: string) => void
  onTaskRemove: (id: string) => void
}


export function Task({id,title, isCompleted, onTaskDone, onTaskRemove}: TaskProps) {
  const [isPressed, setIsPressed] = useState(true)

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => onTaskDone(id)}>
        <MaterialCommunityIcons 
        name={
          isCompleted 
          ? "checkbox-marked-circle" :  "checkbox-blank-circle-outline" 
        }
        size={22} 
        color={
          isCompleted 
          ? theme.brand.purple
          : theme.brand.blue
        } 
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={
          isCompleted 
          ? styles.textDone 
          : styles.TextCreated}>
          {title}
        </Text>
      </View>

        <TouchableOpacity onPress={() => {
           onTaskRemove(id);
           setIsPressed(false);
          }}>
          <MaterialCommunityIcons 
            name="trash-can-outline" 
            size={20} 
            color={isPressed ? theme.colors['gray-300'] : 
              theme.colors.danger }
          />
        </TouchableOpacity>
      </View>
  )
}