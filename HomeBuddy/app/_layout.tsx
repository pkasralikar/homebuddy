import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  function LogoTitle() {
    return (
      <Image style={styles.reactLogo} source={require('@/assets/images/logo.png')} />
    );
  }

  const RightHeaderComponent = () => {
    return(
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>Alert.alert('hello')}>
          <Image style={styles.righticon} source={require('@/assets/images/voice.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Alert.alert('hello')}>
          <Image style={styles.righticon} source={require('@/assets/images/bell.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Alert.alert('hello')}>
          <Image style={styles.righticon} source={require('@/assets/images/chat.png')} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
      screenOptions={{
        headerShown: true,
      }}
      >
        <Stack.Screen name="(tabs)" options={{
          headerLeft: (props) => <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}
        />,
        headerTitle:"",
          headerRight: (props) => <RightHeaderComponent />
        }}/>
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 50,
    width: 150,
    padding: 10,
    marginTop:10,
    resizeMode:'contain'
    // bottom: 0,
    // left: 0,
    // position: 'absolute',
  },
  righticon:{
    height: 30,
    width: 30,
    paddingHorizontal: 30,
    marginTop:10,
    resizeMode:'contain'
  }
});
