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
    });
}
