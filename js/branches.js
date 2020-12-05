


//============================JAVASCRIPT FOR BRANCHES.HTML===========================================

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



// =====================BEGINNING OF TAB AND PANEL CONTROLS===================

// controls which panel to display (panels show branch categories

var allTabs = document.querySelectorAll('.tab')
var allPanels = document.querySelectorAll('.tab-panel')
function openTab(index){
	//resets text and background color of tab buttons to default
	allTabs.forEach(function(node){
		node.style.background = ''
		node.style.color = ''
	})
	//changes the text and background color of the active tab button
	allTabs[index].style.background = '#660000'
	allTabs[index].style.color = '#fff'

	//hides all the tab-panels
	allPanels.forEach(function(node){
		node.style.display = 'none';
	})
	//displays the selected tab panel
	allPanels[index].style.display = 'block'
}

//displays the first tab-panel by default
openTab(0)

// =======================END OF TAB AND PANEL CONTROLS=====================




