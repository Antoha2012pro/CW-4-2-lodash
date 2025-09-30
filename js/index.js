// debounce = відбувається коли прибралась функція
// throttle = відбувається завжди



// const textEl = document.querySelector('.text');

// let count = 0;

// window.addEventListener('mousemove', _.throttle(
//     (event) => {
//         count += 1;
//         textEl.textContent = count;
//         console.log(event.clientX);
//         console.log(event.clientY);
//     }, 300));


// const inputEl = document.querySelector('.input');

// //                              обов'язково             певний час
// //                                \|        колбек функція  \|
// inputEl.addEventListener('input', _.throttle(onInputValue, 300));

// function onInputValue(event) {
//     console.log(event.target.value);
// }


// const inputEl = document.querySelector('.input');

// inputEl.addEventListener('input', _.debounce(onInputValue, 300));

// function onInputValue(event) {
//     console.log(event.target.value);
// }




// const textEl = document.querySelector('.text');

// let count = 0;

// window.addEventListener('mousemove', _.debounce(
//     (event) => {
//         count += 1;
//         textEl.textContent = count;
//         console.log(event.clientX);
//         console.log(event.clientY);
//     }, 1000));




const boxEl = document.querySelector('.box');


// звичайний приклад
document.addEventListener('mousemove', onBoxMove);

// throttle приклад
// document.addEventListener('mousemove', _.throttle(onBoxMove, 100));

// debounce приклад
// document.addEventListener('mousemove',  _.debounce(onBoxMove, 100));


function onBoxMove(event) {
    boxEl.style.top = event.clientY + 'px';
    boxEl.style.left = event.clientX + 'px';
}