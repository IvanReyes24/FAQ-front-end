let faq_btn = document.querySelectorAll(".faq-buttons");
let question_text = document.querySelectorAll(".question-text");
let minus_btn = document.querySelectorAll(".minus-icon");
let add_btn = document.querySelectorAll(".add-icon")

faq_btn.forEach((btn, index) =>{
	btn.addEventListener("click",()=>{
		question_text[index].classList.toggle("showText");
		minus_btn[index].classList.toggle("showbtn");
		add_btn[index].classList.toggle("hidebtn")
	})
})


