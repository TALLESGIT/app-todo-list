import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import ClipBoard from '../../assets/Clipboard.png'

export function Empty() {
  return (
    <View style={styles.emptyContainer} >
      <Image source={ClipBoard} style={styles.image}/>
      <Text style={styles.textBold}>
        Você ainda não tem tarefas criadas</Text>
      <Text style={[styles.textBold, styles.textRegular]}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}