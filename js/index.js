// Your code goes here

/*
    **mouseover
    **keydown
    *wheel
    **drag / drop
    **load
    **focus
    **resize
    **scroll
    **select
    **dblclick

    * = implemented listener and action
    ** = finished with task
*/

// Task 2 - Prevent page refresh on click of nav elements
let navTag = document.querySelector('nav');
navTag.addEventListener('click', (event) => {
    if (event.target.tagName == 'A'){
        event.preventDefault();
    }
});
/********************* Task 2 End   ***************/

/*********** Query and Element Selectors **********/

let selectIntro = document.querySelector('.intro');
let imgElements = document.querySelectorAll('img');
let pTags = document.querySelectorAll('p');
let bodySelector = document.querySelector('body');

let lastScrollPosY = 0;

navTag.addEventListener('mouseover', (event) => {
    if (event.target.tagName == 'A'){
        event.target.style.textDecoration = 'underline';
        console.log(event.type);
    }
});

navTag.addEventListener('mouseout', (event) => {
    if (event.target.tagName == 'A'){
        event.target.style.textDecoration = 'none';
    }
});

// dblclick - Make doubleclick do what click should do
navTag.addEventListener('dblclick', (event) => {
    if (event.target.tagName == 'A'){
        let fakeClick = new MouseEvent('click',{
            bubbles: true,
            cancelable: false,
            view: window
        });
        event.target.dispatchEvent(fakeClick);
    }
});

// load - annoying alert
let windowLoad = window.addEventListener('load', (event) => {
    lastScrollPosY = window.scrollY;
    alert('Insert autoplaying video here');
});

// select - select event only works in textboxes

// create and insert textarea
let textAreaElement = document.createElement('textarea');
textAreaElement.style.width = '60%';
textAreaElement.style.height = '100px';
textAreaElement.style.display = 'block';
textAreaElement.style.margin = 'auto';
textAreaElement.style.padding = '8px';
textAreaElement.style.fontSize = '3rem';
textAreaElement.value = 'Type some text in here! ;)';

selectIntro.appendChild(textAreaElement);

// Text selection
function textSelectionAction (event) { 
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(`you selected: ${selection}`);
    let selectH2Tags = document.querySelectorAll('h2');
    selectH2Tags.forEach((tag) => {
        tag.textContent = selection;
    });
}

let selectTextarea = document.querySelector('textarea');
selectTextarea.addEventListener('select', textSelectionAction);

// focus
selectTextarea.addEventListener('focus', (event) => {
    event.target.style.border = '3px dashed';
});

// resize 
let resizing = false;
window.addEventListener('resize', (event) => {
    resizing = true;
    bodySelector.style.backgroundColor = 'green';
});

// scolling

let prevYpos = window.scrollY;
window.addEventListener('scroll', (event) => {

    newYpos = window.scrollY;

    if(prevYpos - newYpos < 0){ // Scrolling up
        pTags.forEach((tag) => {
            tag.style.color = 'dodgerblue';
        })
    } else{     // Scrolling down
        pTags.forEach((tag) => {
            tag.style.color = 'unset'
        })
    }
    prevYpos = newYpos;
});

let windowWheel = window.addEventListener('wheel', (event) => {
    bodySelector.style.backgroundColor = 'slategrey';
        event.stopPropagation;
    
});

// Drag and drop
let dragItem;

// make only images draggable

imgElements.forEach((img) => {
    img.setAttribute('draggable', true);
});

// drag and drop events
document.addEventListener('drag', (event) => {

});

document.addEventListener('dragstart', (event) => {
    if(event.target.draggable === true) {
        dragItem = event.target;
    }
});

document.addEventListener('dragover', (event) => {
    event.preventDefault();
});

document.addEventListener('drop', (event) => {
    event.preventDefault();
    if (dragItem != undefined) dragItem.remove();    
});

// keydown - remove the letters typed into the textarea from the p tags of the website
function removeLetter(keyToRemove, str) {
    let reg = new RegExp(keyToRemove);
    return str.replace(reg,'');
    // console.log(`${event.key}`);
}

selectTextarea.addEventListener('keydown', (event) => {
    for (let i = 0; i < pTags.length; i++) {
        let replacement = removeLetter(event.key,pTags[i].textContent);
        pTags[i].textContent = replacement;
    }
});




