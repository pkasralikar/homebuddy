import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarActiveTintColor: 'white',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          
          default: {},
        }),
        tabBarInactiveBackgroundColor:'darkorchid',
        tabBarActiveBackgroundColor:'darkorchid'
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
      
        }}
      />
      <Tabs.Screen
        name="compass"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Feather size={28} name="compass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="profile" color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Feather size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
