//jshint esversion: 6

let myPicturesArray = [
	{
		"albumId": 1,
		"id": 1,
		"title": "accusamus beatae ad facilis cum similique qui sunt",
		"url": "http://placehold.it/600/92c952",
		"thumbnailUrl": "http://placehold.it/150/92c952"
	},
	{
		"albumId": 1,
		"id": 2,
		"title": "reprehenderit est deserunt velit ipsam",
		"url": "http://placehold.it/600/771796",
		"thumbnailUrl": "http://placehold.it/150/771796"
	},
	{
		"albumId": 2,
		"id": 51,
		"title": "non sunt voluptatem placeat consequuntur rem incidunt",
		"url": "http://placehold.it/600/8e973b",
		"thumbnailUrl": "http://placehold.it/150/8e973b"
	},
	{
		"albumId": 2,
		"id": 52,
		"title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
		"url": "http://placehold.it/600/121fa4",
		"thumbnailUrl": "http://placehold.it/150/121fa4"
	},
	{
		"albumId": 3,
		"id": 127,
		"title": "magnam quia sed aspernatur",
		"url": "http://placehold.it/600/74456b",
		"thumbnailUrl": "http://placehold.it/150/74456b"
	},
	{
		"albumId": 3,
		"id": 128,
		"title": "est facere ut nam repellat numquam quia quia eos",
		"url": "http://placehold.it/600/b0931d",
		"thumbnailUrl": "http://placehold.it/150/b0931d"
	},
	{
		"albumId": 2,
		"id": 129,
		"title": "reprehenderit est deserunt velit ipsam",
		"url": "http://placehold.it/600/771796",
		"thumbnailUrl": "http://placehold.it/150/771796"
	},
	{
		"albumId": 1,
		"id": 42,
		"title": "reprehenderit est deserunt velit ipsam",
		"url": "http://placehold.it/600/771796",
		"thumbnailUrl": "http://placehold.it/150/771796"
	},
	{
		"albumId": 2,
		"id": 81,
		"title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
		"url": "http://placehold.it/600/121fa4",
		"thumbnailUrl": "http://placehold.it/150/121fa4"
	},
	{
		"albumId": 2,
		"id": 17,
		"title": "non sunt voluptatem placeat consequuntur rem incidunt",
		"url": "http://placehold.it/600/8e973b",
		"thumbnailUrl": "http://placehold.it/150/8e973b"
	},
	{
		"albumId": 3,
		"id": 26,
		"title": "est facere ut nam repellat numquam quia quia eos",
		"url": "http://placehold.it/600/b0931d",
		"thumbnailUrl": "http://placehold.it/150/b0931d"
	}
];

// Display picures
myPicturesArray.forEach(function(currentImage) {
	let image = document.createElement('img');
	image.src = currentImage.thumbnailUrl;
	image.alt = currentImage.title;
	image.className = 'myImage';         //crear una clase "picture" y añadírsela a cada elemento creado
	document.querySelector('.sectionGallery').appendChild(image);         //que cada img sea creada dentro del div con la clase "pic"
	image.onclick = function() {
		var expandImg = document.querySelector('#expandedImg');
		expandImg.src = image.src;
		expandImg.parentElement.style.display = 'block';
	}
});

document.querySelector('#buttonAlbum1').addEventListener('click', function(){
	myPicturesArray.forEach(function(currentImage){
		if(currentImage.albumId === 1){
		let image = document.createElement('img');
		image.src = currentImage.thumbnailUrl;
		image.alt = currentImage.title;
		image.className = 'myImage';         //crear una clase "picture" y añadírsela a cada elemento creado
		document.querySelector('.sectionGallery').appendChild(image);         //que cada img sea creada dentro del div con la clase "pic"
		image.onclick = function() {
			var expandImg = document.querySelector('#expandedImg');
			expandImg.src = image.src;
			expandImg.parentElement.style.display = 'block';
		}
		}
	});
});

document.querySelector('#buttonAlbum2').addEventListener('click', function(){
	myPicturesArray.forEach(function(currentImage){
		if(currentImage.albumId === 2){
		let image = document.createElement('img');
		image.src = currentImage.thumbnailUrl;
		image.alt = currentImage.title;
		image.className = 'myImage';         //crear una clase "picture" y añadírsela a cada elemento creado
		document.querySelector('.sectionGallery').appendChild(image);         //que cada img sea creada dentro del div con la clase "pic"
		image.onclick = function() {
			var expandImg = document.querySelector('#expandedImg');
			expandImg.src = image.src;
			expandImg.parentElement.style.display = 'block';
		}
		}
	});
});

document.querySelector('#buttonAlbum3').addEventListener('click', function(){
	myPicturesArray.forEach(function(currentImage){
		if(currentImage.albumId === 3){
		let image = document.createElement('img');
		image.src = currentImage.thumbnailUrl;
		image.alt = currentImage.title;
		image.className = 'myImage';         //crear una clase "picture" y añadírsela a cada elemento creado
		document.querySelector('.sectionGallery').appendChild(image);         //que cada img sea creada dentro del div con la clase "pic"
		image.onclick = function() {
			var expandImg = document.querySelector('#expandedImg');
			expandImg.src = image.src;
			expandImg.parentElement.style.display = 'block';
		}
		}
	});
});


/*
document.querySelector('#buttonAlbum1').addEventListener('click', function(){
	myPicturesArray.forEach(function(currentImage){
		let album = currentImage.albumId;
		if(album !== 1){
			this.style.display = 'hide';
		}

	});
});
*/
