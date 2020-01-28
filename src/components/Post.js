import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	View,
	Text,
	Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

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

export default class Post extends Component {
	render() {
        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={require('../../resources/img/alura.jpg')} 
                           style={styles.fotoPerfil}/>
                    <Text>{this.props.foto.usuario}</Text> 
                </View>
                <Image source={require('../../resources/img/alura.jpg')} 
                       style={styles.foto}/>
            </View>
        );
    }
};
