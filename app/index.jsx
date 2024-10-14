import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Welcome = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>index</Text>
      <Link href="/profile">Go to Profile</Link>
    </View>
  )
}

export default Welcome