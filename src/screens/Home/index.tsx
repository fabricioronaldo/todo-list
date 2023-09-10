import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Task } from '../../components/Task';
import { useState } from 'react';

export function Home() {

  const [addTasks, setAddTasks] = useState([])
  return (
    <View style={styles.container}>
      <View style={styles.titleAplication}>
        <Image
          source={require('../../../assets/logo-todo.png')}
        />
      </View>

      <View style={styles.form}>

        <TextInput style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#d9d9d9'
        />

        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../../../assets/plus.png')}
          />
        </TouchableOpacity>

      </View>
      <View style={styles.score}>
        <Text style={styles.scoreCreated}>
          Criadas <View style={styles.counterScore}><Text style={styles.title}>0</Text></View>
        </Text>

        <Text style={styles.scoreCompleted}>
          Concluidas <View style={styles.counterScore}><Text style={styles.title}>0</Text></View>
        </Text>
      </View>
      <Task />
      
    </View>
  )
}