$(document).ready(function() {
	cover();
	for (var i = 0; i < 255; i++) {
		var clone = $("#grid").clone();
		clone.appendTo($("#container"));
	};
	$("#container #grid").hover(function() {
		$(this).css("background-color", "blue");
	});
	var num, width, qnty;
	function cover() {
		$("#container").append("<div></div>");
		$("#container div").attr({"id": "grid", "class": "grid"});
	};
	function clear() {
		$("#container #grid").removeAttr("class");
		$("#container #grid").attr("class", "grid");
		$("#container #grid").css({"background-color": "", "opacity": "1"});
	};
	function default1() {
		clear();
		clear();
		$("#container #grid").hover(function() {
			$(this).css("background-color", "blue");
		});
	};
	function set() {
		$("#container #grid").removeAttr("style");
		$(".grid").remove();
		cover();
		num = prompt("How many squares per side should the grid be?");
		width = 512/num;
		width = width.toString();
		$(".grid").css({"width": width, "height": width});
		qnty = num*num;
		for (var i = 0; i < qnty; i++) {
			var quantity = $("#grid").clone();
			quantity.appendTo($("#container"));
		};
		$("#container #grid").removeAttr("class");
		$("#container #grid").css("opacity", "1");
		$("#container #grid").hover(function() {
			$(this).css("background-color", "blue");
		});
	};
	function random() {
		clear();
		$("#container #grid").removeAttr("class");
		function get_random_color2() {
    		var r = function () { return Math.floor(Math.random()*256) };
    		return "rgb(" + r() + "," + r() + "," + r() + ")";
		};
		$("#container #grid").hover(function() {
			var color = get_random_color2();
			$(this).css("background-color", color);
		});
	};
	function opacity() {
		clear();
		$("#container #grid").removeAttr("class");
		$("#container #grid").attr("class", "opacity");
		if ($("#container #grid").hasClass("opacity")) {
			$("#container").on("mouseenter", ".opacity", function holala3(){
				switch ($(this).css("opacity")) {
					case "0.2":
						$(this).css("opacity", "0.4");
						break;
					case "0.4":
						$(this).css("opacity", "0.6");
						break;
					case "0.6":
						$(this).css("opacity", "0.8");
						break;
					case "0.8":
						$(this).css("opacity", "1");
						break;
					case "1":
						$(this).css("opacity", "0.2");
						break;
				};
			});
		}
		else {
			$("#container").off("mouseenter", ".opacity", holala3);
		};
	};
	function trail() {
		clear();
		$("#container #grid").attr("class", "trail");
		if ($("#container #grid").hasClass("trail")) {
			$("#container").on("mouseenter", ".trail", function holala() {
				$(this).css("opacity", "1");
			});
			$("#container").on("mouseleave", ".trail", function holala2() {
				$(this).animate({"opacity": "0"}, "fast");
			});
		} 
		else {
			$("#container").off("mouseenter", ".trail", holala);
	
			$("#container").off("mouseleave", ".trail", holala2);
		};
	};
	$("#default").on("click", default1);
	$("#opacity").on("click", opacity);
	$("#trail").on("click", trail);
	$("#random").on("click", random);
	$("#reset").on("click", set);
});
