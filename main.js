
//chnage navbar sytem

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100)
})

//showhide faq answer
const faqs=document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        //change icon 

        const icon=faq.querySelector('.faq-icon i');

        if(icon.className=='fas fa-plus'){
            icon.className='fas fa-minus'
        }
        else{
            icon.className='fas fa-plus'
        }
    })
})
/*-------------- article slider ------------------*/

const  menu=document.querySelector('.nav-menu');
const   menuBtn=document.querySelector('#open-menu-btn');
const  closeBtn=document.querySelector('#close-menu-btn');


menuBtn.addEventListener('click',()=>{
    menu.style.display='flex';
    closeBtn.style.display='inline-block'
    menuBtn.style.display='none'
})

//close nav bar

const closeNav=()=>{
    menu.style.display='none';
    closeBtn.style.display='none'
    menuBtn.style.display='inline-block'
}
 closeBtn.addEventListener('click',closeNav)