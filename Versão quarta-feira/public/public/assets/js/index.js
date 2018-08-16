var database = firebase.database();

$(document).ready(function() {

	$(".sign-up-button").click(function(event) {
		event.preventDefault();
	
		var email = $(".sign-up-email").val();
		var name = $(".sign-up-name").val();
		var password = $(".sign-up-password").val();

		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function(response){ // qdo criar o email e senha e der tudo certo, entrar aqui
		//database.ref("users/" + userId).set({
			//name: name,
				//email: email
		    //});
			window.location = "home.html?id=" + response.user.uid;//id é o id de cada usuario + de acordo com ouid dado pelo firebase ao fazer o cadastro
		})
		.catch(function(error) { // trecho copiado do site 
			var errorCode = error.code;
			var errorMessage = error.message;
			alert(errorCode, errorMessage); // pode-se usar isso para exibir uma msg de erro
		});
	}); //fim funcao clique de cadastro
	
	$(".sign-in-button").click(function(event) {
    	event.preventDefault();

     	var email = $(".sign-in-email").val();
		var name = $(".sign-in-name").val();
		var password = $(".sign-in-password").val();
		console.log(email,password);
		
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(function(response) {
			var userId = response.user.uid;

		    
			window.location = "home.html?userId=" + userId;
		})
     	.catch(function(error) {
        	var errorCode = error.code;
        	var errorMessage = error.message;
        	alert(errorCode, errorMessage);
     	});
   });
	
});