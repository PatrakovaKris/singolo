window.onload = function(){
    addNavClickHandler();
    addTagsClickHandler();
    addImagesClickHandler();
    openModalBlock();

    Slider();
}

const activeClikedTag = (clickedTag) =>{
    clickedTag.classList.add('active');
}
function removeClikedElem(parentBlock, classchildBlock , removeClass){
    parentBlock.querySelectorAll(classchildBlock).forEach( el=> el.classList.remove(removeClass));
}

// Header: выбор тега
const addNavClickHandler = () =>{
    let menu= document.getElementById('header-nav');
    menu.addEventListener('click', (event)=>{
        let clickedTag = event.target;
        removeClikedElem(menu, 'a' , 'active');
        activeClikedTag(clickedTag);
        event.preventDefault();
        addScroll(clickedTag);
    });
}

// Header: scroll for chosen block
const addScroll = (clickedTag) =>{
    let link = document.querySelector(clickedTag.getAttribute('href'));
    link.scrollIntoView( {behavior: "smooth"});
}

// Portfolio: выбор тегов
const addTagsClickHandler = () =>{
    let tags = document.getElementById('tags');
    let images = document.querySelectorAll('.image');
    let imagesList = document.getElementById('images-list');
    tags.addEventListener('click', (event)=>{
        let clickedTag = event.target;
        removeClikedElem(tags, '.btn-nav' , 'active');
        removeClikedElem(imagesList, '.image img' , 'active');
        activeClikedTag(clickedTag);
        shuffleImages(images);
    });
}

// Portfolio: выбор картинки
const addImagesClickHandler = () =>{
    let images = document.getElementById('images-list');
    images.addEventListener('click', (event)=>{
        let clickedTag = event.target;
        removeClikedElem(images, '.image img', 'active')
        activeClikedTag(clickedTag);
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

// Блок Get a Quote: modal window
const openModalBlock = () =>{
    let btn= document.getElementById('send');
    let close_btn = document.getElementById('ok');
    let form = document.getElementById("form");
    let subjectModal = document.getElementById("Subject");
    let descriptionModal = document.getElementById("Describe");

    btn.addEventListener('click', (event)=>{
        let subjectForm = document.getElementById("theme").value.toString();
        let descriptionForm = document.getElementById("description").value.toString();
        if (form.checkValidity()) {
            event.preventDefault();
            document.getElementById('modal').style.display = 'block';
            (subjectForm === "") ? subjectModal.innerHTML = "Без темы" : subjectModal.innerHTML = "Тема: " + subjectForm;
            (descriptionForm === "") ? descriptionModal.innerHTML = "Без описания" : descriptionModal.innerHTML = "Описание: " + descriptionForm;
        }
    });

    close_btn.addEventListener('click', (event)=>{
        document.getElementById('modal').style.display = 'none';
        form.reset();
    });

}


// Slider
const Slider = () =>{
    const sliderPrevBtn = document.querySelector(".slider-control_prev");
    const sliderNextBtn = document.querySelector(".slider-control_next");
    const slider = document.querySelector(".slider");
    const slides = slider.querySelectorAll(".slider-items");

    sliderPrevBtn.addEventListener("click", () => {
        let index = sliderReset() - 1;
        if(index < 0) index = slides.length - 1;
        slides[index].classList.add("slide--active");
        changeSlider(index);
    });

    sliderNextBtn.addEventListener("click", () => {
        let index = (sliderReset() + 1) % slides.length;
        slides[index].classList.add("slide--active");
        changeSlider(index);
    });

    function sliderReset() {
        let index = 0;
        slides.forEach((elem, i) => {
            if(elem.classList.contains("slide--active")) {
                index = i;
                elem.classList.remove("slide--active");
            }
        });

        return index;
    }
    function changeSlider(slideNumber) {
        slider.classList.toggle("slider-red", slideNumber === 0);
        slider.classList.toggle("slider-blue", slideNumber === 1);
    }

}
