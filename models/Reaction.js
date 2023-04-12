const { Schema, Types } = require('mongoose');

const ReactionSchema = new Schema({
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: 
        {
        type: String,
        required: true
        },
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    }
}
);
 module.exports = ReactionSchema;