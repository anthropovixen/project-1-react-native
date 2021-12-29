import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
	TouchableHighlight,
} from 'react-native';

const App = () => {
	const [name, SetName] = useState('');
	const [submitted, SetSubmitted] = useState(false);
	const onPressHandler = () => {
		SetSubmitted(!submitted);
	};

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
			{/* <Button
				title={submitted ? 'Clear' : 'Submit'}
				onPress={onPressHandler}
				color="green"
				// disabled={submitted}
			/> */}
			<TouchableHighlight
				style={styles.button}
				onPress={onPressHandler}
				activeOpacity={0.5}
				underlayColor="pink"
			>
				<Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
			</TouchableHighlight>

			{submitted ? (
				<Text style={styles.text}>You are registered as {name}</Text>
			) : null}
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
		margin: 50,
	},
	button: {
		width: 150,
		height: 50,
		backgroundColor: 'green',
		alignItems: 'center',
	},
});

export default App;
