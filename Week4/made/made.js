// 1
const bookTitles = [
  'de_ontdekking_van_de_hemel',
  'here_i_am',
  'the_underground_railroad',
  'the_hitchhikers_guide_to_the_galaxy',
  'lolita',
  'the_other_hand',
  'naamloos',
  'my_uncle_oswald',
  'dav_iven',
  'guns_germs_and_steel'
];

// 3
function generateUl(list) {
  const ul = document.createElement('ul');

  for(let i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    li.id = list[i];
    li.textContent = list[i];

    ul.appendChild(li);
  }

  return ul;
}

function addToPage(list) {
  const body = document.getElementsByTagName('body')[0];

  body.appendChild(list);
}

// 4
const metaData = {
  'de_ontdekking_van_de_hemel': {
    title: 'De ontdekking van de hemel',
    language: 'nl',
    author: 'Harry Mulisch'
  },
  'here_i_am': {
    title: 'Here I Am',
    language: 'en',
    author: 'Jonathan Safran Foer'
  },
  'the_underground_railroad': {
    title: 'The Underground Railroad',
    language: 'en',
    author: 'Colson Whitehead'
  },
  'the_hitchhikers_guide_to_the_galaxy': {
    title: 'The Hithchiker\s Guide to the Galaxy',
    language: 'en',
    author: 'Douglas Adams'
  },
  'lolita': {
    title: 'Lolita',
    language: 'en',
    author: 'Vladimir Nobokov'
  },
  'the_other_hand': {
    title: 'The Other Hand',
    language: 'en',
    author: 'Chris Cleave'
  },
  'naamloos': {
    title: 'Naamloos',
    language: 'nl',
    author: 'Pepijn Lanen'
  },
  'my_uncle_oswald': {
    title: 'My Uncle Oswald',
    language: 'en',
    author: 'Roald Dahl'
  },
  'dav_iven': {
    title: 'Dav Iven',
    language: 'nl',
    author: 'Julian Tunru'
  },
  'guns_germs_and_steel': {
    title: 'Guns, Germs and Steel',
    language: 'en',
    author: 'Jared Diamond'
  }
};

// 5
function generateDetailedUl(list, details) {
  const ul = document.createElement('ul');

  for(let i = 0; i < list.length; i++) {
    const bookDetails = details[list[i]];
    const li = document.createElement('li');
    li.id = list[i];

    const title = document.createElement('h1');
    title.textContent = bookDetails.title;

    const author = document.createElement('p');
    author.textContent = bookDetails.author;

    const language = document.createElement('small');
    language.textContent = bookDetails.language;

    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(language);

    ul.appendChild(li);
  }

  return ul;
}

// 7
const bookCovers = {
  'de_ontdekking_van_de_hemel': 'https://images.gr-assets.com/books/1202990145l/88413.jpg',
  'here_i_am': 'https://images.gr-assets.com/books/1471029768m/31434269.jpg',
  'the_underground_railroad': 'https://images.gr-assets.com/books/1493178362m/30555488.jpg',
  'the_hitchhikers_guide_to_the_galaxy': 'https://images.gr-assets.com/books/1388282444l/386162.jpg',
  'lolita': 'https://images.gr-assets.com/books/1331319622m/10244169.jpg',
  'the_other_hand': 'https://images.gr-assets.com/books/1333593823m/3741587.jpg',
  'naamloos': 'https://images.gr-assets.com/books/1453112626m/28594679.jpg',
  'my_uncle_oswald': 'https://images.gr-assets.com/books/1287479412m/6691.jpg',
  'dav_iven': 'https://images.gr-assets.com/books/1431362816m/25357576.jpg',
  'guns_germs_and_steel': 'https://images.gr-assets.com/books/1453215833m/1842.jpg'
};

function addBookCovers(covers, metaData) {
  const keys = Object.keys(covers);

  for(let i = 0; i < keys.length; i++) {
    const bookId = keys[i];

    const li = document.getElementById(bookId);

    const img = document.createElement('img');
    img.src = covers[bookId];
    img.alt = metaData[bookId];

    li.appendChild(img);
  }
}

addToPage(generateDetailedUl(bookTitles, metaData));
addBookCovers(bookCovers, metaData);