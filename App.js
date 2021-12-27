import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

const App = () => {
	const [name, setName] = useState('Styling Test');

	const onClickHandler = () => {
		setName('Style Test Done!');
	};

	return (
		<View style={styles.body}>
			<View style={styles.view1}>
				<Text style={styles.text}>1</Text>
			</View>
			<View style={styles.view2}>
				<Text style={styles.text}>2</Text>
			</View>
			<View style={styles.view3}>
				<Text style={styles.text}>3</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'darkred',
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	view1: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	view2: {
		flex: 1,
		backgroundColor: 'green',
		alignItems: 'center',
		justifyContent: 'center',
	},
	view3: {
		flex: 1,
		backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'black',
		fontSize: 40,
		fontStyle: 'italic',
		margin: 10,
	},
});

export default App;
