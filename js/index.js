// Your code goes here

/*
    **mouseover
    keydown
    *wheel
    **drag / drop
    **load
    **focus
    *resize
    *scroll
    *select
    **dblclick

    * = implemented listener and action
    ** = finished with task
*/

let navTag = document.querySelector('nav');

// Task 2 - Prevent page refresh on click of nav elements
navTag.addEventListener('click', (event) => {
    if (event.target.tagName == 'A'){
        event.preventDefault();
    }
});
/********************* Task 2 End   ***************/

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
    alert('Insert autoplaying video here');
});

// select - select event only works in textboxes

// create and insert textarea
let textAreaElement = document.createElement('textarea');
textAreaElement.style.width = '60%';
textAreaElement.style.height = '100px';
textAreaElement.style.display = 'block';
textAreaElement.style.margin = 'auto';
textAreaElement.value = 'Select some text in this box!';
let selectIntro = document.querySelector('.intro');
selectIntro.appendChild(textAreaElement);

// Text selection
function textSelectionAction (event) { 
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(`you selected: ${selection}`);
}

let selectTextarea = document.querySelector('textarea');
selectTextarea.addEventListener('select', textSelectionAction);

// focus
selectTextarea.addEventListener('focus', (event) => {
    event.target.style.border = '3px dashed';
});

// resize 
window.addEventListener('resize', (event) => {
    console.log('resizing');
});


// scolling
let windowScroll = window.addEventListener('scroll', (event) => {
    console.log(`scroll: scrolling!`);
});

let windowWheel = window.addEventListener('wheel', (event) => {
    console.log(`wheel: scrolling!`);
    event.stopPropagation;
});

// Drag and drop
let dragItem;

// make only images draggable
let imgElements = document.querySelectorAll('img');
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


