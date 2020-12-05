


//============================JAVASCRIPT FOR INDEX.HTML===========================================


function goHome(){
	window.location.href="./index.html"
}

// BEGINNING OF HOME LANDING IMAGE CAROUSEL CONTROLLER ==========================================>

var counter = 0
document.getElementById('landing-image').src = `./img/landing/landing_0${counter + 1}.jpg`
// function called by clicking the right arrow key
function arrowRight(){
	if(counter == 3){
		counter = 1
		document.getElementById('landing-image').src = `./img/landing/landing_0${counter}.jpg`
	}else{
		document.getElementById('landing-image').src = `./img/landing/landing_0${counter + 1}.jpg`
		counter+=1
	}
}
// function called by clicking the left arrow key
function arrowLeft(){
	if(counter == 1){
		counter = 3
		document.getElementById('landing-image').src = `./img/landing/landing_0${counter}.jpg`
	}else{
		document.getElementById('landing-image').src = `./img/landing/landing_0${counter - 1}.jpg`
		counter-=1
	}
}
// autoplay function that loops the images in the carousel
let j = 0
function autoPlay(){
	arrowRight()
	if(j<2){
		j++
	}else{
		j=0
	}
	setTimeout("autoPlay()",7000)
}
autoPlay()

// displays a landing image without playing the carousel above
// document.getElementById('landing-image').src = `./img/landing/landing_01.jpg`

// END OF HOME LANDING IMAGE CAROUSEL CONTROLLER================================================>

// controls the header's nav button in showing and hiding menu on small screens
let menuOpen = false;
document.getElementById('nav-button').onclick = function(){
	if(menuOpen == false){
		document.getElementById('nav-list').style.display = 'block'
		document.getElementById('nav-icon').className = 'fas fa-times fa-3x'
		menuOpen = true;
	}else{
		document.getElementById('nav-list').style.display = 'none'
		document.getElementById('nav-icon').className = 'fas fa-bars fa-3x'
		menuOpen = false;
	}
}

//displays the landing arrow buttons on hover
function mouseEnter(){
	document.getElementById('arrow-left').style.display = 'block'
	document.getElementById('arrow-right').style.display = 'block'
}

function mouseLeave(){
	document.getElementById('arrow-left').style.display = 'none'
	document.getElementById('arrow-right').style.display = 'none'
}

//------------------scroll to top button----------START--------------------------
const backToTop = document.getElementById('button-scroll-to-top')

//controls when the button is hidden or shon
window.addEventListener('scroll', buttonShowHide)
function buttonShowHide(){
	//value of 300 is in pixels
	if(window.pageYOffset > 300){
		//shows the button when user scrolls down beyond 300px
		backToTop.style.display = 'block'
	}else{
		//hides button when user is not scrolled down beyond 300px
		backToTop.style.display = 'none'
	}
}

//controls the scroll to top function
backToTop.addEventListener('click', function(){
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	})
})
//------------------scroll to top button----------END----------------------------



