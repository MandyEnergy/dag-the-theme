const navToggle = document.querySelector('#meny-toggle');
const navContainer = document.querySelector('.shopify-section-group-header-group');
const navList = document.querySelector('#main-navigation');
const body = document.body;

const navLinks = document.querySelectorAll('.main-navigation-link');
const dropdowns = document.querySelectorAll('.main-navigation .dropdown');
const overlay = document.getElementById('overlay');

// Toggle menu
navToggle.addEventListener('click', function () {

    if (navList.hasAttribute('hidden')) {
      this.setAttribute('aria-expanded', 'true');
      navContainer.classList.remove('sticky');
      navContainer.classList.add('fixed', 'bottom-0');
      navList.removeAttribute('hidden');
      body.classList.add("overflow-y-hidden", "max-h-screen");
      for (var i = 0, len = navLinks.length; i < len; i++) {
        navLinks[i].setAttribute('tabindex', '1');
      }
    } else {
        navList.setAttribute('hidden', 'true');
        navContainer.classList.remove('fixed', 'bottom-0');
        navContainer.classList.add('sticky');
        this.setAttribute('aria-expanded', 'false');
        body.classList.remove("overflow-y-hidden", "max-h-screen");
        for (var i = 0, len = navLinks.length; i < len; i++) {
          navLinks[i].setAttribute('tabindex', '-1');
        }
    }

});

function closeOpenNavs() {
	for (var i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (!openDropdown.classList.contains('hidden')) {
		  openDropdown.classList.add('hidden');
      openDropdown.previousElementSibling.setAttribute('aria-expanded', 'false');
      openDropdown.previousElementSibling.lastElementChild.classList.remove('rotate-180');
      overlay.classList.add('hidden');
		}
	}
}

document.addEventListener('click', function (event) {
	//if not a dropdown / click outside close open navs
  if (!navList.contains(event.target)){
    closeOpenNavs();
	} 
	//if you click the trigger of an open menu, close it
	else if (event.target.closest('.main-navigation-link') && !event.target.nextElementSibling.classList.contains('hidden')){
    event.preventDefault();
    event.target.nextElementSibling.classList.add('hidden');
    event.target.setAttribute('aria-expanded', 'false');
    event.target.lastElementChild.classList.remove('rotate-180');
    overlay.classList.add('hidden');
	}
	//if a drop target, close any open, then open this one
	else if (event.target.closest('.main-navigation-link') && event.target.nextElementSibling.classList.contains('hidden')){
    event.preventDefault();
    closeOpenNavs();
		event.target.nextElementSibling.classList.remove('hidden');
    event.target.setAttribute('aria-expanded', 'true');
    event.target.lastElementChild.classList.add('rotate-180');
    overlay.classList.remove('hidden');
	}
	
}, false);

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeOpenNavs();
  }
})