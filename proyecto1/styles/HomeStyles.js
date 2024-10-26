import { StyleSheet } from 'react-native'

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       
    },
    titulo: {
        fontWeight: '700',
        color: 'red',
    },
    logo: {
        width: 300,
        height: 300,
    },
    bton: {
        backgroundColor: 'red',
         padding:20,
         borderRadius: 10,
         marginBottom:10
    },
    textBotn: {
        color: 'white',
        fontStyle: 'italic',
       
    }
})