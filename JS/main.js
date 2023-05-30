const btn = document.getElementById('btn-1');
function addParagraph(){
    const paragraph = document.createElement('p');
    paragraph.textContent = 'A new element has been created';
    document.body.appendChild(paragraph);
}
//using an eventlistener to call the function
btn.onclick = addParagraph;