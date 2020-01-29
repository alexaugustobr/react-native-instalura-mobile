import React, { Component } from 'react';
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

const styles = StyleSheet.create(
	{
		container: {
			marginTop: 20
		}
	}
);



export default class App extends Component {

	constructor() {
		super();
		this.state = {
			fotos: []
		}
	}

	componentDidMount() {
		fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
			.then(resposta => resposta.json())
			.then(json => this.setState({fotos: json}))
	}

	renderPost = ({item}) => (<Post foto={item}/>);

	render() {
		return (
			<SafeAreaView>
				<FlatList style={styles.container}
						  data={this.state.fotos} 
					  	  keyExtractor={item => 'item-'+item.id}
						  renderItem={this.renderPost}
				/>
			</SafeAreaView> 
		);
	}
}
