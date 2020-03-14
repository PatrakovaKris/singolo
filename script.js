window.onload = function(){
    console.log('yeeess))')
    addNavClickHandler();
    addTagsClickHandler();
}

const addNavClickHandler = () =>{

    let menu= document.getElementById('header-nav');
    menu.addEventListener('click', (event)=>{
        menu.querySelectorAll('a').forEach( el=> el.classList.remove('active'));
        let clickedTag = event.target;
        activeClikedTag(clickedTag);
        event.preventDefault();
        addScroll(clickedTag);
    });
}

const addScroll = (clickedTag) =>{
    let link = document.querySelector(clickedTag.getAttribute('href'));
    link.scrollIntoView( {behavior: "smooth"});
}

const activeClikedTag = (clickedTag) =>{
    clickedTag.classList.add('active');
}

// Portfolio: выбор тегов
const addTagsClickHandler = () =>{
    let tags = document.getElementById('tags');
    tags.addEventListener('click', (event)=>{
        tags.querySelectorAll('.btn-nav').forEach( el=> el.classList.remove('active'));
        let clickedTag = event.target;
        activeClikedTag(clickedTag);
        (event.target.value ==='All') ? showAllImage(): filterImages();
    });
}

function showAllImage(){
    let images = document.querySelectorAll('.image');
    images.forEach((image,i)=>{
        image.classList.remove('image-hidden');
    })
}

function filterImages(){
    let images = document.querySelectorAll('.image');
    let random=randomInteger(4,7);
    images.forEach((image,i)=>{
        image.classList.remove('image-hidden');
        if(i%random === 0){
            console.log(i, random, i%random);
            image.classList.add('image-hidden');
        }
    })
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}
