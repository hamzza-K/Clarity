import React, {useState} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,   
    Platform,
    StyleSheet        
    } from 'react-native';
import {BlurView} from 'expo-blur';


import { SIZES, COLORS, FONTS, icons } from '../constants';

const RecipeCardInfo = ({recipeItem}) => {
    return (
        <BlurView
            intensity={99}
            tint="dark"
            style={styles.RecipeCardContainer}>
                <RecipeCardDetails recipeItem={recipeItem}/>
        </BlurView>
    )
}


const RecipeCardDetails = ({recipeItem}) => {
    const [books, setBooks] = useState(recipeItem.isBookmark);
    recipeItem.isBookmark = books;
    return(
        <View
        style={{
            flex: 1,
        }}>

            {/* Name & Bookmark */}
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>

                <Text style={{
                    width: "70%",
                    color: COLORS.white,
                    ...FONTS.h3,
                    fontSize: 18
                }}>
                    {recipeItem.name}
                </Text>


                <TouchableOpacity onPress={() => (books ? setBooks(false) : setBooks(true))}>
                    <Image source={books ? icons.bookmarkFilled : icons.bookmark}
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: SIZES.base,
                        tintColor: COLORS.darkGreen
                    }}/>
                </TouchableOpacity>

            </View>


            {/* Duration & Serving */}
            <Text style={{
                color: COLORS.lightGray,
                ...FONTS.body4
            }}>
                {recipeItem.duration} | {recipeItem.serving} Serving
            </Text>
        </View>
    )
}


const BookmarkCard = ({containerStyle, recipeItem, onPress}) => {
        return (
            <TouchableOpacity style={{
                height: 350,
                width: 350,
                marginTop: SIZES.radius,
                marginRight: -10,
                borderRadius: SIZES.radius,
                ...containerStyle
            }} onPress={onPress}>


            {/* Background Image */}
            <Image source={recipeItem.image}
            resizeMode='cover'
            style={{
                width: 350, 
                height: 350,
                borderRadius: SIZES.radius
            }}
                />

                {/* Category */}

                <View style={{
                    position: 'absolute',
                    top: 20,
                    left: 15,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 5,
                    backgroundColor: COLORS.transparentGray,
                    borderRadius: SIZES.radius
                }}>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.h4
                    }}>
                        {recipeItem.category}
                    </Text>
                </View>


                {/* Card Info */}

                <RecipeCardInfo recipeItem={recipeItem}/>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    RecipeCardContainer: {
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 10, 
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius
    }
})

export default BookmarkCard;