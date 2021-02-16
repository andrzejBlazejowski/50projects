const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach(item =>{
    item.addEventListener('click', ()=>{
        item.parentNode.classList.toggle("active")
    })
});