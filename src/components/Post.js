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
			marginBottom: 10,
			height: 40,
			width: 40
		},
		rodape: {
			margin: 10
		},
		likes: {
			fontWeight: 'bold'
		},
		comentario: {
			flexDirection: 'row',
		},
		tituloComentario: {
			fontWeight: 'bold',
			marginRight: 5,
		},
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
		return likeada ? require('../../resources/img/s2-checked.png') :
			require('../../resources/img/s2.png')
	  }

	like() {
		const { foto } = this.state; 

		let novaLista = [];
		if(!foto.likeada) {
			novaLista = [
				...foto.likers,
				{login: 'meuUsuario'}
			];
		} else {
			novaLista = foto.likers.filter(liker => {
				return liker.login !== 'meuUsuario'
			});
		}

		const fotoAtualizada = {
			...foto,
			likeada: !foto.likeada,
			likers: novaLista
		}
		this.setState({foto: fotoAtualizada});
	}

	exibeLikes(likers) {
		if(likers.length <= 0)
			return;

		return (
			<Text style={styles.likes}>
				{likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
			</Text>
		);
	}

	exibeLegenda(foto) {
		if(foto.comentario === '')
			return;

		return (
			<View style={styles.comentario}>
				<Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
				<Text>{foto.comentario}</Text>
			</View>
		);
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
						{this.exibeLikes(foto.likers)}
						{this.exibeLegenda(foto)}
					</TouchableOpacity>
				</View>
            </View>
        );
    }
};