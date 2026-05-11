import {View, Text, StyleSheet} from 'react-native';


export default function Header({titulo}) {
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}> {titulo} </Text>
            <Text style={estilos.subtitulo}> Organize as suas atividades diárias </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#ff0000',
        paddingVertical: 20,
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 700,
        color: 'white'
    },
    subtitulo: {
        fontSize: 14,
        color: '#0d00ff'
    }
})