import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const refs = {
  formRef: document.querySelector('.form'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

const onFormSubmit = event => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  let delay = +formElements.delay.value;
  const step = +formElements.step.value;
  const amount = +formElements.amount.value;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(result => Notify.success(result))
      .catch(error => Notify.failure(error));
    delay += step;
  }
};

refs.formRef.addEventListener('submit', onFormSubmit);
