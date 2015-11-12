$(document).ready(function(){

	$.get("https://www.reddit.com/r/aww/.json", function(response){

			var posts = response.data.children;



		$.each(posts, function(index, post){

		// var $container = $('<div />').appendTo($('#image-container'));
		var $container = $('<div class="pics" />').appendTo($('#image-container'));

		// var $title = $('<a />').html('<h2>' +post.data.title +'</h2>').appendTo($container);
		// $title.attr("href", post.data.url);
		$('<p />').text(post.data.author).appendTo($container);
		$('<img />').attr('src',post.data.thumbnail).appendTo($container);
		var $title = $('<a />').html('<h2>' +post.data.title +'</h2>').appendTo($container);
		$title.attr("href", post.data.url);

	

		var postDate = new Date(post.data.created *1000);

			// Date

		// $('<p />').text('posted: '+postDate.postDate() + '/' +postDate.getDay()+
		//  '/' +postDate.getYear()).appendTo($container);

		
		});

	});

	$( "" ).addClass( "myClass yourClass" );




});



















