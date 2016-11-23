
var pseudo = document.getElementById('pseudo')
var h1 = document.getElementById('h1')

function affichage(){
	var res = pseudo.value
	console.log(res)
	res.style.color = 'red'
	h1.textContent = res
}

pseudo.addEventListener('keyup',affichage)


$(function(){
/*
$('#pseudo').on('keyup',function(){
	$('#h1').text($('#pseudo').val()).css('color','red')
})
*/
/*
-1 sur tous les "a" qui commencent par href ="#"
-2 au click, on récupere la valeur 
   de l'attribut correspondant dans une variable
-3 offset Top pour connaitre la distance dans une variable
   entre l'ancre et la cible
-4 sur le body, on anime avec un scrollTop par rapport 
   à cet attribut
5- on bloque le comportement par défaut
   de l'ancre (return false si ca ne fonctionne pas)
   afin que l'animation fonctionne correctement' 
*/

$('a[href^="#"]').on('click',function(){
	var attribut = $(this).attr('href')
	var offset = $(attribut).offset().top
	$('h1').animate({scrollTop:offset},3000)
})




	
}) // Fermeture DOM























