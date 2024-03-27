import {useLocalSearchParams} from 'expo-router';
import React from 'react';
import {View, Text} from "react-native";

export default function BuildingsDetails() {
	const { building } = useLocalSearchParams<{ building: string }>();

	return (
		<View>
			<Text>{"Building id: "+building}</Text>
		</View>
	)
}