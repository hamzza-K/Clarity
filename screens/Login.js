import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';

import {images, COLORS, SIZES, FONTS} from '../constants';
import { useFonts } from 'expo-font';
import { CustomButton } from '../components';
// import LinearGradient from "react-native-linear-gradient";
// import LinearGradient from "expo-linear-gradient";

const Login = ({ navigation }) => {

    function renderHeader(){
        return (
            // <View
            // style={{height: SIZES.height > 700 ? "80%": "60%"}}>


            <View>

            <ImageBackground source={images.PocketDoc}
            style={{flex: 1, justifyContent: 'flex-end'}}
            resizeMode="cover">

{/* 
                <LinearGradient
                start={{x:0, y:0}}
                end={{x:0, y:1}}
                colors={[
                    COLORS.transparent,
                    COLORS.black
                ]}
                style={{
                    height: 200,
                    justifyContent: 'flex-end',
                }}>

                </LinearGradient> */}

{/* 
                <Text
                style={{
                    width: "70%",
                    color: COLORS.white,
                    fontFamily: 'RobotoBold',
                    fontSize: 45,
                    lineHeight: 45
                }}>
                    Cooking delicious food...
                </Text> */}

            </ImageBackground>

            </View>
        );
    }


    function renderDetail(){
        return(
            <View style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                zIndex: 999,
                position: 'absolute'
            }}>

                {/* Description */}
                {/* <Text
                style={{
                    marginTop: SIZES.radius,
                    width: "70%",
                    color: COLORS.gray,
                    fontFamily: 'Roboto',

                }}>

                    Discover more than 1000000 recipes 
                </Text> */}


                {/* Buttons */}

                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>


                    {/* Login */}
                    <CustomButton buttonText="Login"
                    buttonContainerStyle={{
                        paddingVertical: 18,
                        borderRadius: 20,

                    }}
                    colors={[COLORS.darkGreen, COLORS.lime]}
                    onPress={() => navigation.replace("Home")}/>

                    {/* Sign UP */}
                    <CustomButton buttonText="SignUp"
                    buttonContainerStyle={{
                        marginTop: SIZES.radius,
                        paddingVertical: 18,
                        borderRadius: 20,
                        borderColor: COLORS.darkLime,
                        borderwidth: 1
                    }}
                    colors={[COLORS.lime, COLORS.lime]}
                    onPress={() => navigation.replace("Main")}/>

                </View>

            </View>
        );

    }

    return (
        <View style={{flex:1, backgroundColor: COLORS.black}}>
            <StatusBar barStyle="light-content"/>
            {/* Header */}
            {renderHeader()}
            {/* Detail */}
            {renderDetail()}
        </View>
    )
}

export default Login;