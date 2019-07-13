var load_email = function () {
	var arr = [99, 111, 110, 116, 97, 99, 116, 64, 110, 97, 116, 104, 97, 110, 98, 101, 114, 114, 121, 104, 105, 108, 108, 46, 111, 114, 103];
    var em = "";
    var arr_length = arr.length;
	var i;
	
    for (i=0;i<arr_length;i++) em+=String.fromCharCode(arr[i]);

    $("#email").html(em);
    $("#email").attr("href", "mailto:"+em);
    $("#email2").html(em);
    $("#email2").attr("href", "mailto:"+em);
};

$(function() {
	load_email();
});
