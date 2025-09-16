import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function AuthLayout() {

  return (
    <>
      {/*<StatusBar value="auto" />  for top bar if in case there is an issue  */}
      
      <Stack screenOptions={{headerShown: false, animation: 'none'}}/>

    </>
  )
}
