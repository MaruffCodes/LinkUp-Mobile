import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#0a66c2', // LinkedIn Blue
      headerShown: true, // Shows the top title bar
    }}>
      <Tabs.Screen
        name="index"
        options={{ title: 'Home', tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }}
      />

      <Tabs.Screen
        name="network"
        options={{ title: 'Networks', tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} /> }}
      />


      <Tabs.Screen
        name="post"
        options={{ title: 'Post', tabBarIcon: ({ color }) => <Ionicons name="add-circle-outline" size={24} color={color} /> }}
      />
      <Tabs.Screen
        name="notifications"
        options={{ title: 'Notifications', tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} /> }}
      />

      <Tabs.Screen
        name="jobs"
        options={{ title: 'Jobs', tabBarIcon: ({ color }) => <Ionicons name="briefcase" size={24} color={color} /> }}
      />


    </Tabs>
  );
}