import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'


const About = () => {

  return (
    <ThemedView style={styles.container}>

      <ThemedText style={styles.title}>About page</ThemedText>
      <ThemedText>Hey!!</ThemedText>
      <ThemedText>Good to see ya!</ThemedText>
      <ThemedText>This app is made by</ThemedText>
      <ThemedText>Akash verma</ThemedText>
      <ThemedText>Have fun..........</ThemedText>

      <Link href="/" style={styles.link}>
        <ThemedText>Go back home</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default About

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
    link: {
        marginVertical: 20,
        borderBottomWidth: 1,
    }
})