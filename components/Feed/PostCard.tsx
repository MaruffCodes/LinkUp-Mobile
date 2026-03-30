import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PostCard({ post }) {
    return (
        <View style={styles.card}>
            {/* --- HEADER SECTION --- */}
            <View style={styles.header}>
                <Image source={{ uri: post.profile_picture }} style={styles.avatar} />

                <View style={styles.authorInfo}>
                    <View style={styles.nameRow}>
                        <Text style={styles.name} numberOfLines={1}>{post.name}</Text>
                        <Text style={styles.connection}> • {post.connection}</Text>
                    </View>
                    <Text style={styles.title} numberOfLines={2}>{post.title}</Text>
                    <Text style={styles.timeAgo}>{post.timeAgo}h • 🌐</Text>
                </View>

                {/* Follow Button: Only show if 2nd or 3rd connection */}
                {(post.connection === '2nd' || post.connection === '3rd') && (
                    <TouchableOpacity style={styles.followBtn}>
                        <Ionicons name="add" size={18} color="#0a66c2" />
                        <Text style={styles.followText}>Follow</Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* --- CONTENT SECTION --- */}
            {post.content ? (
                <Text style={styles.body} numberOfLines={4}>
                    {post.content}
                </Text>
            ) : null}

            {/* --- IMAGE SECTION --- */}
            {post.hasImage && post.postImage && (
                <Image
                    source={{ uri: post.postImage }}
                    style={styles.mainImage}
                    resizeMode="cover"
                />
            )}

            {/* --- STATS SECTION --- */}
            <View style={styles.statsRow}>
                <View style={styles.likesIcons}>
                    <Ionicons name="thumbs-up" size={12} color="#0a66c2" />
                    <Text style={styles.statsText}> {post.likes}</Text>
                </View>
                <Text style={styles.statsText}>
                    {post.comments > 0 ? `${post.comments} comments • ` : ''}
                    {post.shares > 0 ? `${post.shares} shares` : ''}
                </Text>
            </View>

            <View style={styles.divider} />

            {/* --- ACTION SECTION --- */}
            <View style={styles.actionRow}>
                <TouchableOpacity style={styles.actionBtn}>
                    <Ionicons name="thumbs-up-outline" size={20} color="#666" />
                    <Text style={styles.actionText}>Like</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionBtn}>
                    <Ionicons name="chatbubble-outline" size={20} color="#666" />
                    <Text style={styles.actionText}>Comment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionBtn}>
                    <Ionicons name="repeat" size={20} color="#666" />
                    <Text style={styles.actionText}>Repost</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionBtn}>
                    <Ionicons name="paper-plane-outline" size={20} color="#666" />
                    <Text style={styles.actionText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        marginVertical: 4,
        paddingTop: 12,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    authorInfo: {
        flex: 1,
        marginLeft: 10,
        paddingRight: 10,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    connection: {
        fontSize: 14,
        color: '#666',
    },
    title: {
        fontSize: 12,
        color: '#666',
        marginTop: 1,
    },
    timeAgo: {
        fontSize: 11,
        color: '#666',
        marginTop: 2,
    },
    followBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
    },
    followText: {
        color: '#0a66c2',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 2,
    },
    body: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
        paddingHorizontal: 12,
        marginBottom: 10,
    },
    mainImage: {
        width: '100%',
        height: 300,
        backgroundColor: '#f3f2ef',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    likesIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statsText: {
        fontSize: 12,
        color: '#666',
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 12,
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
    },
    actionBtn: {
        flexDirection: 'column', // LinkedIn mobile usually stacks icon over text
        alignItems: 'center',
        flex: 1,
    },
    actionText: {
        fontSize: 10,
        color: '#666',
        marginTop: 2,
        fontWeight: '500',
    },
});