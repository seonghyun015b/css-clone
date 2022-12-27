const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');

btn1.addEventListener('click', () => {
  let result = document.createElement('h3');
  result.textContent = 'You selected 1 out of 5';
  send();
});
btn2.addEventListener('click', () => {
  let result = document.createElement('h3');
  result.textContent = 'You selected 2 out of 5';
  send();
});
btn3.addEventListener('click', () => {
  let result = document.createElement('h3');
  result.textContent = 'You selected 3 out of 5';
  send();
});
btn4.addEventListener('click', () => {
  let result = document.createElement('h3');
  result.textContent = 'You selected 4 out of 5';
  send();
});
btn5.addEventListener('click', () => {
  let result = document.createElement('h3');
  result.textContent = 'You selected 5 out of 5';
  send();
});

const send = function () {
  const btn = document.querySelector('.sub-button');
  btn.addEventListener('click', () => {
    let card_img = document.querySelector('.card-img');
    card_img.style.width = '140px';
    card_img.style.height = '130px';
    card_img.style.borderRadius = '0px';
    card_img.style.backgroundImage = 'url(./images/illustration-thank-you.svg)';
    card_img.style.backgroundSize = 'contain';
    card_img.style.backgroundPosition = 'center center';
    card_img.style.textAlign = 'center';
    card_img.style.backgroundColor = 'hsl(213, 19%, 18%, 0)';
    card_img.style.borderRadius = 'none';
    card_img.style.border = 'none';
    card_img.style.marginLeft = '75px';
    card_img.style.marginBottom = '100px';

    let card_title = document.querySelector('.card-title');
    card_title.textContent = 'Thank you';
    card_title.width = '50px';
    card_title.height = '40px';
    card_title.style.fontSize = '20px';
    card_title.style.textAlign = 'center';
    card_title.style.color = 'white';
    card_title.style.marginBottom = '20px';
    card_title.style.marginTop = '220px';

    let card_desc = document.querySelector('.card-desc');
    card_desc.innerHTML =
      'We appreciate you taking the time to give a <br> rating. if you ever need more support, don`t <br> hesitate to get in touch! ';
    card_desc.style.color = 'hsl(217, 12%, 63%)';
    card_desc.style.textAlign = 'center';
    card_desc.style.fontSize = '15px';

    let card_but = document.querySelector('.card-button');
    card_but.remove();

    let sbmBtn = document.querySelector('.submit-button');
    sbmBtn.remove();
  });
};

// const btn = document.querySelector('.sub-button');
// btn.addEventListener('click', () => {
//   let card_img = document.querySelector('.card-img');
//   card_img.style.width = '100px';
//   card_img.style.height = '100px';
//   card_img.style.borderRadius = '0px';
//   card_img.style.backgroundImage = 'url(./images/illustration-thank-you.svg)';
//   card_img.style.backgroundSize = '100px';
//   card_img.style.textAlign = 'center';
//   card_img.style.backgroundColor = 'hsl(213, 19%, 18%, 0.4)';

//   let card_title = document.querySelector('.card-title');
//   card_title.textContent = 'Thank you';
//   card_title.width = '50px';
//   card_title.height = '40px';
//   card_title.style.textAlign = 'center';
//   card_title.style.color = 'white';

//   let card_desc = document.querySelector('.card-desc');
//   card_desc.innerHTML =
//     'We appreciate you taking the time to give a <br> rating. if you ever need more support, don`t <br> hesitate to get in touch! ';
//   card_desc.style.color = 'hsl(213, 19%, 18%, 1);';

//   let card_but = document.querySelector('.card-button');
//   card_but.remove();

//   let sbmBtn = document.querySelector('.submit-button');
//   sbmBtn.remove();
// });

// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// let btn3 = document.querySelector('.btn3');
// let btn4 = document.querySelector('.btn4');
// let btn5 = document.querySelector('.btn5');
// let card_but = document.querySelector('.card-button');
// card_but.style.display = 'none';

// let sbmBtn = document.querySelector('submit-button');
// sbmBtn.style.display = 'none';

// let sub_button = document.querySelector('sub-button');
// sub_button.style.display = 'none'
// btn1.remove();
// btn2.style.display = 'none';
// btn3.style.display = 'none';
// btn4.style.display = 'none';
// btn5.style.display = 'none';
