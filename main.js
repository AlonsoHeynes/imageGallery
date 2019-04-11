//jshint esversion: 6

let myPicturesArray = [
	{
		"albumId": 1,
		"id": 1,
		"title": "accusamus beatae ad facilis cum similique qui sunt",
		"url": "http://placehold.it/600/6927ff",
		"thumbnailUrl": "http://placehold.it/150/d52484"
	},
	{
		"albumId": 1,
		"id": 2,
		"title": "reprehenderit est deserunt velit ipsam",
		"url": "http://placehold.it/600/837dff",
		"thumbnailUrl": "http://placehold.it/150/cdeeaa"
	},
	{
		"albumId": 2,
		"id": 51,
		"title": "non sunt voluptatem placeat consequuntur rem incidunt",
		"url": "http://placehold.it/600/bf81ff",
		"thumbnailUrl": "http://placehold.it/150/ff6bd6"
	},
	{
		"albumId": 2,
		"id": 52,
		"title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
		"url": "http://placehold.it/600/ffd581",
		"thumbnailUrl": "http://placehold.it/150/acdbdf"
	},
	{
		"albumId": 3,
		"id": 127,
		"title": "magnam quia sed aspernatur",
		"url": "http://placehold.it/600/f8a978",
		"thumbnailUrl": "http://placehold.it/150/51e3d4"
	},
	{
		"albumId": 3,
		"id": 128,
		"title": "est facere ut nam repellat numquam quia quia eos",
		"url": "http://placehold.it/600/b0931d",
		"thumbnailUrl": "http://placehold.it/150/ffba5a"
	},
	{
		"albumId": 2,
		"id": 129,
		"title": "reprehenderit est deserunt velit ipsam",
		"url": "http://placehold.it/600/f1eb9a",
		"thumbnailUrl": "http://placehold.it/150/23a393"
	},
	{
		"albumId": 1,
		"id": 42,
		"title": "reprehenderit est deserunt velit ipsam",
		"url": "http://placehold.it/600/771796",
		"thumbnailUrl": "http://placehold.it/150/6d70c6"
	},
	{
		"albumId": 2,
		"id": 81,
		"title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
		"url": "http://placehold.it/600/121fa4",
		"thumbnailUrl": "http://placehold.it/150/96dae4"
	},
	{
		"albumId": 2,
		"id": 17,
		"title": "non sunt voluptatem placeat consequuntur rem incidunt",
		"url": "http://placehold.it/600/8e973b",
		"thumbnailUrl": "http://placehold.it/150/c56868"
	},
	{
		"albumId": 3,
		"id": 26,
		"title": "est facere ut nam repellat numquam quia quia eos",
		"url": "http://placehold.it/600/b0931d",
		"thumbnailUrl": "http://placehold.it/150/ffedc6"
	}
];

// Display pictures
function displayAllPictures(){
	myPicturesArray.forEach(function(currentImage) {
		let image = document.createElement('img');
		image.src = currentImage.thumbnailUrl;
		image.alt = currentImage.title;
		image.className = 'myImage' + ' ' + 'show album' + currentImage.albumId;         //crear una clase "picture" y añadírsela a cada elemento creado
		document.querySelector('.images-container').appendChild(image);

	})
}
displayAllPictures();

var btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', displayAlbum1);

function displayAlbum1(){
	$('.album1').addClass('show');
	$('.album2').removeClass('show').addClass('hide');
	$('.album3').removeClass('show').addClass('hide');
}

var btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', displayAlbum2);

function displayAlbum2(){
	$('.album1').removeClass('show').addClass('hide');
	$('.album2').addClass('show');
	$('.album3').removeClass('show').addClass('hide');
}

var btn3 = document.querySelector('.btn3');

btn3.addEventListener('click', displayAlbum3);

function displayAlbum3(){
	$('.album1').removeClass('show').addClass('hide');
	$('.album2').removeClass('show').addClass('hide');
	$('.album3').addClass('show');
}

var btnAllPictures = document.querySelector('.all-pictures');

btnAllPictures.addEventListener('click', displayAllAlbums);

function displayAllAlbums(){
	$('.myImage').addClass('show').removeClass('hide');
}
