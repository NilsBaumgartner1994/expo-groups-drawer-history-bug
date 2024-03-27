import {useLocalSearchParams, useNavigation, useRouter} from 'expo-router';
import React, {useEffect} from 'react';
import {View, Text, Pressable} from "react-native";

export default function BuildingsDetails() {
	const { food } = useLocalSearchParams<{ food: string }>();
	const navigation = useNavigation()
	const router = useRouter();

	const [history, setHistory] = React.useState("")

	useEffect(() => {
		console.log("navigation.getState()")
		console.log(navigation.getState());
	}, []);

	return (
		<View>
			<Text>{"Foods: "+food}</Text>
			<Pressable onPress={() => {
				router.push("/(app)/foods/");
			}}>
				<Text>{"Navigate foods"}</Text>
			</Pressable>
			<Pressable onPress={() => {
				console.log("navigation.getState()")
				console.log(navigation.getState());
				let historyObj = navigation.getState().history;
				let historyStr = "";
				for (let i = 0; i < historyObj.length; i++) {
					historyStr += historyObj[i].key + " ";
				}
				setHistory(historyStr)
			}}
			>
				<Text>{"Show history"}</Text>
			</Pressable>
			<View>
				<Text>{history}</Text>
			</View>
		</View>
	);
}