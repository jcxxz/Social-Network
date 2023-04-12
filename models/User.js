const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^[a-zA-Z0-9!#$&_*?{}~-]+(\.?[a-zA-Z0-9!#$&_*?{}~-])*@([a-z0-9]+([a-z0-9-]*)\.)[a-zA-Z]+$/
    },
    thoughts: [ 
        {
            type : Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
    ],
    friends : [
        {
            type : Schema.Types.ObjectId,
            ref: 'Users'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('user', UserSchema);

module.exports = User;