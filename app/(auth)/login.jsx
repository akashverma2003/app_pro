import { StyleSheet, Text} from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'

// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'


const Login = () => {

    const handleSubmit = () => {
        console.log("Login form submitted")
    }

  return (
    <ThemedView style={styles.container}>

        <Spacer/>
        <ThemedText style={styles.title} title={true} >
            Login to your account
        </ThemedText>


        <ThemedButton onPress={handleSubmit}>
            <Text style={{ color: 'white', textAlign: 'center' }}>
                Login with Google
            </Text>
        </ThemedButton>


        <Spacer height={100} />
        <Link href="/register" >
            <ThemedText style={{ textAlign: 'center' }}>
                Register instead
            </ThemedText>
        </Link>
        
        
        <Spacer height={10} />
        <Link href="/" >
            <ThemedText style={{ textAlign: 'center' }}>
                Go back Home
            </ThemedText>
        </Link>

    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
       flex:1,
       justifyContent: 'center',
       alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8
    }
})