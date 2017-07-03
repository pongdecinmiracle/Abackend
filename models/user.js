var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var userSchema = mongoose.Schema({
	local: {
		email: {type: String, unique: true},
        pass: {type: String},
        firstname : {type: String},
        lastname: {type: String},
        tel:{type: String},
        reg_time : {
                    type : Date, default: Date.now
            }
	},
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	},
	google: {
		id: String,
		token: String,
		email: String,
		name: String
	}
});

userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', userSchema);