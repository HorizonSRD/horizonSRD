import { StyleSheet } from 'react-native'

const styles = StyleSheet.create( {
    formContext: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    form: {
        width: "100%",
    },
    formLabel: {
        color: "#000000",
        fontSize: 27,

    },
    input: {
        backgroundColor: "#f6f6f6",
        widht: "90%",
        borderRadius: 50,
        height: 50,
        margin: 12,
        paddingLeft: 10,
    },
    boxTitle: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
    },
    submit: {
        borderRadius: 50,
        alignItems: "center",
        justifyContect: "center",
        widht: "90%",
        backgroundColor: "#000080",
        paddingTop: 14,
        paddingBottom: 14,
        paddingHorizontal: 40,
        margin: 60,
    },
    textSubmit: {
        fontSize: 20,
        color: "#ffffff",
    }
} )

export default styles