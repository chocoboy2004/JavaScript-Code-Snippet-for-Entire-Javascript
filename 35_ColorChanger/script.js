const buttonContainer = document.querySelector('.container');
const body = document.querySelector('body');

buttonContainer.addEventListener('click', function(e){
    if (e.target.id === 'aqua') {
        body.style.backgroundColor = e.target.id
    } else if (e.target.id === 'chocolate') {
        body.style.backgroundColor = e.target.id
    } else if (e.target.id === 'crimson') {
        body.style.backgroundColor = e.target.id
    } else if (e.target.id === 'cornflowerblue') {
        body.style.backgroundColor = e.target.id
    }
})
