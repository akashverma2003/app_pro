import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const Contact = () => {
  return (
    <ThemedView style={styles.container}>

      <ThemedText style={styles.title}>Contact page</ThemedText>
      <ThemedText>Can cantact me by emailing</ThemedText>
      <ThemedText>See ya!!</ThemedText>
      <ThemedText></ThemedText>
      <ThemedText></ThemedText>
      <ThemedText></ThemedText>

      <Link href="/" style={styles.link}>
        <ThemedText>Go back home</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Contact

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