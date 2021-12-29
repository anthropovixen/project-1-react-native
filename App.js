import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
	TouchableHighlight,
	TouchableWithoutFeedback,
	Pressable,
	Alert,
} from 'react-native';

const App = () => {
	const [name, SetName] = useState('');
	const [submitted, SetSubmitted] = useState(false);
	const onPressHandler = () => {
		if (name.length > 3) {
			SetSubmitted(!submitted);
		} else {
			Alert.alert(
				'Warning',
				'The name must be longer than 3 characters',
				[
					{
						text: 'Do not show again',
						onPress: () => console.warn('Do not show Pressed!'),
					},
					{
						text: 'Cancel',
						onPress: () => console.warn('Cancel Pressed!'),
					},
					{
						text: 'OK',
						onPress: () => console.warn('OK Pressed!'),
					},
				],
				{ cancelable: true, onDismiss: () => console.warn('Alert dismissed!') }
			);
		}
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
				// maxLength={20}
			/>
			{/* <Button
				title={submitted ? 'Clear' : 'Submit'}
				onPress={onPressHandler}
				color="green"
				// disabled={submitted}
			/> */}
			{/* <TouchableWithoutFeedback onPress={onPressHandler}>
				<View style={styles.button}>
					<Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
				</View>
			</TouchableWithoutFeedback> */}
			<Pressable
				onPress={onPressHandler}
				// onLongPress={onPressHandler}
				// delayLongPress={2000}
				// disabled={submitted}
				hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
				android_ripple={{ color: 'yellow' }}
				style={({ pressed }) => [
					{ backgroundColor: pressed ? 'pink' : 'green' },
					styles.button,
				]}
			>
				<Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
			</Pressable>

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
		alignItems: 'center',
	},
});

export default App;
