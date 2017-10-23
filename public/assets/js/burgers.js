$(function(){
	$(".change-devoured").on("click", function(event) {
		var id = $(this).data("id");
		var devouredUpdate = 1;

		var newDevouredState = {
			devoured: devouredUpdate
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newDevouredState
		}).then(function() {
			console.log("changed devoured to ", devouredUpdate);
			location.reload();
		});
	});
	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $("#bu").val().trim(),
			devoured: 0
		};

		console.log(newBurger);

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function(){
			console.log("created new burger");
			location.reload();
		});
	});
	$(".delete-burger").on("click", function(event) {
		event.preventDefault();

		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
			type: "DELETE",
		}).then(function(){
			console.log("deleted this burger", id);
			location.reload();
		});
	});
});