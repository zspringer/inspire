function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService()

	drawImages = function (images) {
		var template = ''
		var imageElem = document.getElementById('results')
		// var
		template += `
            <img src="${images.url}">
		`
		
		imageElem.innerHTML = template
	}

	function getImage() {
		imageService.getImage(drawImages)
	}
	getImage();
}


