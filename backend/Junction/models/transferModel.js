var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var TransferSchema = new Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    amount: {
        type:Number,
        required: true
    }

});

module.exports = mongoose.model('transfers', TransferSchema);