function validateForm(){
	
	var valid=true;
	/* get all input[type="text"] fields */
	var inputs=document.querySelectorAll('input[type="text"]');
	/* loop over them */
	for(var i = 0; i<inputs.length; i++){
		/* if field is invalid (==empty) */
		if(!inputs[i].checkValidity()){	
			/* make border of field red */
			inputs[i].classList.add("error");
			/* change valid to false */
			valid=false;
		} 	    
	}
	/* if valid is false */
	if(!valid){
		/* make error block visible */
		document.getElementById("form-error").style.display="block";
		/* return false */
		return valid;
	}	
}