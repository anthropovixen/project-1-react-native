import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

const App = () => {
	const [name, setName] = useState('Tanimara');
	const [session, setSession] = useState({ number: 1, title: 'state' });
	const [current, setCurrent] = useState(true);

	const onClickHandler = () => {
		setName('Programming with Tanimara');
		setSession({ number: 2, title: 'changing state' });
		setCurrent(false);
	};

	return (
		<View style={styles.body}>
			<Text style={styles.text}>{name}</Text>
			<Text style={styles.text}>
				This is session number {session.number} and about {session.title}
			</Text>
			<Text style={styles.text}>
				{current ? 'current session' : 'next session'}
			</Text>
			<Button title="Update State" onPress={onClickHandler}></Button>
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
