import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat'

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <Text>CARREGANDO FONTES...</Text>
  }else{
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

  <LinearGradient colors={['rgba(73,96,249,2)', 'rgba(25,55,254,1)']} style={styles.headerGradient}>
      <View style={styles.row}>
        <Feather name='menu' size={24} color='white'/>
        <Image style={styles.imgProfile} source={{uri: 'https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg'}} />
      </View>

      <Text style={styles.txtWelcome}>Bem Vindo(a),{'\n'} Usuário! </Text>

  </LinearGradient>

  <View style={{width: '100%', alignItems: 'center'}}>
    <View style={styles.ResumoSaldo}>
      <Text style={{color: '#3A3A3A', fontSize: 16, fontFamily: 'Montserrat_400Regular'}}> Seu saldo total</Text>
      <Text style={{color: '#2D99FF', fontSize: 30, fontFamily: 'Montserrat_700Bold'}}> 500,00</Text>
    </View>

    <View style={styles.VerifAccount}>
      <LinearGradient 
      colors={['rgba(73, 96, 249, 1)', 'rgba(20, 51, 55, 1)']}
      style={styles.AccountGradient}>
        <Text style={{color: 'white', fontSize: 19, fontFamily: 'Montserrat_400Regular',}}>Verifique suas contas bancárias</Text>
      </LinearGradient>
    </View>
  </View>

  </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', 
    alignItems: 'center',
  },
  headerGradient: {
    width: '100%',
    height: '30%',
    padding: 20,
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85,
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  txtWelcome: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'MontSerrat_400Regular',
    marginLeft: 50
  },
  ResumoSaldo: {
    backgroundColor: '#fff',
    width: '80%',
    height: '50%',
    top: -50,
    borderRadius: 30,
    padding: 20,

    shadowColor: 'black', 
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5
  },
  VerifAccount: {
    width: '80%',
    height: '20%'
  },
  AccountGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    paddingLeft: 20,
    justifyContent: 'center',

    shadowColor: 'black', 
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5

  }
});
