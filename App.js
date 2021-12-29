import React from 'react';
import { Recipe } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";

import Login from './screens/loginNew';
import Signup from './screens/signup';

import { Colors } from './components/styles';

const Stack = createStackNavigator();

const {tertiary} = Colors;

const App = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: "transparent"
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
    
                }}
                initialRouteName={'login'}
            >
                <Stack.Screen name="login" component={Login}/>
                <Stack.Screen name="signup" component={Signup}/>
                <Stack.Screen name="home" component={Tabs}/>
                <Stack.Screen
                    name="Recipe"
                    component={Recipe}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;