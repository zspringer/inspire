function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService()

	drawImages = function (image) {
		// var template = ''
		document.body.style.backgroundImage = `url(${image.url})`
		// template += `
        //     <img src="${images.url}">
		// `
		
		// imageElem.innerHTML = template
	}

	function getImage() {
		imageService.getImage(drawImages)
	}
	getImage();
}


