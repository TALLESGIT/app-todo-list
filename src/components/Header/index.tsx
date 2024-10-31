import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import {MaterialCommunityIcons} from '@expo/vector-icons'
import type React from "react";
import Logo from '../../assets/Logo.png'
import { theme } from "../../theme";

type HeaderProps = {
  task: string,
  inputRef: React.RefObject<TextInput>
  onChangeText: (task: string) => void
  onPress: () => void
}

export function Header({task, inputRef, onChangeText, onPress}: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Image source={Logo} />

      <View style={styles.form} >  
        <TextInput 
          style={[styles.input, inputRef.current?.isFocused() && task ? styles.inputBorder : null]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.colors['gray-300']}
          value={task}
          onChangeText={onChangeText}
          ref={inputRef}
          autoCorrect={false}
          onSubmitEditing={onPress}
          returnKeyType="done"
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={onPress}
        >
          <MaterialCommunityIcons name="plus-circle-outline" size={24} color={theme.colors['gray-100']} />
        </TouchableOpacity>

      </View>
    </View>
  )
}