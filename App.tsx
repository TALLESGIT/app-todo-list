import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { StatusBar } from 'react-native';
import { Home } from './src/Screens';
import { Loading } from './src/components/Loading';



export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      {fontsLoaded ? <Home /> : <Loading />}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </>
  );
}


