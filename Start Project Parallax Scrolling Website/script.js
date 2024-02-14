let text = document.getElementById('text');
let tree = document.getElementById('tree');
let tree2 = document.getElementById('tree 2');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    tree.style.left = value * -1.5 + 'px';
    tree2.style.right = value * 1.5 + 'px';
})

