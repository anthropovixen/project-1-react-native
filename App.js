import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const App = () => {
	const [name, SetName] = useState('');

	return (
		<View style={styles.body}>
			<Text style={styles.text}>Please write your name:</Text>
			<TextInput
				style={styles.input}
				placeholder="e.g. Maria"
				onChangeText={(value) => SetName(value)}
				// multiline
				// keyboardType='numeric'
				// editable={false}
				// secureTextEntry
				maxLength={20}
			/>
			<Text style={styles.text}>Your name is: {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
	},

	text: {
		color: '#000044',
		fontSize: 20,
		margin: 10,
	},
	input: {
		width: 200,
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 5,
		textAlign: 'center',
		fontSize: 20,
	},
});

export default App;
