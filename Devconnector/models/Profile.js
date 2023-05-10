const mongoose = require('mongoose');
//const ObjectId = mongoose.Types.ObjectId;
const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    company:{
        type: String
    },
    website:{
        type: String
    },
    location: {
        type: String
    },
    status:{
        type: String,
        required: true
    },
    skills:{
        type: Array,
        required: true
    },
    bio:{
        type: String
    },
    githubusername:{
        type: String
    },
    experience: [
        {
          title: {
            type: String,
            required: true
          },
          company: {
            type: String,
            required: true
          },
          location: {
            type: String
          },
          from: {
            type: Date,
            required: true
          },
          to: {
            type: Date
          },
          current: {
            type: Boolean,
            default: false
          },
          description: {
            type: String
          }
        }
      ],
      education: [
        {
          school: {
            type: String,
            required: true
          },
          degree: {
            type: String,
            required: true
          },
          fieldofstudy: {
            type: String,
            required: true
          },
          from: {
            type: Date,
            required: true
          },
          to: {
            type: Date
          },
          current: {
            type: Boolean,
            default: false
          },
          description: {
            type: String
          }
        }
      ],
      social: {
        youtube: {
          type: String
        },
        twitter: {
          type: String,
          required: true
        },
        facebook: {
          type: String
        },
        linkedin: {
          type: String,
          required: true
        },
        instagram: {
          type: String
        }
      },
      date: {
        type: Date,
        default: Date.now
      }
});
//const convertedId = new ObjectId(ProfileSchema.user);
//ProfileSchema._id = convertedId;
//ProfileSchema.save();


module.exports= Profie = mongoose.model('profile',ProfileSchema);