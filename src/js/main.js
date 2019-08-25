"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const buttonPlus = document.querySelector('.button__plus--js');
const buttonMinus = document.querySelector('.button__minus--js');
const glassValue = document.querySelector('.glass__counter--js')
const key = new Date().toISOString().slice(0, 10);

if (localStorage.getItem(key)) {
  glassValue.innerHTML = localStorage.getItem(key);
} else {
  glassValue.innerHTML = '0';
}

buttonPlus.addEventListener('click', (e) => {
  localStorage.setItem(key, parseInt(glassValue.innerHTML, 10) + 1);
  glassValue.innerHTML = localStorage.getItem(key);
})

buttonMinus.addEventListener('click', (e) => {
  if (localStorage.getItem(key) > 0) {
    localStorage.setItem(key, parseInt(glassValue.innerHTML, 10) - 1);
    glassValue.innerHTML = localStorage.getItem(key);
  } else {
    return;
  }
})

