const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    username: {
        type:String,
        required: true,
        unique:true
    },
    membershipStatus: {
        type:String,
        required: true
    },
});


userSchema.virtual("fullName").get(function() {
    return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("User", userSchema);