const monggose = require('mongoose');

const woodSchema = monggose.Schema({
    name: { required: true, type: String, unique: 1, maxlength: 100 }
})

const Wood = monggose.model('Wood', woodSchema)

module.exports = { Wood }