import { StyleSheet, View, Image, TextInput } from 'react-native'
import iconPerfil from '../../images/perfil/info-pessoal.png'
import iconEditar from '../../images/perfil/editar.png'

export default function inputPerfil({icone, nome, editar}) {
    return (
        <View style={[styles.containerInput]}>
            <Image source={icone} style={styles.iconPerfil} />
                <TextInput style={styles.input} placeholder={nome} >

                </TextInput>
            {editar == 1 && <Image source={iconEditar} style={styles.iconEditar} />}
        </View>
    );
}

const styles = StyleSheet.create({
    iconEditar: {
        width: 14,
        height: 14,
    },
    iconPerfil: {
        width: "5%",
        height: "30%",
        marginRight: 22
    },
    containerInput: {
        flex: 0,
        flexDirection: 'row',
        height: 60,
        width: "100%",
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingright: 10,
        borderBottomColor: 'rgba(0,0,0,0.22)',
        borderBottomWidth: 1,
        borderRadius:2,
    },
    input: {
        flex:0,
        paddingLeft: 10,
        paddingRight: 10,
        width: "80%",
        color: '#1e1e1e50'
    },
})