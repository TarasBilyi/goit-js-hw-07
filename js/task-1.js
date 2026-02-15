const categorisList = document.querySelector('#categories');
console.log(`Number of categories: ${categorisList.children.length}`);

const categorisItem = document.querySelectorAll('.item');
categorisItem.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const ul = category.querySelector('ul');
  const categoryElements = ul.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
