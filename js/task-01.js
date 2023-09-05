const categoriesUl = document.querySelector('#categories');

const categoryItems = categoriesUl.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
    const categoryOfTitle = categoryItem.querySelector('h2');
    const categoryOfElements = categoryItem.querySelectorAll('li');

    console.log(`Category: ${categoryOfTitle}`);
    console.log(`Category: ${categoryOfElements}`);
});