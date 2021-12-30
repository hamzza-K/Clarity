import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home } from "../screens"
import { COLORS, icons } from "../constants";
import { TabIcon } from "../components";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                backgroundColor: COLORS.white2, 
                borderTopColor: "transparent",
                height: 80,
                borderRadius: 5
            }
        }}>
            <Tab.Screen
                name="Main"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused}
                    icon={icons.home} iconb={icons.homeB}/>
                }}
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused}
                    icon={icons.mode} iconb={icons.modeB} />
                }}
                
            />
            <Tab.Screen
                name="Bookmark"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused}
                    icon={icons.bookmark} iconb={icons.bookmarkB}/>
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused}
                    icon={icons.settings} iconb={icons.settingsB}/>
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;