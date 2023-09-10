import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Task(){
  return (
    <View style={styles.containerTask}>
      <Text style={styles.newTask}>
        tarefa para ser realizada.
        tarefa a ser realizada.
      </Text>
      <TouchableOpacity>
        <Image 
          source={require('../../../assets/trash.png')}
        />
      </TouchableOpacity>
    </View>
  )
}