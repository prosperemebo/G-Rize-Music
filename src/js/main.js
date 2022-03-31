const url =
  'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UULbP6vrKzw_jzxbBLEOoiTg&key=AIzaSyDuX5wWBIqjCziTup0aGkfdSE6X0JLznrE&part=snippet&maxResults=50';
const desktopLibary = document.getElementById('video-libary-desc');
const mobileLibary = document.getElementById('video-libary-mob');
const popupContainer = document.getElementById('popup-contain');
const playBtnEl = document.getElementById('play-btn');
const prevBtnEl = document.getElementById('prev-btn');
const nextBtnEl = document.getElementById('next-btn');
const videoCover = document.getElementById('video-cover');
const videoLabel = document.getElementById('video-label');
const popup = document.getElementById('popup');

let currentVideo;
let prevId;
let map = [];

const renderVideo = (video) => {
  let deskMarkup = `
    <figure class="video" data-video-id="${video.id}">
        <img src="${video.image}" alt="${video.title}" draggable="false" />
        <figcaption>
          <p class="paragraph">VIEWING</p>
          <button class="play-btn">
            <i class="fas fa-play"></i>
          </button>
          <h2 class="heading-secondary">
            ${video.title}
          </h2>
        </figcaption>
      </figure>
    `;

  let mobMarkup = `
    <div class="swiper-slide">
        <figure class="video" data-video-id="${video.id}">
          <img src="${video.image}" alt="${video.image}" draggable="false" />
          <figcaption>
            <p class="paragraph">VIEWING</p>
            <h2 class="heading-secondary">
              ${video.title}
            </h2>
          </figcaption>
        </figure>
      </div>
    `;

  desktopLibary.insertAdjacentHTML('beforeend', deskMarkup);
  mobileLibary.insertAdjacentHTML('beforeend', mobMarkup);
};

const compileVideos = (data) => {
  data.forEach((video, index) => {
    let obj = {
      id: video.snippet.resourceId.videoId,
      image: video.snippet.thumbnails.high.url,
      title: video.snippet.title,
    };

    renderVideo(obj);

    if (index === 0) {
      currentVideo = obj;
      prevId = obj;
    }

    map.push(obj);
  });

  updatePage();
};

const updatePage = () => {
  videoCover.setAttribute('src', currentVideo.image);
  videoLabel.textContent = currentVideo.title;

  document.querySelectorAll(`[data-video-id="${prevId.id}"]`).forEach((el) => {
    el.classList.remove('video-viewing');
  });

  document
    .querySelectorAll(`[data-video-id="${currentVideo.id}"]`)
    .forEach((el) => {
      el.classList.add('video-viewing');
    });
};

const paginateVideoPrev = () => {
  let videoIndex = map.indexOf(currentVideo);
  prevId = currentVideo;

  if (videoIndex > 0) {
    videoIndex--;
  } else if (videoIndex === 0) {
    videoIndex = map.length - 1;
  }

  currentVideo = map[videoIndex];

  updatePage();
};

const paginateVideoNext = () => {
  let videoIndex = map.indexOf(currentVideo);
  prevId = currentVideo;

  if (videoIndex < map.length - 1) {
    videoIndex++;
  } else if (videoIndex === map.length - 1) {
    videoIndex = 0;
  }

  currentVideo = map[videoIndex];

  updatePage();
};

const playVideo = () => {
  let markup = `
    <iframe
        class="youtube-video"
        src="https://www.youtube.com/embed/${currentVideo.id}?&color=white&modestbranding=1&playsinline=1&rel=0&autoplay=1"
        title="${currentVideo.title}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
  `;

  popupContainer.insertAdjacentHTML('beforeend', markup);

  window.location.hash = currentVideo.id;

  popup.classList.toggle('open');
};

const openVideo = (id) => {
  let data = map.find((o) => o.id === id);

  currentVideo = data;

  updatePage();
};

playBtnEl.addEventListener('click', (e) => {
  playVideo();
});

prevBtnEl.addEventListener('click', (e) => {
  paginateVideoPrev('prev');
});

nextBtnEl.addEventListener('click', (e) => {
  paginateVideoNext('next');
});

desktopLibary.addEventListener('click', (e) => {
  if (e.target.matches('figure.video, figure.video *')) {
    prevId = currentVideo;
    let id = e.target.closest('figure.video').getAttribute('data-video-id');

    openVideo(id);
  }
});

mobileLibary.addEventListener('click', (e) => {
  if (e.target.matches('figure.video, figure.video *')) {
    prevId = currentVideo;

    let id = e.target.closest('figure.video').getAttribute('data-video-id');

    openVideo(id);
  }
});

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    compileVideos(data.items);
  });
