import React, {useEffect} from "react";
import {View, Text, Pressable} from "react-native";
import {useNavigation, useRouter} from "expo-router";

export default function BuildingsScreen() {
	const router = useRouter();
	console.log("router")
	console.log(router);
	const navigation = useNavigation()
	console.log("navigation")
	console.log(navigation);

	const [history, setHistory] = React.useState("")

	useEffect(() => {
		console.log("navigation.getState()")
		console.log(navigation.getState());
	}, []);

	return (
		<View>
			<Text>{"Buildings"}</Text>
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