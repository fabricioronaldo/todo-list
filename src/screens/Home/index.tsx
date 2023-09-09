import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {
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
        <Text style={styles.title}>
          Criadas
        </Text>

        <Text style={styles.title}>
          Concluidas
        </Text>
      </View>
    </View>
  )
}