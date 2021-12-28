import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	RefreshControl,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const App = () => {
	const [Items, setItems] = useState([
		{ name: 'Item 1' },
		{ name: 'Item 2' },
		{ name: 'Item 3' },
		{ name: 'Item 4' },
		{ name: 'Item 5' },
		{ name: 'Item 6' },
		{ name: 'Item 7' },
		{ name: 'Item 8' },
	]);
	const [Refreshing, setRefreshing] = useState(false);

	const onRefresh = () => {
		setRefreshing(true);
		setItems([...Items, { name: 'Item 69' }]);
		setRefreshing(false);
	};

	return (
		<FlatList
		
			keyExtractor={(item, index) => index.toString()}
			data={Items}
			renderItem={({item}) => (
				<View style={styles.item}>
		 			<Text style={styles.text}>{item.name}</Text>
				</View>
			)}
			refreshControl={
				<RefreshControl
					refreshing={Refreshing}
					onRefresh={onRefresh}
					colors={['#ff00ff']}
				/>
			}
		/>
		// <ScrollView
		// 	style={styles.body}
		// 	refreshControl={
		// 		<RefreshControl
		// 			refreshing={Refreshing}
		// 			onRefresh={onRefresh}
		// 			colors={['#ff00ff']}
		// 		/>
		// 	}
		// >
		// 	{Items.map((object) => {
		// 		return (
		// 			<View style={styles.item} key={object.key}>
		// 				<Text style={styles.text}>{object.item}</Text>
		// 			</View>
		// 		);
		// 	})}
		// </ScrollView>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#ffffff',
	},
	item: {
		margin: 10,
		backgroundColor: 'beige',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: 'black',
		fontSize: 48,
		fontStyle: 'italic',
		margin: 10,
	},
});

export default App;
