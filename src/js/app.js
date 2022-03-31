// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import LocomotiveScroll from 'locomotive-scroll';

// window.addEventListener('load', () => {
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true,
//     multiplier: 0.75,
//     scrollFromAnywhere: true,
//   });
// });
// setTimeout(() => {
//   scroll.update();
// }, 5000);

// gsap.registerPlugin(ScrollTrigger);

// gsap.to;
// const tl = gsap.timeline({
//   defaults: {
//     ease: 'power1.out',
//   },
// });
// tl.to('#video', {
//   scrollTrigger: {
//     trigger: '.header',
//     start: 'center center',
//     scrub: true,
//   },
//   scale: 1.3,
// });

// scroller.on('scroll', ScrollTrigger.update);

const albumData = [
  {
    label: 'LKGB',
    image: 'album1.png',
    links: [
      {
        label: 'Tidal',
        url: 'https://tidal.com/album/139162553',
      },
      {
        label: 'Apple Music',
        url: 'https://music.apple.com/mx/album/lkgb/1510362443?l=en',
      },
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/album/1hi7PNytX5TMQNtjnfdN0k',
      },
      {
        label: 'Amazon music',
        url: 'https://www.amazon.com/Lkgb-Explicit-G-Rize/dp/B087QQ52Z4',
      },
      {
        label: 'Deezer',
        url: 'https://www.deezer.com/en/album/144735512',
      },
      {
        label: 'Boomplay',
        url: 'https://www.boomplay.com/albums/11152872',
      },
      {
        label: 'YouTube Music',
        url: 'https://youtube.com/playlist?list=OLAK5uy_nIs5QW28J-2c-EomThH_2qF3RHMSMn5Ho',
      },
    ],
    playlist: [
      '1. Holy Water (Remix)',
      '2. Personal Blessing',
      '3. Energy',
      '4. Promise',
      '5. Survivor',
      '6. Water',
      '7. The One',
      '8. Holy Water',
    ],
  },
  {
    label: 'Masterpiece',
    image: 'album2.png',
    links: [
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/album/1kZdomWrbEEQ0YhVbkwBeq',
      },
      {
        label: 'Apple Music',
        url: 'https://music.apple.com/us/album/masterpiece/1194254445',
      },
      {
        label: 'TIDAL',
        url: 'https://tidal.com/album/69189986',
      },
      {
        label: 'Boomplay',
        url: 'https://www.boomplay.com/albums/342712',
      },
      {
        label: 'Amazon music',
        url: 'https://www.amazon.com/Masterpiece-G-Rize/dp/B01NBTWYDD/ref=nodl_',
      },
      {
        label: 'YouTube music',
        url: 'https://youtube.com/channel/UChUOKsXe1jKzpUAw1lrjMfA',
      },
      {
        label: 'Deezer',
        url: 'https://www.deezer.com/en/album/15061593',
      },
    ],
    playlist: [
      '1. The Things She Do',
      '2. Only Girl',
      '3. Show Me That',
      '4. My Own (feat. Bigg Timee)',
      '5. Single Lady',
      '6. Tumba',
      '7. Money Love (feat. Young Bliss & Bigg Timee)',
      '8. Lib Ladies (feat. Chris Deshield)',
      '9. Shake Your Waist (feat. Shadow Man)',
      '10. Tumba (Remix) [feat. Fej]',
    ],
  },
  {
    label: 'Tumba',
    image: 'album3.png',
    links: [
      {
        label: 'Apple Music',
        url: 'https://music.apple.com/mx/album/tumba-single/1048234240?l=en',
      },
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/album/2Z7KTWAjDe9ZH0vFF6DnDL',
      },
      {
        label: 'Deezer',
        url: 'https://www.deezer.com/en/track/139980757',
      },
      {
        label: 'Amazon music',
        url: 'https://www.amazon.com/Tumba-G-Rize/dp/B016GNG1FC/ref=nodl_',
      },
      {
        label: 'Boomplay',
        url: 'https://www.boomplay.com/songs/892334',
      },
      {
        label: 'Tidal',
        url: 'https://tidal.com/album/52449456',
      },
      {
        label: 'YouTube Music',
        url: 'https://youtu.be/BQBxLDYKvZ0',
      },
    ],
    playlist: ['1. Tumba'],
  },
];

