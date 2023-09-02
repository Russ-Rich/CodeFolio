// Element toggle function
const elementToggleFunc = function (elem) {
	elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
	elementToggleFunc(sidebar);
});

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
	modalContainer.classList.toggle("active");
	overlay.classList.toggle("active");
};

// Add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
	testimonialsItem[i].addEventListener("click", function () {
		modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
		modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
		modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
		modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

		testimonialsModalFunc();
	});
}

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");

select.addEventListener("click", function () {
	elementToggleFunc(this);
});

// Add event in all select items
for (let i = 0; i < selectItems.length; i++) {
	selectItems[i].addEventListener("click", function () {
		let selectedValue = this.innerText.toLowerCase();
		selectValue.innerText = this.innerText;
		elementToggleFunc(select);
	});
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
	navigationLinks[i].addEventListener("click", function () {
		for (let j = 0; j < pages.length; j++) {
			const pageId = pages[j].dataset.page.toLowerCase();
			const navId = this.innerHTML.toLowerCase();

			if (navId === pageId) {
				pages[j].classList.add("active");
				navigationLinks[i].classList.add("active");
				window.scrollTo(0, 0);
			} else {
				pages[j].classList.remove("active");
				navigationLinks[j].classList.remove("active");
			}
		}
	});
}
