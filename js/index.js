// search.addeventListener('click', function(){
// 	alert('hi guys');
// });

$('#search').click(function(){
	$('#result').empty()

	var input = $('#entry').val();


	fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
	.then(function(json){
		$.each(json, function(i, todo){
			if (Object.values(todo).toString().includes(input)){
				$('#result').append('<p>'+'UserId: ' + todo.userId+ ', TodoId: ' 
					+ todo.id +', Todo Title: ' + todo.title + ', completed: '+ todo.completed );}
		})
			
	})
})


