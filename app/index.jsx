import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

import Logo from '../assets/Logo/logo_light.png'

// themed components
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'


const Home = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedLogo style={styles.img} />

        <ThemedText style={styles.title} title={true} >Yooooooooooo</ThemedText>

        <Spacer height={10} />
        <ThemedText>how's it??</ThemedText>
        <Spacer/>

        <Link href="/login" style={styles.link}>
          <ThemedText>Login page</ThemedText>
        </Link>

        <Link href="/register" style={styles.link}>
          <ThemedText>Register page</ThemedText>
        </Link>

        <Link href="/about" style={styles.link}>
          <ThemedText>About page</ThemedText>
        </Link>

        <Link href="/contact" style={styles.link}>
          <ThemedText>Contact page</ThemedText>
        </Link>

        <Link href="/profile" style={styles.link}>
          <ThemedText>Profile page</ThemedText>
        </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
       flex:1,
       alignItems: 'center',
       justifyContent: 'center'
    },
    title: {
       fontSize: 18,
       fontWeight: 'bold'
    },
    img: {
        width: 1000,
        height: 200,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    link: {
        marginVertical: 20,
        borderBottomWidth: 1,
    }
})