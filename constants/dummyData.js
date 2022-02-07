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
        desc: "In this week’s case discussion, we look at a case from Dr Terry Harvey. \
        This patient is a 30-year-old male with no previous skin cancer history who had \
        been seen by another doctor in 2018 who imaged a lesion on his right thigh, but decided \
        on no further action at the time. Dr Harvey saw him in 2021 and examined the same lesion and \
        tracked down the previous imaging from 2018.\
        30-year-old male\
        No previous skin cancers\
        Same lesion in 2018 vs 2021\
        Update\
        Here is the pathology result. What are your thoughts and reactions? \
        MICROSCOPIC EXAMINATION\
        1. Sections of the biopsy show an infiltrative basal cell carcinoma\
        extending into superficial reticular dermis. There is no evidence of\
        perineural infiltration or angioinvasion in these sections.\
        2. SYNOPTIC REPORT FOR IN-SITU MELANOMA\
        Site: Left lateral thigh.\
        Type: Superficial spreading.\
        Ulceration: Absent.\
        Regression: Absent.\
        Associated benign melanocytic lesion: Dysplastic junctional naevus.\
        Nearest peripheral margin: 2.5 mm.\
        TNM stage (8th Edition): pTis.\
        Cancer Council Australia recommendation: Smm clearance.\
        SUMMARY\
        1. LEFT FOREHEAD, BIOPSY: INFILTRATIVE BASAL CELL CARCINOMA.\
        2. LEFT LATERAL THIGH, EXCISION: IN SITU (LEVEL 1) MELANOMA, CLOSEST\
        MARGIN 2.5 MM.",
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
        name: "How would you treat this patient? [24 January]",
        image: images.londond1,
        duration: "50 mins",
        serving: 10,
        isBookmark: false,
        category: "Global",
        desc: "This week’s case discussion from Dr Bronwyn Edmunds features a 77-year-old woman who had an acral in situ melanoma excised from her foot by a general surgeon, and then a plastic surgeon for the wide local excision. During a skin check three months later, the following images were taken.\
        What do you see, and what would you do?\
        Update\
        Excision biopsy of the suspicious pigmented skin lesion was done and another melanoma in situ was diagnosed.\
        How did this happen? What would you do next?\
        HISTOPATHOLOGY REPORT\
Location number:\
CLINICAL NoTES\
77 year old lady; recent excision melanona in situ plantar surface left foot (October\
2021), excision PSL nearby/posterior to skin graft plantar surface left foot; pigment on\
ridges and central darker pignent; ? Mi. 2) excision PSL medial surface left foots\
naevus, exclude malignancy. Histology skin lesion; orientation suture 12 o°clock\
\
MACROSCOPIC DESCRIPTION\
1. Labelled 1) L) foot posterior’. an orientated skin ellipse 19 x 7 x 3mm bearing a\
central dark tan patch 12 x 6mm. There is a suture at one pole designated 12 o'clock. The\
3 o'clock half is marked blue and the 9 o'clock half marked black. Submitted central TS x\
5 of entire lesion. Pl.\
\
2. Labelled *2) L) foot medial’. An orientated skin ellipse 10 x 4 x 2mm bearing a\
central ill-defined macule 6 x 4nm. There is @ suture at one pole designated 12 0° clock.\
The 3 o'clock half is marked blue and the 9 o'clock half marked black. (2.1) TS x 2 12\
o'clock, (2.2) TS x 26 o'clock. A2 DS\
\
MICROSCOPIC DESCRIPTION\
1. This excisional biopsy of hyperkeratotic acral skin shows an atypical melanocytic\
proliferation characterised by nested aggregates of enlarged atypical and hyperchromatic\
melanocytes within rete pegs, with abnormal upward and radial scatter in superficial\
spreading pattern by increased density of these atypical melanocytic cells, consistent\
with melanoma in situ. There is no evidence of invasive malignancy, and the melanoma in\
situ extends to focally involve 3 o'clock and 9 o'clock radial margins.\
\
On SOX1@ immunohistochemistry, increased numbers of enlarged atypical melanocytes are\
confirmed, showing broad upward scatter into the mid-epidermis and at the lateral aspect\
of the lesion; features of acral melanoma in situ.\
\
2. Sections of hyperkeratotic acral skin reveal a lentiginous junctional melanocytic\
naevus comprising increased density of non-nested junctional melanocytes, symmetrically\
arranged with no only minor focal cytological atypia. There is no significant\
architectural atypia, and no features to suggest malignancy.\
\
On SOX1@ immunohistochemistry, there is no evidence of an atypical melanocytic\
proliferation. The lesional cells appear to involve both radial biopsy edges. Fungal\
elements are not seen on PAS staining.\
\
This case has been reviewed with Dr Louise Jackett, who concurs of the diagnostic\
inclusions.\
\
CONCLUSION\
1. Ordentated skin excisional biopsy, L foot posterior: Acral melanoma in situ\
(Superficial spreading pattern), involves 3 o'clock and 9 o'clock long margins.\
\
AICC tumour stage (2017, ath edition): pTis.\
\
2. Orientated skin excisional biopsy, L foot medial: Acral lentiginous junctional\
melanocytic naevus.\
\
PATHOLOGIST\
MBChB; FRCPA)\
2/12/2021",
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
        name: "EARLY DIAGNOSIS OF SKIN CANCER CAN SAVE YOUR LIFE",
        image: require("../assets/icons/skincare.png"),
        duration: "30 mins",
        serving: 1,
        isBookmark: true,
        category: "Skin",
        desc: "If left untreated skin cancer can be dangerous, even deadly. Fortunately, there are ways to cure skin cancer, especially if it is recognized and addressed in its early stages. It is important for you to know potential signs of skin cancer so you can see a dermatologist before it becomes harmful.\
        \
                How is skin cancer diagnosed?\
               \ Skin cancer is typically marked by a new spot on the skin or changes to a mole or lesion that already exists. These changes include the growth of the lesion, changes in shape or color or if the lesion becomes bloody or itchy. Just one of these symptoms in itself does not mean that you have skin cancer. However, if your lesion fits any of these criteria, it is worth seeing a dermatologist to examine the lesion more closely.\
               \
                To determine whether you have skin cancer, a dermatologist will first compare a suspicious mole or lesion to other spots on your skin. If there is an irregularity, the dermatologist will perform a skin biopsy. A skin biopsy is a simple process. All the biopsy requires is scraping a bit of skin off the surface of your body and inspecting it under a microscope. In some cases a punch biopsy is necessary. The dermatologist uses a special tool to punch out a very small section of skin to examine.\
                \
                How is skin cancer treated?\
                Again, skin cancer can be cured easily in most cases as long as it is caught quickly. Treatments vary based on several factors, but minor surgeries and other local treatments are some of the most common methods.\
                ",
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
        name: "Blood Circulation",
        image: images.health1,
        duration: "1 hour",
        serving: 10,
        isBookmark: true,
        category: "Blood",
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