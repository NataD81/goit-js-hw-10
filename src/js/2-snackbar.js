
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');


function createNotificationPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = form.querySelector('input[name="delay"]');
  const stateInput = form.querySelector('input[name="state"]:checked');

  const delay = parseInt(delayInput.value);
  const state = stateInput.value;

  const notificationPromise = createNotificationPromise(delay, state);

  notificationPromise.then(
    delay => {
      iziToast.success({
        title: 'Fulfilled promise',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    },

    delay => {
      iziToast.error({
        title: 'Rejected promise',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    }
  );
});

