
var button=document.getElementById('counter')
var counter=0;
button.onclick= function () {
	

	// body...
	counter=counter+1;
	var span=document.getElementById('count')
	span.innerHTML=counter.toString();
};