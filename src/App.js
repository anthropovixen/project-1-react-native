import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Pressable,
	Modal,
	Image,
	ImageBackground,
} from 'react-native';

import TaniButton from './CustomButton';
import Header from './Header';

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
		<ImageBackground
			style={styles.body}
			source={{
				uri:
					'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
			}}
		>
			<Header />
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
			<TaniButton
				onPressFunction={onPressHandler}
				title={submitted ? 'Clear' : 'Submit'}
				color={'#eb990c'}
			/>
			<TaniButton
				onPressFunction={() => {}}
				title={'Test'}
				color={'#4fa729'}
				style={{ margin: 10 }}
			/>
			{/* <Pressable
				onPress={onPressHandler}
				hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
				android_ripple={{ color: 'yellow' }}
				style={({ pressed }) => [
					{ backgroundColor: pressed ? 'pink' : 'green' },
					styles.button,
				]}
			>
				<Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
			</Pressable> */}
			{submitted ? (
				<View style={styles.body}>
					<Text style={styles.text}>You are registered as {name}</Text>
					<Image
						style={styles.image}
						source={require('../assets/done.png')}
						resizeMode="stretch"
					/>
				</View>
			) : (
				<Image
					style={styles.image}
					source={require('../assets/error.png')}
					resizeMode="stretch"
					blurRadius={5}
				/>
			)}
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
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
	image: {
		width: 100,
		height: 100,
		margin: 10,
	},
});

export default App;
