import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Task } from '../../components/Task';
import { useState } from 'react';

export function Home() {

  const [addTask, setAddTask] = useState<string[]>([]);
  const [taskDescription, setTaskDescription] = useState('');

  function handleTaskAdd(){
    setAddTask(prevState => [...prevState, taskDescription]);
    setTaskDescription('');
  };

  function handleTaskRemove(task){
    Alert.alert('Deseja relamente remover a tarefa da lista?', [
      {
        text: 'Sim',
        onPress: () => setAddTask(prevState => prevState.filter(addTask => addTask !== task))
      },
      {
        text: 'Não'
      }
    ])
  }


  return (
    <View style={styles.container}>
      <View style={styles.titleAplication}>
        <Image
          source={require('../../../assets/logo-todo.png')}
        />
      </View>

      <View style={styles.form}>

        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#d9d9d9'
          onChangeText={setTaskDescription}
          value={taskDescription}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
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
      <FlatList 
        data={addTask}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Task 
            newTask={item}
          />
        )}
        ListEmptyComponent={() => (
          // <Image 
          //   source={require('../../../assets/Clipboard.png')}
          // />
          <Text style={styles.listEmptyText}>
            Você ainda não tem tarefas cadastradas
            Crie tarefas e organize seus itens a fazer.
          </Text>
        )}
      />
      
    </View>
  )
}