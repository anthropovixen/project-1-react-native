import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

const App = () => {
	const [name, setName] = useState('Styling Test');

	const onClickHandler = () => {
		setName('Style Test Done!');
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'darkred',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Text style={styles.text}>{name}</Text>
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
