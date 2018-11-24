var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    balance: {
        type:Number,
        default: 0
    }

});

module.exports = mongoose.model('users', UserSchema);