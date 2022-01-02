import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Alert } from 'react-native';

import {Formik} from 'formik';
import * as yup from "yup";

import signIn from '../firebase';

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyleTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    MsgBox,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
    Line,
    Colors,
}
from '../components/styles'

//Colors
const {brand, darkLight, primary} = Colors;

//Keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/keyboardAvoidingWrapper';

//login schema
const LoginSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required")
})


//firebase login
const onLogin = async (email, password) => {
    try {
        await app.auth().signInWithEmailAndPassword(email, password)
        console.log("firebase auth succ", email, password)
    }catch (error){
        Alert.alert(error.message)
    }
}

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar  style='dark'/>
            <InnerContainer>
                <PageLogo source={require("../assets/icons/nature.png")} />
                <PageTitle>Pocket Doctor</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik initialValues={{email: '', password: ''}}
                validationSchema={LoginSchema}
                onSubmit={async (values) => { 
                    // console.log(values.email, values.password);
                    await signIn(values.email, values.password);
            
                    navigation.replace("home");
                }}>
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            <MyTextInput label="Email Address"
                            icon="mail"
                            placeholder="something@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"/>

                            <MyTextInput label="Password"
                            icon="lock"
                            placeholder="* * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}/>

                            <MsgBox>...</MsgBox>

                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Login
                                </ButtonText>
                            </StyledButton>
                            <Line />
                            <StyledButton google={true} onPress={handleSubmit}>
                                <Fontisto name="google" color={primary} size={25}/>
                                <ButtonText google={true}>Sign in with Google</ButtonText>
                            </StyledButton>

                            <ExtraView>
                                <ExtraText>Don't have any account already?</ExtraText>
                                <TextLink onPress={() => navigation.navigate("signup")}>
                                    <TextLinkContent>   Sign up</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    )
}


const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>

            <StyledInputLabel>{label}</StyledInputLabel>
            <StyleTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}


export default Login
