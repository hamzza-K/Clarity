import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1,
        name: "Spaghetti With Shrimp Sauce",
        image: images.spagetti,
        duration: "30 mins",
        serving: 1,
        isBookmark: false,
        category: "Pasta",
        author: {
            profilePic: images.UserProfile5,
            name: "Maria",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.pasta,
                description: "Spaghetti pasta",
                quantity: "100g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Olive Oil",
                quantity: "2 tbsp"
            },
            {
                id: 3,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Campari tomatoes",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 6,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 2,
        name: "Malaysian Chicken Satay",
        image: images.satay,
        duration: "50 mins",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile8,
            name: "Mandy",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile5
            },
            {
                id: 2,
                profilePic: images.UserProfile4
            },
            {
                id: 3,
                profilePic: images.UserProfile1
            },
            {
                id: 4,
                profilePic: images.UserProfile2
            },
            {
                id: 5,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 3,
        name: "Sarawak Laksa",
        image: images.laksa,
        duration: "30 mins",
        serving: 1,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile9,
            name: "Jessie",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 4,
        name: "Nasi Lemak",
        image: images.nasiLemak,
        duration: "1 hour",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile7,
            name: "Ali Baba",
        },  
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ],
        viewers: [

        ]
    },
    {
        id: 5,
        name: "Skin Care",
        image: require("../assets/icons/skincare.png"),
        duration: "30 mins",
        serving: 1,
        isBookmark: true,
        category: "Skin",
        author: {
            profilePic: images.kobayashi,
            name: "Kobayashi",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                name: "User 4",
                profilePic: images.UserProfile4
            },
            {
                id: 5,
                name: "User 5",
                profilePic: images.UserProfile5
            },
            {
                id: 6,
                name: "User 6",
                profilePic: images.UserProfile6
            },
            {
                id: 7,
                name: "User 7",
                profilePic: images.UserProfile7
            }
        ]
    },
    {
        id: 6,
        name: "Exhibition",
        image: images.exhibition,
        duration: "30 mins",
        serving: 1,
        isBookmark: true,
        category: "Skin",
        author: {
            profilePic: images.kobayashi,
            name: "Kobayashi",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                name: "User 4",
                profilePic: images.UserProfile4
            },
            {
                id: 5,
                name: "User 5",
                profilePic: images.UserProfile5
            },
            {
                id: 6,
                name: "User 6",
                profilePic: images.UserProfile6
            },
            {
                id: 7,
                name: "User 7",
                profilePic: images.UserProfile7
            }
        ]
    },
    {
        id: 7,
        name: "Green and Blue",
        image: images.gblue,
        duration: "5 mins",
        serving: 1,
        isBookmark: true,
        category: "Mental",
        author: {
            profilePic: images.kanna,
            name: "Kanna",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                name: "User 4",
                profilePic: images.UserProfile4
            },
            {
                id: 5,
                name: "User 5",
                profilePic: images.UserProfile5
            },
            {
                id: 6,
                name: "User 6",
                profilePic: images.UserProfile6
            },
            {
                id: 7,
                name: "User 7",
                profilePic: images.UserProfile7
            }
        ]
    },
    {
        id: 8,
        name: "Green Eye",
        image: images.greeneye,
        duration: "40 mins",
        serving: 1,
        isBookmark: true,
        category: "Eye",
        author: {
            profilePic: images.UserProfile5,
            name: "Kashi",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                name: "User 4",
                profilePic: images.UserProfile4
            },
            {
                id: 5,
                name: "User 5",
                profilePic: images.UserProfile5
            },
            {
                id: 6,
                name: "User 6",
                profilePic: images.UserProfile6
            },
            {
                id: 7,
                name: "User 7",
                profilePic: images.UserProfile7
            }
        ]
    },
    {
        id: 9,
        name: "Health Event at the Melbourne",
        image: images.health1,
        duration: "60 mins",
        serving: 1,
        isBookmark: true,
        category: "Health",
        author: {
            profilePic: images.kobayashi,
            name: "Kobayashi",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                name: "User 4",
                profilePic: images.UserProfile4
            },
            {
                id: 5,
                name: "User 5",
                profilePic: images.UserProfile5
            },
            {
                id: 6,
                name: "User 6",
                profilePic: images.UserProfile6
            },
            {
                id: 7,
                name: "User 7",
                profilePic: images.UserProfile7
            }
        ]
    },
    {
        id: 10,
        name: "Health Event Finalized",
        image: images.health2,
        duration: "10 mins",
        serving: 1,
        isBookmark: true,
        category: "General",
        author: {
            profilePic: images.UserProfile10,
            name: "Maha",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                name: "User 4",
                profilePic: images.UserProfile4
            },
            {
                id: 5,
                name: "User 5",
                profilePic: images.UserProfile5
            },
            {
                id: 6,
                name: "User 6",
                profilePic: images.UserProfile6
            },
            {
                id: 7,
                name: "User 7",
                profilePic: images.UserProfile7
            }
        ]
    },
    {
        id: 11,
        name: "Venue of Human care at London",
        image: images.londond1,
        duration: "20 mins",
        serving: 1,
        isBookmark: true,
        category: "Heart",
        author: {
            profilePic: images.UserProfile4,
            name: "Anna",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                name: "User 4",
                profilePic: images.UserProfile4
            },
            {
                id: 5,
                name: "User 5",
                profilePic: images.UserProfile5
            },
            {
                id: 6,
                name: "User 6",
                profilePic: images.UserProfile6
            },
            {
                id: 7,
                name: "User 7",
                profilePic: images.UserProfile7
            }
        ]
    },
    {
        id: 12,
        name: "Blood circulation",
        image: images.londond2,
        duration: "25 mins",
        serving: 1,
        isBookmark: true,
        category: "Blood",
        author: {
            profilePic: images.UserProfile7,
            name: "Jiraya",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                name: "User 4",
                profilePic: images.UserProfile4
            },
            {
                id: 5,
                name: "User 5",
                profilePic: images.UserProfile5
            },
            {
                id: 6,
                name: "User 6",
                profilePic: images.UserProfile6
            },
            {
                id: 7,
                name: "User 7",
                profilePic: images.UserProfile7
            }
        ]
    },
    

]

const categories = trendingRecipes

export default {
    trendingRecipes,
    categories
}