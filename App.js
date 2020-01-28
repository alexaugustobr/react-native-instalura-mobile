import React from 'react';
import {
	SafeAreaView,
	FlatList,
	StyleSheet,
	Image,
	ScrollView,
	View,
	Text,
	StatusBar,
	Dimensions,
} from 'react-native';

import Post from './src/components/Post';

const screenWidth = Dimensions.get('screen').width;

const fotos = [
	{
		id: '1',
		usuario: 'Daniel'
	},
	{
		id: '2',
		usuario: 'Bob'
	},
	{
		id: '3',
		usuario: 'Im okay'
	}
]

const styles = StyleSheet.create(
	{
		container: {
			marginTop: 20
		},
		cabecalho: {
			margin:10, 
			flexDirection: 'row', 
			alignItems: 'center'
		}, 
		fotoPerfil: {
			marginRight:10, 
			borderRadius: 20,
			width: 40, 
			height: 40
		},
		foto: {
			width: screenWidth,
			height: screenWidth
		}
	}
);

const App: () => React$Node = () => {
	return (
		<SafeAreaView>
			<FlatList style={styles.container}
								data={fotos} 
								keyExtractor={item => item.id}
								renderItem={ ({item}) =>
					<Post foto={item}/>
				}
			/>
		</SafeAreaView> 
	);
};

export default App;
