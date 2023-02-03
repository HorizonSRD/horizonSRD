import { setStatusBarTranslucent } from "expo-status-bar"
import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard, FlatList } from "react-native"
import styles from "./style"
export default function Form ()
{
    const [ email, setEmail ] = useState( null )
    const [ senha, setSenha ] = useState( null )
    const [ textSubmit, setTextSubmit ] = useState( "Entrar" )

    function validationEmail ()
    {
        if ( email != null && senha != null )
        {
            console.log( senha )
            setTextSubmit( "Enviado!" )
            setEmail( null )
            setSenha( null )
        }
        else
        {
            setTextSubmit( "campo não preenchido" )
        }
    }

    return (
        <View style={ styles.formContext }>
            <Pressable onPress={ Keyboard.dismiss } style={ styles.form }>
                <View style={ styles.boxTitle }>
                    <Text style={ styles.formLabel }>
                        Login
                    </Text>
                </View>
                <TextInput style={ styles.input }
                    placeholder="EX. joao@gmail.com"
                    onChangeText={ setEmail }
                    value={ email }
                    keyboardType="text" />

                <View style={ styles.boxTitle }>
                    <Text style={ styles.formLabel }>
                        Senha
                    </Text>
                </View>
                <TextInput style={ styles.input }
                    placeholder="EX. joao3216"
                    onChangeText={ setSenha }
                    value={ senha }
                    keyboardType="text" />
                <TouchableOpacity
                    onPress={ () =>
                    {
                        validationEmail()

                    } }
                    style={ styles.submit }
                >
                    <Text style={ styles.textSubmit }>
                        { textSubmit }
                    </Text>
                </TouchableOpacity>
            </Pressable>
        </View>
    )
}