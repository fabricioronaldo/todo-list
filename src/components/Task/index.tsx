import Checkbox from "expo-checkbox";
import { Image, Text, TouchableOpacity, View} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function Task({newTask}){

  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.containerTask}>
      < Checkbox 
      value={isChecked}
      onValueChange={setChecked}
      />
      <Text style={styles.newTask}>
        {newTask}
      </Text>
      <TouchableOpacity>
        <Image 
          source={require('../../../assets/trash.png')}
        />
      </TouchableOpacity>
    </View>
  )
}