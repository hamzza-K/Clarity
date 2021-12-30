import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';

import {Formik} from 'formik';

import * as yup from "yup";

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
const {brand, darkLight, primary, lightGreen} = Colors;

//Date time picker
import DateTimePicker from "@react-native-community/datetimepicker";

//keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/keyboardAvoidingWrapper';

//signup schema

const SignupSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password must match!")
})


let snDateOfBirth = ""
let snEmail = ""
let snPassword = ""
let snConfirmPassword = ""
let snName = ""

const Signup = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true)
    const [show, setShow] = useState(false)
    const [date, setDate] = useState(new Date(2000, 0, 1));

    //Actual date of birth to be sent 
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar  style='dark'/>
            <InnerContainer>
                <PageTitle>Pocket Doctor</PageTitle>
                <SubTitle>Sign up</SubTitle>

                {show && (
                    <DateTimePicker testID="Something"
                    value={date}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}

                <Formik initialValues={{
                    name: '',
                    email: '', 
                    dateOfBirth: '', 
                    password: '',
                    confirmPassword: ''}}
                onSubmit={(values) => {
                    console.log(values),
                 navigation.navigate("home")}}>
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            {/* Name */}
                            <MyTextInput label="Name"
                            icon="person"
                            placeholder="Forst Burns"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name} />

                            <MyTextInput label="email address"
                            icon="mail"
                            placeholder="something@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"/>
                            {/* End Email Address */}

                            {/* Date of Birth */}
                            <MyTextInput label="Date of Birth"
                            icon="calendar"
                            placeholder="YYYY - MM - DD"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={dob ? dob.toDateString(): ''}
                            isDate={true}
                            editable={false}
                            showDatePicker={showDatePicker} />
                            {/* End of DOB */}

                            {/* Password */}
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

                            <MyTextInput label="Confirm Password"
                            icon="lock"
                            placeholder="* * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}/>
                            {/* End Password */}

                            <MsgBox>...</MsgBox>

                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Sign Up
                                </ButtonText>
                            </StyledButton>
                            <Line />
                            <ExtraView>
                                <ExtraText>Have any account already?</ExtraText>
                                <TextLink onPress={() => navigation.navigate("login")}>
                                    <TextLinkContent>  Login</TextLinkContent>
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


const MyTextInput = ({label, icon, isPassword, hidePassword, 
                    setHidePassword, isDate, showDatePicker, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>

            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyleTextInput {...props}/>}
            {isDate && <TouchableOpacity onPress={showDatePicker}>
                            <StyleTextInput {...props} />
                    </TouchableOpacity>}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export {snName,snEmail, snPassword}

export default Signup;
