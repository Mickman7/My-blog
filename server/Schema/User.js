const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = mongoose.Schema({

    personal_info: {
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password: String,
        username: {
            type: String,
            minlength: [3, 'Username must be 3 letters long'],
            unique: true,
        },
        bio: {
            type: String,
            maxlength: [200, 'Bio should not be more than 200'],
            default: "",
        },
        // profile_img: {
        //     type: String,
        //     default: () => {
        //         return `https://api.dicebear.com/6.x/${profile_imgs_collections_list[Math.floor(Math.random() * profile_imgs_collections_list.length)]}/svg?seed=${profile_imgs_name_list[Math.floor(Math.random() * profile_imgs_name_list.length)]}`
        //     } 
        // },
    },
    social_links: {
        youtube: {
            type: String,
            default: "",
        },
        instagram: {
            type: String,
            default: "",
        },
        facebook: {
            type: String,
            default: "",
        },
        twitter: {
            type: String,
            default: "",
        },
        github: {
            type: String,
            default: "",
        },
        website: {
            type: String,
            default: "",
        }
    },
    account_info:{
        total_posts: {
            type: Number,
            default: 0
        },
        total_reads: {
            type: Number,
            default: 0
        },
    },
    google_auth: {
        type: Boolean,
        default: false
    },
    blogs: {
        type: [ Schema.Types.ObjectId ],
        ref: 'blogs',
        default: [],
    }

}, 
{ 
    timestamps: {
        createdAt: 'joinedAt'
    } 

})

const User = mongoose.model('User', userSchema);
module.exports = User;