let swiper = new Swiper('.swiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  breakpoints: {
    600: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3.2,
      spaceBetween: 30,
    },
  },
});

const popupContainer = document.querySelector('#popup-contain');

const showComingSoonHandler = (label) => {
  let markup = `
      <div class="tours">
      <h2 class="heading-secondary">${label}</h2>
      <p class="paragraph">Coming Soon.</p>
    </div>
`;

  popupContainer.innerHTML = '';
  popupContainer.insertAdjacentHTML('beforeend', markup);

  popupEl.classList.toggle('open');
};

// let swiper2 = new Swiper('.videos', {
//   slidesPerView: 1.2,
//   spaceBetween: 20,
//   freeMode: true,
//   breakpoints: {
//     600: {
//       slidesPerView: 1.5,
//       spaceBetween: 20,
//     },
//     900: {
//       slidesPerView: 2.3,
//       spaceBetween: 30,
//     },
//   },
// });

const btnNavEl = document.querySelector('.navigation__button');
const navigationEl = document.querySelector('.navigation');

btnNavEl.addEventListener('click', function () {
  navigationEl.classList.toggle('nav-open');
});

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    if (href.includes('/') || href.includes('.html')) {
      return;
    }

    // Show Tours
    if (href === '#tours') {
      e.preventDefault();
      showComingSoonHandler('Tours');

      navigationEl.classList.toggle('nav-open');
      return;
    }

    if (href === '#blog') {
      e.preventDefault();
      showComingSoonHandler('Blog');

      navigationEl.classList.toggle('nav-open');
      return;
    }

    // Scroll back to top
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion
    if (link.classList.contains('main-nav-link')) {
      e.preventDefault();
      navigationEl.classList.toggle('nav-open');
    }
  });
});

const headerEl = document.querySelector('.header');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      navigationEl.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      navigationEl.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(headerEl);

const popupbtnEl = document.querySelector('#popup-close');
const popupEl = document.querySelector('#popup');

popupbtnEl.addEventListener('click', function () {
  popupContainer.innerHTML = '';
  popupEl.classList.toggle('open');
});

const albumpopupbtnEl = document.querySelectorAll('[data-album-popup]');

const setAlbumPopup = (data) => {
  let links = ``;

  data.links.forEach((link) => {
    let markup = `<li><a href="${link.url}" target="_blank" class="juice">${link.label}</a></li>`;

    links = links + markup;
  });

  let tracks = ``;

  data.playlist.forEach((link) => {
    let markup = `<li>${link}</li>`;

    tracks = tracks + markup;
  });

  let markup = `
  <figure>
    <img src="images/${data.image}" alt="${data.label}" />
  </figure>
  <div class="desc">
    <div class="desc--info u-margin-bottom-medium">
      <h2 class="heading-secondary u-margin-bottom-small">${data.label}</h2>
      <ul>
        ${links}
      </ul>
    </div>
    <h2 class="heading-primary juice u-margin-bottom-small">
      Playlist
    </h2>
    <ol>
        ${tracks}
    </ol>
  </div>
  `;

  popupContainer.innerHTML = '';
  popupContainer.insertAdjacentHTML('beforeend', markup);
};

albumpopupbtnEl.forEach((btn) => {
  btn.addEventListener('click', function () {
    albumData.forEach((abm) => {
      let check = btn.getAttribute('data-album');

      if (abm.label === check) {
        setAlbumPopup(abm);
      }
    });

    popupEl.classList.toggle('open');
  });
});
