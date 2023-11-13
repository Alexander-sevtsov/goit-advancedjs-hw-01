import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const feedbackKey = 'feedback-form-state';

// Функція для зберігання значень полів в локальному сховищі
function saveFormState() {
  const formState = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  localStorage.setItem(feedbackKey, JSON.stringify(formState));
}

// Функція для завантаження збережених значень полів і заповнення форми
function loadFormState() {
  const savedState = localStorage.getItem(feedbackKey);
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageTextarea.value = formState.message;
  }
}

// Відстежуємо подію input і зберігаємо стан поля в сховище зі затримкою
emailInput.addEventListener('input', throttle(saveFormState, 500));
messageTextarea.addEventListener('input', throttle(saveFormState, 500));

// Завантажуємо збережений стан форми під час завантаження сторінки
loadFormState();

// Обробляємо подію сабміту форми
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  // Виводимо в консоль об'єкт з полями email, message та їхніми поточними значеннями
  const feedbackData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(feedbackData);
  // Очищаємо локальне сховище та поля форми
  localStorage.removeItem(feedbackKey);
  emailInput.value = '';
  messageTextarea.value = '';
});
