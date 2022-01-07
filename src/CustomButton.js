import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const TaniButton = (props) => {
	return (
		<Pressable
			onPress={props.onPressFunction}
			hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
			android_ripple={{ color: 'yellow' }}
			style={({ pressed }) => [
				{ backgroundColor: pressed ? '#eb990c' : props.color },
                styles.button,
                {...props.style}
			]}
		>
			<Text style={styles.text}>{props.title}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	text: {
		color: '#000044',
		fontSize: 20,
		margin: 10,
		textAlign: 'center',
	},
	button: {
		width: 150,
		height: 50,
		alignItems: 'center',
	},
});

export default TaniButton;
