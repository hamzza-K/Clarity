import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1,
        name: "Your Eyes Are Made of Glass",
        image: images.greeneye,
        duration: "30 mins",
        serving: 1,
        isBookmark: false,
        category: "Eyes",
        desc: "Lorem Ipsum ",
        author: {
            profilePic: images.UserProfile5,
            name: "Maria",
        },
        // ingredients: [
        //     {
        //         id: 1,
        //         icon: icons.pasta,
        //         description: "Spaghetti pasta",
        //         quantity: "100g"
        //     },
        //     {
        //         id: 2,
        //         icon: icons.oil,
        //         description: "Olive Oil",
        //         quantity: "2 tbsp"
        //     },
        //     {
        //         id: 3,
        //         icon: icons.shrimp,
        //         description: "Fresh Shrimp",
        //         quantity: "100g"
        //     },
        //     {
        //         id: 4,
        //         icon: icons.tomato,
        //         description: "Campari tomatoes",
        //         quantity: "100g"
        //     },
        //     {
        //         id: 5,
        //         icon: icons.salt,
        //         description: "Salt",
        //         quantity: "¾ tbsp"
        //     },
        //     {
        //         id: 6,
        //         icon: icons.pepper,
        //         description: "Black Pepper",
        //         quantity: "¼ tbsp"
        //     },

        // ],
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
        desc: "Lorem ipsum dolor sit amet, \
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
         ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor \
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
         mollit anim id est laborum.",
        author: {
            profilePic: images.UserProfile8,
            name: "Mandy",
        },
        // ingredients: [
        //     {
        //         id: 1,
        //         icon: icons.chicken,
        //         description: "Boneless Chicken Thighs",
        //         quantity: "1kg"
        //     },
        //     {
        //         id: 2,
        //         icon: icons.lemongrass,
        //         description: "Lemongrass stalk",
        //         quantity: "1 stalk"
        //     },
        //     {
        //         id: 3,
        //         icon: icons.onion,
        //         description: "Large Onion",
        //         quantity: "1"
        //     },
        //     {
        //         id: 4,
        //         icon: icons.garlic,
        //         description: "Garlic cloves",
        //         quantity: "5"
        //     },
        //     {
        //         id: 5,
        //         icon: icons.coriander,
        //         description: "Coriander",
        //         quantity: "1 tsp"
        //     },

        // ],
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
        desc: "At vero eos et accusamus et iusto\
         odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat\ On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
        author: {
            profilePic: images.UserProfile9,
            name: "Jessie",
        },
        // ingredients: [
        //     {
        //         id: 1,
        //         icon: icons.garlic,
        //         description: "Garlic cloves",
        //         quantity: "3"
        //     },
        //     {
        //         id: 2,
        //         icon: icons.lemongrass,
        //         description: "Lemongrass",
        //         quantity: "2 stalks"
        //     },
        //     {
        //         id: 3,
        //         icon: icons.egg,
        //         description: "Egg",
        //         quantity: "2"
        //     },
        //     {
        //         id: 4,
        //         icon: icons.shrimp,
        //         description: "Fresh Shrimp",
        //         quantity: "100g"
        //     },
        //     {
        //         id: 5,
        //         icon: icons.shallot,
        //         description: "Shallot",
        //         quantity: "4"
        //     },
        //     {
        //         id: 6,
        //         icon: icons.pasta,
        //         description: "vermicelli",
        //         quantity: "100g"
        //     },


        // ],
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
        // ingredients: [
        //     {
        //         id: 1,
        //         icon: icons.chilli,
        //         description: "Dried Chilli",
        //         quantity: "30g"
        //     },
        //     {
        //         id: 2,
        //         icon: icons.garlic,
        //         description: "Garlic cloves",
        //         quantity: "3"
        //     },
        //     {
        //         id: 3,
        //         icon: icons.egg,
        //         description: "Egg",
        //         quantity: "10"
        //     },
        //     {
        //         id: 4,
        //         icon: icons.rice,
        //         description: "rice",
        //         quantity: "1kg"
        //     },
        //     {
        //         id: 5,
        //         icon: icons.anchovy,
        //         description: "Dried anchovies",
        //         quantity: "3 cups"
        //     },


        // ],
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
        // ingredients: [
        //     {
        //         id: 1,
        //         icon: icons.garlic,
        //         description: "Garlic cloves",
        //         quantity: "3"
        //     },
        //     {
        //         id: 2,
        //         icon: icons.lemongrass,
        //         description: "Lemongrass",
        //         quantity: "2 stalks"
        //     },
        //     {
        //         id: 3,
        //         icon: icons.egg,
        //         description: "Egg",
        //         quantity: "2"
        //     },
        //     {
        //         id: 4,
        //         icon: icons.shrimp,
        //         description: "Fresh Shrimp",
        //         quantity: "100g"
        //     },
        //     {
        //         id: 5,
        //         icon: icons.shallot,
        //         description: "Shallot",
        //         quantity: "4"
        //     },
        //     {
        //         id: 6,
        //         icon: icons.pasta,
        //         description: "vermicelli",
        //         quantity: "100g"
        //     },


        // ],
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
        // ingredients: [
        //     {
        //         id: 1,
        //         icon: icons.garlic,
        //         description: "Garlic cloves",
        //         quantity: "3"
        //     },
        //     {
        //         id: 2,
        //         icon: icons.lemongrass,
        //         description: "Lemongrass",
        //         quantity: "2 stalks"
        //     },
        //     {
        //         id: 3,
        //         icon: icons.egg,
        //         description: "Egg",
        //         quantity: "2"
        //     },
        //     {
        //         id: 4,
        //         icon: icons.shrimp,
        //         description: "Fresh Shrimp",
        //         quantity: "100g"
        //     },
        //     {
        //         id: 5,
        //         icon: icons.shallot,
        //         description: "Shallot",
        //         quantity: "4"
        //     },
        //     {
        //         id: 6,
        //         icon: icons.pasta,
        //         description: "vermicelli",
        //         quantity: "100g"
        //     },


        // ],
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
        // ingredients: [
        //     {
        //         id: 1,
        //         icon: icons.garlic,
        //         description: "Garlic cloves",
        //         quantity: "3"
        //     },
        //     {
        //         id: 2,
        //         icon: icons.lemongrass,
        //         description: "Lemongrass",
        //         quantity: "2 stalks"
        //     },
        //     {
        //         id: 3,
        //         icon: icons.egg,
        //         description: "Egg",
        //         quantity: "2"
        //     },
        //     {
        //         id: 4,
        //         icon: icons.shrimp,
        //         description: "Fresh Shrimp",
        //         quantity: "100g"
        //     },
        //     {
        //         id: 5,
        //         icon: icons.shallot,
        //         description: "Shallot",
        //         quantity: "4"
        //     },
        //     {
        //         id: 6,
        //         icon: icons.pasta,
        //         description: "vermicelli",
        //         quantity: "100g"
        //     },


        // ],
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
        // ingredients: [
        //     {
        //         id: 1,
        //         icon: icons.garlic,
        //         description: "Garlic cloves",
        //         quantity: "3"
        //     },
        //     {
        //         id: 2,
        //         icon: icons.lemongrass,
        //         description: "Lemongrass",
        //         quantity: "2 stalks"
        //     },
        //     {
        //         id: 3,
        //         icon: icons.egg,
        //         description: "Egg",
        //         quantity: "2"
        //     },
        //     {
        //         id: 4,
        //         icon: icons.shrimp,
        //         description: "Fresh Shrimp",
        //         quantity: "100g"
        //     },
        //     {
        //         id: 5,
        //         icon: icons.shallot,
        //         description: "Shallot",
        //         quantity: "4"
        //     },
        //     {
        //         id: 6,
        //         icon: icons.pasta,
        //         description: "vermicelli",
        //         quantity: "100g"
        //     },


        // ],
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
        // ingredients: [
        //     {
        //         id: 1,
        //         icon: icons.garlic,
        //         description: "Garlic cloves",
        //         quantity: "3"
        //     },
        //     {
        //         id: 2,
        //         icon: icons.lemongrass,
        //         description: "Lemongrass",
        //         quantity: "2 stalks"
        //     },
        //     {
        //         id: 3,
        //         icon: icons.egg,
        //         description: "Egg",
        //         quantity: "2"
        //     },
        //     {
        //         id: 4,
        //         icon: icons.shrimp,
        //         description: "Fresh Shrimp",
        //         quantity: "100g"
        //     },
        //     {
        //         id: 5,
        //         icon: icons.shallot,
        //         description: "Shallot",
        //         quantity: "4"
        //     },
        //     {
        //         id: 6,
        //         icon: icons.pasta,
        //         description: "vermicelli",
        //         quantity: "100g"
        //     },


        // ],
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
        // ingredients: [
        //     {
        //         id: 1,
        //         icon: icons.garlic,
        //         description: "Garlic cloves",
        //         quantity: "3"
        //     },
        //     {
        //         id: 2,
        //         icon: icons.lemongrass,
        //         description: "Lemongrass",
        //         quantity: "2 stalks"
        //     },
        //     {
        //         id: 3,
        //         icon: icons.egg,
        //         description: "Egg",
        //         quantity: "2"
        //     },
        //     {
        //         id: 4,
        //         icon: icons.shrimp,
        //         description: "Fresh Shrimp",
        //         quantity: "100g"
        //     },
        //     {
        //         id: 5,
        //         icon: icons.shallot,
        //         description: "Shallot",
        //         quantity: "4"
        //     },
        //     {
        //         id: 6,
        //         icon: icons.pasta,
        //         description: "vermicelli",
        //         quantity: "100g"
        //     },


        // ],
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
        // ingredients: [
        //     {
        //         id: 1,
        //         icon: icons.garlic,
        //         description: "Garlic cloves",
        //         quantity: "3"
        //     },
        //     {
        //         id: 2,
        //         icon: icons.lemongrass,
        //         description: "Lemongrass",
        //         quantity: "2 stalks"
        //     },
        //     {
        //         id: 3,
        //         icon: icons.egg,
        //         description: "Egg",
        //         quantity: "2"
        //     },
        //     {
        //         id: 4,
        //         icon: icons.shrimp,
        //         description: "Fresh Shrimp",
        //         quantity: "100g"
        //     },
        //     {
        //         id: 5,
        //         icon: icons.shallot,
        //         description: "Shallot",
        //         quantity: "4"
        //     },
        //     {
        //         id: 6,
        //         icon: icons.pasta,
        //         description: "vermicelli",
        //         quantity: "100g"
        //     },


        // ],
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
        // ingredients: [
        //     {
        //         id: 1,
        //         icon: icons.garlic,
        //         description: "Garlic cloves",
        //         quantity: "3"
        //     },
        //     {
        //         id: 2,
        //         icon: icons.lemongrass,
        //         description: "Lemongrass",
        //         quantity: "2 stalks"
        //     },
        //     {
        //         id: 3,
        //         icon: icons.egg,
        //         description: "Egg",
        //         quantity: "2"
        //     },
        //     {
        //         id: 4,
        //         icon: icons.shrimp,
        //         description: "Fresh Shrimp",
        //         quantity: "100g"
        //     },
        //     {
        //         id: 5,
        //         icon: icons.shallot,
        //         description: "Shallot",
        //         quantity: "4"
        //     },
        //     {
        //         id: 6,
        //         icon: icons.pasta,
        //         description: "vermicelli",
        //         quantity: "100g"
        //     },


        // ],
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