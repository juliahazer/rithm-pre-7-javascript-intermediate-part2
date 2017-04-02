/*
When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"
Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
Remove the last paragraph in the article.
Set the font size of h1 with an id of title to be a random pixel size from 0 to 100.
Add an item to the list; it can say whatever you want.
Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.
When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
Add an event listener so that when you click on the image, it is removed from the DOM.
*/

$(function(){
	console.log("Let's get ready to party with jQuery!");

	$('article img').addClass('image-center');

	$('article p:last-child').remove();

	var randomSize = Math.random() * 100
	$('h1#title').css('font-size', randomSize);

	$('ol').append($('<li>', {text: 'I love puppies!'}));

	$('aside').empty().append($('<p>', {text: 'Sorry!'}));

	var red = 255;
	var green = 255;
	var blue = 255;
	
	function setBackground(red, green, blue){
		$('body').css('background-color', `rgb(${red},${green},${blue})`);
	}

	setBackground(red,green,blue);

	// $('.row div input').on('change', function(){
	// 	var color = $(this).parent().text().trim().toLowerCase();
	// 	var value = $(this).val();
	// 	if (color === 'red'){
	// 		red = value;
	// 	}
	// 	else if (color === 'green'){
	// 		green = value;
	// 	}
	// 	else {
	// 		blue = value;
	// 	}

	// 	setBackground(red,green,blue);
	// });

	$('.form-control').on('keyup blur change', function(){
		var red = $('.form-control').eq(0).val();
		var blue = $('.form-control').eq(1).val();
		var green = $('.form-control').eq(2).val();
		setBackground(red,green,blue);
	});

	$('img').on('click', function(){
		$(this).hide();
	});

})
