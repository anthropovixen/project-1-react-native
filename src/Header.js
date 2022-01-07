import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = (props) => {
	return (
		<View style={styles.view}>
			<Text style={styles.text}>React Native Exercise</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		width: '100%',
		height: 50,
		backgroundColor: '#807689',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#ffffff',
	},
});

export default Header;
