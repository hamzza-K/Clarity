import React from 'react'
import { View, Text, Image } from 'react-native'
import {COLORS, FONTS} from '../constants'


const Viewers = ({viewersList}) => {

    if(viewersList?.length == 0){
        return(
            <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    color: COLORS.lightGray2,
                    ...FONTS.body4
                }}>Be the first one to like this</Text>
            </View>

        )
    }else if(viewersList?.length <= 4){
        return(
            <View>
                {/* Profile */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginBottom: 10
                }}>

                    {viewersList?.map((item, index) => (
                        <View key={index}
                        style={{
                            height: 50,
                            width: 50,
                            marginLeft: index == 0 ? 0 : -35
                        }}>
                            <Image source={item.profilePic}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 35
                            }}/>
                        </View>
                    ))} 

                </View>
                {/* Text */}
                <Text style={{color: COLORS.lightGray2,
                                textAlign: 'right',
                                ...FONTS.body4,
                                lineHeight: 18}}>
                    {viewersList?.length} people
                </Text>

                <Text style={{color: COLORS.lightGray2,
                                textAlign: 'right',
                                ...FONTS.body4,
                                lineHeight: 18}}>
                    Watched this
                    </Text>
            </View>
        )
    }else{
        return(
            <View>
                {/* Profile */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginBottom: 10
                }}>

                    {viewersList?.map((item, index) => {
                        if(index <= 2) {
                            return(
                                <View key={index}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        marginLeft: index == 0? 0: -35
                                    }}>
                                        {/* IMAGE SHOWING PROFILE */}
                                        <Image source={item.profilePic}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 35
                                        }}/>
                                </View>
                            );
                        }
                        if (index == 3){
                            return(
                                <View key={index} style={{
                                    height: 50,
                                    width: 50,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginLeft: -35,
                                    borderRadius: 35,
                                    backgroundColor: COLORS.darkGreen
                                }}>

                                    <Text style={{color: COLORS.white,
                                    ...FONTS.body4}}>
                                        {viewersList?.length - 3}+
                                    </Text>

                                </View>
                            );
                        }
                                }) 
                    }
                </View>

                {/* Text */}
                <Text style={{color: COLORS.lightGray2,
                                textAlign: 'right',
                                ...FONTS.body4,
                                lineHeight: 18}}>
                    {viewersList?.length} people
                </Text>

                <Text style={{color: COLORS.lightGray2,
                                textAlign: 'right',
                                ...FONTS.body4,
                                lineHeight: 18}}>
                    Watched this
                    </Text>
            </View>
    )}
}

export default Viewers
