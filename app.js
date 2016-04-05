$(document).ready(function() {
	for (var i = 0; i < 255; i++) {
		var clone = $("#grid").clone();
		clone.appendTo($("#container"));
	};
	$("#container").on("mouseenter", "#grid", function() {
	$(this).addClass("hovered");
	});
	function reset() {
		$("#grid").removeClass();
		$("#container div:first-child").addClass("keep");
		$(".grid").remove();
		num = prompt("How many squares per side should the grid be?");
		var width = 512/num;
		width = width.toString();
		$(".grid, .keep").css({"width": width, "height": width});
		var adet = num*num;
		for (var i = 0; i < adet; i++) {
			var quantity = $("#grid").clone();
			quantity.appendTo($("#container"));
		};
		$("#container div").addClass("grid");
		$("#container").on("mouseenter", "#grid", function() {
			$(this).addClass("hovered");
		});
	};
	function random() {
		$("#grid").removeClass();
		function get_random_color2() {
    	var r = function () { return Math.floor(Math.random()*256) };
    	return "rgb(" + r() + "," + r() + "," + r() + ")";
		};
		$("#container").on("mouseenter", "#grid", function() {
			var color = get_random_color2();
			$(this).addClass("random");
			$(this).css("background-color", color);
		});
	};
	function opacity() {
		$("#grid").removeClass();
		$("#container").on("mouseenter", "#grid", function() {
			$(this).addClass("opacity");
		});
		$("#container").on("mouseenter", ".opacity", function() {
			$(this).addClass("opacity1");
			$(this).removeClass("opacity");
		});
		$("#container").on("mouseenter", ".opacity1", function() {
			$(this).addClass("opacity2");
			$(this).removeClass("opacity1");
		});
		$("#container").on("mouseenter", ".opacity2", function() {
			$(this).addClass("opacity3");
			$(this).removeClass("opacity2");
		});
		$("#container").on("mouseenter", ".opacity3", function() {
			$(this).addClass("opacity4");
			$(this).removeClass("opacity3");
		});
		$("#container").on("mouseenter", ".opacity4", function() {
			$(this).addClass("opacity5");
			$(this).removeClass("opacity4");
		});
		$("#container").on("mouseenter", ".opacity5", function() {
			$(this).addClass("opacity6");
			$(this).removeClass("opacity5");
		});
		$("#container").on("mouseenter", ".opacity6", function() {
			$(this).addClass("opacity7");
			$(this).removeClass("opacity6");
		});
		$("#container").on("mouseenter", ".opacity7", function() {
			$(this).addClass("opacity8");
			$(this).removeClass("opacity7");
		});
		$("#container").on("mouseenter", ".opacity8", function() {
			$(this).addClass("opacity9");
			$(this).removeClass("opacity8");
		});

	};
	function trail() {
		$("#grid").removeClass();
		$("#container").on("mouseenter", "#grid", function() {
			$(this).addClass("hovered");
		});
		$("#container").on("mouseleave", "#grid", function() {
			$(this).animate({"opacity": "0"}, "slow");
		});
	};
	$("#reset").on("click", reset);
	$("#random").on("click", random);
	$("#opacity").on("click", opacity);
	$("#trail").on("click", trail);
});
