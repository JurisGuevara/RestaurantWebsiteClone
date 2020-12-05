


//=================JAVASCRIPT FOR COMMON PAGES ================================

function goHome(){
	window.location.href="../index.html"
}

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








