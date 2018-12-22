Module.register("hukamnamaDaily", {

	// Module config defaults.
	defaults: {
		updateInterval: 5000, // in milliseconds for how long till next line shows
		fadeSpeed: 1000, // in milliseconds the length of the fade animation


		// change the bottom options to set default values for the mode
		larivaar: false,
		punjabiTranslation: true,
		englishTranslation: true,
		englishTransliteration: true
	},

	// Define required scripts.
	getScripts: function() {
		return ["https://code.jquery.com/jquery-latest.min.js"];
	},

	// Define required scripts.
	getStyles: function() {
		return ["hukamnamaDaily.css"];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		var self = this;

		$.ajax({
			url: 'https://api.gurbaninow.com/v2/hukamnama/today',
			dataType: 'json',
			success: function(data) {
				self.hukamnama = data.hukamnama;
				self.currentLineIndex = 0;

				// update the "please wait" message
				self.updateDom(self.config.fadeSpeed);

				// automatically update following lines based on time interval
				setInterval(function() {
					self.updateDom(self.config.fadeSpeed);
				}, self.config.updateInterval);
			},
			 error: function() {
				self.error = true;
				self.updateDom(self.config.fadeSpeed);
			}
		});
	},

	// Override dom generator.
	getDom: function() {

		var wrapper = document.createElement("div");
		wrapper.className = "thin xlarge bright pre-line";
		
		if(this.error){
			wrapper.appendChild(document.createTextNode('Error retreiving hukamnama'));
			return wrapper;
		}

		if(this.hukamnama == null){
			wrapper.appendChild(document.createTextNode('Loading, Please wait ....'));
			return wrapper;
		}

		console.log("hukamnama:", this.hukamnama);

		var currentLine = this.hukamnama[this.currentLineIndex].line;

		// use the next line when this function is called again
		this.currentLineIndex = (this.currentLineIndex + 1) % this.hukamnama.length;

		if(this.config.larivaar){
			wrapper.appendChild(this.createSubline(currentLine.larivaar.unicode, "mainLine"));
		}
		else{
			wrapper.appendChild(this.createSubline(currentLine.gurmukhi.unicode, "mainLine"));
		}

		if(this.config.punjabiTranslation){
			wrapper.appendChild(this.createSubline(currentLine.translation.punjabi.default.unicode, "punjabiTranslation"));
		}

		if(this.config.englishTranslation){
			wrapper.appendChild(this.createSubline(currentLine.translation.english.default, "englishTranslation"));
		}

		if(this.config.englishTransliteration){
			wrapper.appendChild(this.createSubline(currentLine.transliteration.english.default, "englishTransliteration"));
		}

		return wrapper;
	},

	// helper function to create one of the line elements
	createSubline: function(content, className){
		var elm = document.createElement("div");
		elm.innerText = content ? content : "";
		elm.className = className;
		return elm;
	},
});
