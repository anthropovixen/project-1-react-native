import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

const App = () => {
	return (
		<View style={styles.body}>
			<Text style={styles.text}>Programming with Tanimara</Text>
			<Button
				title="React Native practicing"
				onPress={() => {
					Linking.openURL('https://github.com/anthropovixen');
				}}
			></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: 'darkred',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#ffffff',
		fontSize: 20,
		fontStyle: 'italic',
		margin: 10,
	},
});

export default App;
