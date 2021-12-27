import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

import {COLORS, FONTS} from '../constants';



const CustomButton = ({buttonText, buttonContainerStyle,
                     colors, onPress}) => {
                        
                        if (colors.length > 0){
                            return(
                                <TouchableOpacity 
                                
                                style={{
                                    ...buttonContainerStyle
                                }}
                                onPress={onPress}>

                                    <Text style={{
                                        textAlign: 'center',
                                        color: COLORS.white,
                                        fontFamily: "Roboto",
                                        fontSize: 25,
                                    }}>

                                        {buttonText}

                                    </Text>

                                </TouchableOpacity>
                            )
                        }

                     }




export default CustomButton;