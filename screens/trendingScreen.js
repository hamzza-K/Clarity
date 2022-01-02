import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';


import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constants';
import { CategoryCard, TrendingCard } from '../components';
import BookmarkCard from '../components/bookmarkCard';

import Popup from '../components/popup';

const Trending = ({ navigation }) => {

    function renderHeader(){
        return(
            <View style={{
                flexDirection: 'row',
                marginHorizontal: SIZES.padding,
                alignItems: 'center', 
                height: 80    
            }}>

            {/* Text */}
                <View style={{
                    flex: 1,
                }}>
                    {/* Name of the user */}
                    <Text style={{
                        color: COLORS.darkGreen,
                        ...FONTS.h2
                    }}>
                        Hello There
                    </Text>

                    {/* Statement below the user */}
                    <Text style={{
                        marginTop:3,
                        color: COLORS.gray,
                        ...FONTS.body3

                    }}>What do you want to do today?</Text>

            </View>

                    <Popup visi={true} navigation={navigation}>
                    <TouchableOpacity onPress={() => {}}>

                        <Image source={images.kanna} 
                        style={{width:40, height: 40, borderRadius:20}}>
                        </Image>
                    </TouchableOpacity>
                    </Popup>

                    

                </View>
        )
    }

    function renderSearchBar(){
        return (
            <View style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                paddingHorizontal: SIZES.radius,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray
            }}>

                <TouchableOpacity onPress={() => console.log("searching")}>
                    <Image
                        source={icons.search}
                        style={{
                            width: 20, 
                            height: 20,
                            tintColor: COLORS.gray
                        }}
                    />
                </TouchableOpacity>


                <TextInput
                style={{
                    marginLeft: SIZES.radius,
                    ...FONTS.body3
                }}
                placeholderTextColor={COLORS.gray}
                placeholder='Search'
                />
                

            </View>
        )
    }


    function renderTrendingSection(){
        return (
            <View style={{
                marginTop: SIZES.padding
            }}>


            <Text style={{
                marginHorizontal: SIZES.padding,
                ...FONTS.h2
            }}>Favourites
            </Text>

            <FlatList data={dummyData.trendingRecipes}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => `${item.id}`}
            renderItem={({item, index}) => {
                return (
                        item.isBookmark ?
                        <BookmarkCard recipeItem={item}
                        // containerStyle={{
                        //     marginLeft: index == 0 ? SIZES.padding: 0
                        // }}
                        onPress={() => navigation.navigate("Recipe", { recipe: item })}
                        />
                        : <Text></Text>
                )
            }}/>

            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}>


        {/* The cuisine List */}
        <FlatList data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        // List Header
        ListHeaderComponent={
            <View>
                {/* Header */}
                {renderHeader()}
                {/* Search Bar */}
                {renderSearchBar()}
                {/* See Recipe Card */}
                {/* {Notifications()} */}
                {/* Trending Section */}
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                {renderTrendingSection()}
                </View>
            </View>
        }

        // Shows each piece of Cuisine Item
        // renderItem={({item}) => {
        //     return (
        //         <CategoryCard 
        //         containerStyle={{
        //             marginHorizontal: SIZES.padding
        //         }}
        //         categoryItem={item}
        //         // Navigates to Recipe
        //         onPress={() => navigation.navigate(("Recipe"), {recipe: item})}/>
        //     )
        // }}
        ListFooterComponent={
            <>
            <View style={{marginBottom: 10}}></View>
            {renderSearchBar()}
            </>
        }/>
        </SafeAreaView>
    )
}

export default Trending;