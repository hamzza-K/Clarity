import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList,
    TextBase,
    findNodeHandle,
    ViewPropTypes
} from 'react-native';


import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constants';

import { CategoryCard, TrendingCard } from '../components';

import { snName } from './signup'; 

const Home = ({ navigation }) => {


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
                        Hello {snName}
                    </Text>

                    {/* Statement below the user */}
                    <Text style={{
                        marginTop:3,
                        color: COLORS.gray,
                        ...FONTS.body3

                    }}>What do you want to do today?</Text>

            </View>

                    <TouchableOpacity onPress={() => console.log("Profile")}>

                        <Image source={images.kanna} 
                        style={{width:40, height: 40, borderRadius:20}}>
                            

                        </Image>

                    </TouchableOpacity>

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

    function renderSeeRecipeCard(){
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                borderRadius: 10,
                backgroundColor: COLORS.lightGreen
            }}>


            <TouchableOpacity>
                    <Image 
                    source={icons.bellGolden}
                    style={{
                        marginTop: 15,
                        marginLeft: 10,
                        width: 60,
                        height: 60,
                        padding: 20
                    }}
                    />
            </TouchableOpacity>

                {/* Text */}
                <View style={{
                    marginTop: 10,
                    flex: 1,
                    paddingVertical: SIZES.radius,
                }}>
                    <Text style={{
                        width: "70%",
                        ...FONTS.body4
                    }}>
                        You have 12 new notifications that you haven't seen yet.
                    </Text>

                    <TouchableOpacity style={{
                        marginTop: 10,
                    }} onPress={() => console.log("See blogs")}>

                    <Text style={{
                        color: COLORS.darkGreen,
                        textDecorationLine: 'underline',
                        ...FONTS.h4
                    }}> See notifications

                    </Text>
                    </TouchableOpacity>


                </View>

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
            }}>Trending Health Blogs
            </Text>

            <FlatList data={dummyData.trendingRecipes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => `${item.id}`}
            renderItem={({item, index}) => {
                return (
                        <TrendingCard recipeItem={item}
                        containerStyle={{
                            marginLeft: index == 0 ? SIZES.padding: 0
                        }}
                        onPress={() => navigation.navigate("Recipe", { recipe: item })}
                        />
                )
            }}/>

            </View>
        )
    }


    function renderCategoryHeader(){
        return(

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                marginHorizontal: SIZES.padding 
            }}>


                {/* Section & Title */}
                <Text style={{
                    flex: 1,
                    ...FONTS.h2
                }}>

                    Categories

                </Text>

                {/* View All */}

                <TouchableOpacity>
                    <Text style={{
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}>
                        View All

                    </Text>
                </TouchableOpacity>

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
                {renderSeeRecipeCard()}
                {/* Trending Section */}
                {renderTrendingSection()}
                {/* Category Header */}
                {renderCategoryHeader()}
            </View>
        }

        // Shows each piece of Cuisine Item
        renderItem={({item}) => {
            return (
                <CategoryCard 
                
                containerStyle={{
                    marginHorizontal: SIZES.padding
                }}
                categoryItem={item}


                // Navigates to Recipe
                onPress={() => navigation.navigate(("Recipe"), {recipe: item})}/>
            )
        }}
        ListFooterComponent={
            <View style={{
                marginBottom: 100
            }}>

            </View>
        }/>
        </SafeAreaView>
    )
}

export default Home;