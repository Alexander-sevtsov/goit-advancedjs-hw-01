import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Vimeo(vimeoPlayer);

// Перевірка ініціалізації збереженого часу
const savedTime = localStorage.getItem('videoplayer-current-time');
savedTime && player.setCurrentTime(savedTime);

// Функція для оновлення часу відтворення
const updateTimeInLocalStorage = data => {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
};

player.on('timeupdate', throttle(updateTimeInLocalStorage, 1000));
