import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	View,
	Text,
	Dimensions,
	TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create(
	{
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
		},
		botaoLike: {
			height: 40,
			width: 40
		},
		rodape: {
			margin: 10
		}
	}
);

export default class Post extends Component {

	constructor(props) {
		super(props)
		this.state = {
			foto: this.props.foto
		}
	}

	carregaIcone(likeada) {
		return likeada ? require('../../resources/img/s2-check.png')
					   : require('../../resources/img/s2.png')
	}

	like(){
		const fotoAtualizada = {
			...this.state.foto, 
			likeada: !this.state.foto.likeada
		}
		this.setState({
			foto: fotoAtualizada
		})
	}

	render() {
		const { foto } = this.state;

        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{uri: foto.urlPerfil}} 
                           style={styles.fotoPerfil}/>
                    <Text>{foto.loginUsuario}</Text> 
                </View>
                <Image source={{uri: foto.urlFoto}} 
                       style={styles.foto}/>
				
				<View style={styles.rodape}>
					<TouchableOpacity onPress={this.like.bind(this)}>
						<Image style={styles.botaoLike} 
							source={this.carregaIcone(foto.likeada)}/>
					</TouchableOpacity>
				</View>
            </View>
        );
    }
};
