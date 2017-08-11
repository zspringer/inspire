function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService()

	drawImages = function (image) {
		document.body.style.backgroundImage = `url(${image.url})`
	}

	function getImage() {
		imageService.getImage(drawImages)
	}
	getImage();
}


