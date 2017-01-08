var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++) {
	navbarItems[i].addEventListener('click', function(event) {
		deleteActiveClass();

		if (Modernizr.classList) {
			this.classList.add('active');
		} else {
			this.className += ' active';
		}

		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
		if (sectionToGo.length > 1) {
			event.preventDefault();
			var goTo = sectionToGo[sectionToGo.length - 1];
			getElementByIdAndScroll(goTo);
		}
	});
}

function getElementByIdAndScroll(name) {
	var element;
	if (name == '') {
		element = document.getElementsByClassName('header')[0];
	} else {
		element = document.getElementById(name);
	}

	scrollToElement(element);
}

function scrollToElement(element) {
	var jump = parseInt(element.getBoundingClientRect().top * 0.3);
	document.body.scrollTop += jump;

	if (!element.lastJump || element.lastJump > Math.abs(jump)) {
		element.lastJump = Math.abs(jump);

		setTimeout(function() {
			scrollToElement(element);
		}, "60");
	} else {
		element.lastJump = null;
	}
}

function deleteActiveClass() {
	if (Modernizr.classList) {
		document.getElementsByClassName('navbar-item active')[0].classList.remove('active');
	} else {
		document.getElementsByClassName('navbar-item active')[0].className = 'navbar-item';
	}
}

var cumulativeOffset = function(element) {
	var top = 0;
	do {
		top += element.offsetTop || 0;
		element = element.offsetParent;
	} while (element);

	return top;
};

var offsetQuienSoy = cumulativeOffset(document.getElementById('quien-soy')) - 59;
var offsetEstudios= cumulativeOffset(document.getElementById('estudios')) - 59;
var offsetExperiencia = cumulativeOffset(document.getElementById('experiencia')) - 59;
var offsetSobremi = cumulativeOffset(document.getElementById('sobremi')) - 59;


window.addEventListener('scroll', changeMenuStyle);

function changeMenuStyle(event) {
	var previous;

	if (window.pageYOffset >= 0 && window.pageYOffset < offsetQuienSoy) {
		if (!previous) {
			previous = 1;
		} else if (previous == 1) {
			return false;
		}

		deleteActiveClass();

		if (Modernizr.classList) {
			document.querySelector('a[href="#"]').parentNode.classList.add("active");
		} else {
			document.querySelector('a[href="#"]').parentNode.className += " active";
		}
	} else if (window.pageYOffset >= offsetQuienSoy && window.pageYOffset < offsetEstudios) {
		if (!previous) {
			previous = 2;
		} else if (previous == 2) {
			return false;
		}

		deleteActiveClass();

		if (Modernizr.classList) {
			document.querySelector('a[href$="quien-soy"]').parentNode.classList.add("active");
		} else {
			document.querySelector('a[href$="quien-soy"]').parentNode.className += " active";
		}
	} else if (window.pageYOffset >= offsetEstudios && window.pageYOffset < offsetExperiencia) {
		if (!previous) {
			previous = 3;
		} else if (previous == 3) {
			return false;
		}

		deleteActiveClass();

		if (Modernizr.classList) {
			document.querySelector('a[href$="estudios"]').parentNode.classList.add("active");
		} else {
			document.querySelector('a[href$="estudios"]').parentNode.className += " active";
		}
	} else if (window.pageYOffset >= offsetExperiencia && window.pageYOffset < offsetSobremi) {
		if (!previous) {
			previous = 4;
		} else if (previous == 4) {
			return false;
		}

		deleteActiveClass();

		if (Modernizr.classList) {
			document.querySelector('a[href$="experiencia"]').parentNode.classList.add("active");
		} else {
			document.querySelector('a[href$="experiencia"]').parentNode.className += " active";
		}
	} else if (window.pageYOffset >= offsetSobremi) {
		if (!previous) {
			previous = 5;
		} else if (previous == 5) {
			return false;
		}

		deleteActiveClass();

		if (Modernizr.classList) {
			document.querySelector('a[href$="sobremi"]').parentNode.classList.add("active");
		} else {
			document.querySelector('a[href$="sobremi"]').parentNode.className += " active";
		}
	}
}