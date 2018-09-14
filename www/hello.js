

module.exports = {
	greet: function (name, sucessCallback, errorCallback){
		cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
	}	
};

