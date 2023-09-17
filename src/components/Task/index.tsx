import Checkbox from "expo-checkbox";
import { Image, Text, TouchableOpacity, View} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { global } from "../../global";

type Props = {
  newTask: string;
  onRemove: () => void;
}

export function Task({newTask, onRemove}: Props){

  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.containerTask}>
      < Checkbox 
      value={isChecked}
      onValueChange={setChecked}
      color={isChecked ? global.purpleDark : global.blue}
      />
      <Text style={[styles.newTask, isChecked && styles.tachado]}>
        {newTask}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Image 
          source={require('../../../assets/trash.png')}
        />
      </TouchableOpacity>
    </View>
  )
}