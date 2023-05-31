// divisible by 11 from array
	
	let a=[23,22,45,66,88,10];
	document.write("The value store in array are:");
document.write("<br>");
for (i=0;i<a.length;i++){
	document.write(a[i]+" ");
}
document.write("<br>");
	document.write(" Divisible by 11 from array: ");
	for(i=0;i<a.length;i++){
		if(a[i]%11==0){
			document.write(a[i]+" ");
		}
	}
	