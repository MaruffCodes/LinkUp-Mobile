import React from 'react';
import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native';

// Using standard React Native components for better control over LinkedIn colors
import Posts from '../src/Data/Posts.js';
import PostCard from '@/components/Feed/PostCard';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Posts}
        // FIX: Added the 'return' keyword so the PostCard actually renders
        renderItem={({ item }) => {
          return <PostCard post={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listPadding}
        showsVerticalScrollIndicator={false}
        // LinkedIn style: Adds a bit of space at the very top of the list
        ListHeaderComponent={<View style={{ height: 8 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f2ef', // Official LinkedIn Gray background
  },
  listPadding: {
    paddingBottom: 20,
  },
});