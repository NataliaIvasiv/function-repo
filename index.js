const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

const propertyB = Object.keys(book);

for (const key of propertyB) {
  console.log(propertyB);
  console.log(book[key]);
}
