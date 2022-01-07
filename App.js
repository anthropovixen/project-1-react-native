import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Pressable,
	Modal,
} from 'react-native';

const App = () => {
	const [name, SetName] = useState('');
	const [submitted, SetSubmitted] = useState(false);
	const [showWarning, SetshowWarning] = useState(false);
	const onPressHandler = () => {
		if (name.length > 3) {
			SetSubmitted(!submitted);
		} else {
			SetshowWarning(true);
		}
	};

	return (
		<View style={styles.body}>
			<Modal
				visible={showWarning}
				transparent
				onRequestClose={() => SetshowWarning(false)}
				animationType="slide"
				hardwareAccelerated
			>
				<View style={styles.centered_view}>
					<View style={styles.warn_modal}>
						<View style={styles.warn_title}>
							<Text style={styles.text}>WARNING!</Text>
						</View>
						<View style={styles.warn_body}>
							<Text style={styles.text}>
								The name must be longer than 3 characters
							</Text>
						</View>
						<Pressable
							onPress={() => SetshowWarning(false)}
							style={styles.warn_button}
							android_ripple={{ color: '#ffffff' }}
						>
							<Text style={styles.text}>OK</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			<Text style={styles.text}>Please write your name:</Text>
			<TextInput
				style={styles.input}
				placeholder="e.g. Maria"
				onChangeText={(value) => SetName(value)}
			/>
			<Pressable
				onPress={onPressHandler}
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
		textAlign: 'center',
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
	centered_view: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00000099',
	},
	warn_modal: {
		width: 300,
		height: 300,
		backgroundColor: '#ffffff',
		borderWidth: 1,
		borderColor: '#999999',
		borderRadius: 20,
	},
	warn_title: {
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5f22c',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
	},
	warn_body: {
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
	},
	warn_button: {
		backgroundColor: '#4fa729',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
});

export default App;
