import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, ImageBackground, Button, Alert, Pressable,
  TouchableOpacity, ScrollView, FlatList
} from 'react-native';
import { homeStyles } from './styles/HomeStyles';


export default function App() {
  return (
    <View style={homeStyles.container}>
      <ImageBackground resizeMode='cover' source={{ uri: 'https://hoyimagenes.net/wp-content/uploads/2019/02/Piolin8-500x888.jpg' }}>
        <View>
          <Text >Hello, world!</Text>
        </View>
        <Text>Que pedo we!</Text>
        <View>
          <Text style={homeStyles.titulo}>Tu mama es puta</Text>
        </View>
        <View>
          <Text style={{ color: 'blue' }} >We all love word games, don't we? Everyone from young to old loves word games. We remember the days when we used to play in the family, when we were driving in the car and we played the word derivation game from the last letter. Whether you play Scrabble or Text Twist or Word with Friends, they all have similar rules. But sometimes it annoys us when there are words we can't figure out. Actually, what we need to do is get some help unscrambling words. Some people call it cheating, but in the end, a little help can't be said to hurt anyone. After all, getting help is one way to learn. What you need to do is enter the letters you are looking for in the above text box and press the search key. For example have you ever wonder what words you can make with these letters LORENIPS. Our word unscrambler or in other words anagram solver can find the answer with in the blink of an eye and say 330 words found by unscrambling these letters LORENIPS.
            Playing word games is a joy.
            Most unscrambled words found in list of 4 letter words. Lorenips is 8 letter word.</Text>
        </View>

        <Image source={{ uri: 'http://villafelmin.org/assets/imgs/foto/lago.jpg' }}
          style={homeStyles.logo}
        />
        {/*  <Image source={require()} /> */}



      </ImageBackground>

      <Button title='Este es ub botton' color='ornange'
        onPress={() => Alert.alert('Alerta', ' Estas Pelon')} />

      <TouchableOpacity onPress={() => Alert.alert('Alerta', ' Estas Pelon')} style={homeStyles.bton}>
        <Text style={homeStyles.textBotn}>Este es un toque</Text>
      </TouchableOpacity>


      <Text>

      </Text>
    </View>
  );
}

