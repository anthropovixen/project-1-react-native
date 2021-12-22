import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

const App = () => {
	const [name, setName] = useState('Styling Test');

	const onClickHandler = () => {
		setName('Style Test Done!');
	};

	return (
		<View style={styles.body}>
			<Text style={styles.text}>{name}</Text>
			<View style={styles.button}>
				<Button title="Update State" onPress={onClickHandler}></Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: 'darkred',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 10,
		borderColor: '#ff00ff',
		borderRadius: 10,
	},
	text: {
		color: '#ffffff',
		fontSize: 40,
		fontStyle: 'italic',
		margin: 10,
		textTransform: 'uppercase',
	},
	button: {
		width: 200,
		height: 60,
	},
});

export default App;
