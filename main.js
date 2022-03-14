// VARIABLES

let argumentsList = document.querySelector('#arguments');
let firstListItem = argumentsList.children[0];
let newImage = document.createElement('img');
newImage.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Atla9ObOAjRREQQOPTBgrgHaGJ%26pid%3DApi&f=1';
let image1 = document.querySelector('#image-1');
let thing1 = document.querySelector('.numbered-item')
// let returnDomElement = '';


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTIONS

function lineThrough(){
    firstListItem.style.textDecoration = 'line-through'
}

function setImage(domId, url){
    let image = document.querySelector(domId);
    image.src = url;
}

function removeListItem(){
    for (let i = 0; i < argumentsList.childElementCount; i++){
        if (argumentsList.children[i] !== null){
            argumentsList.children[i].remove();
            break;
        }
    }
}

function changeFontSizeById(str1, str2){
    let element = document.querySelector(str2);
    element.style.fontSize = str1;
}

function appendToArguments(domEl){
    let newItem = document.createElement('li');
    newItem = domEl;
    argumentsList.appendChild(newItem);
}

function modImageTo30(element){
    element.style.height = '30px';
}

function makeClassInvisible(element){
    element.className = 'invisible';
}

function newListItem(str){
    let newListItem = document.createElement('li');
    newListItem.innerText = `${str}`;
    return newListItem;
    
}

function newHeaderSizeAndText(size, text){
    let newHeader = document.createElement(`h${size}`);
    newHeader.innerText = text;
    return newHeader;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DO STUFF

lineThrough();

setImage('#image-1','https://resize.hswstatic.com/w_1024/gif/t-rex.jpg');
setImage('#image-2', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cU0enul6AJOgdCu4y6z6bgHaEK%26pid%3DApi&f=1');
setImage('#image-3', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.NJjes-QGd0qv7F7WbAxUWgHaDt%26pid%3DApi&f=1');

removeListItem();
removeListItem();

changeFontSizeById('85px', '#heading');

appendToArguments(newImage);

modImageTo30(image1);

makeClassInvisible(thing1);

let returnDomElement = newListItem('Corey is Testing it!');

appendToArguments(returnDomElement);

let returnNewHeader = newHeaderSizeAndText('1', "This is Corey's New Header");

appendToArguments(returnNewHeader);


