import { Image, Text, TouchableOpacity, View} from "react-native";
import { styles } from "./styles";
import CheckBox from 'react-native-check-box';
import { useState } from "react";

export function Task(){

  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.containerTask}>
      <CheckBox
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        
      />
      <Text style={styles.newTask}>
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