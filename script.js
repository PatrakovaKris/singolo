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
    let images = document.querySelectorAll('.image');
    tags.addEventListener('click', (event)=>{
        tags.querySelectorAll('.btn-nav').forEach( el=> el.classList.remove('active'));
        let clickedTag = event.target;
        activeClikedTag(clickedTag);
        shuffleImages(images);
    });
}

// Portfolio: перемешивание картинок
const shuffleImages = (images) =>{
    for(let i = images.length - 1; i >= 1; --i) {
        const newPos = rand(0, i);
        changeNodes(images, i, newPos);
    }
}

function rand(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

function changeNodes(childs, a, b) {
    const parent = childs[a].parentNode;
    const replaced = parent.replaceChild(childs[b], childs[a]);
    parent.insertBefore(replaced, childs[b]);
}
