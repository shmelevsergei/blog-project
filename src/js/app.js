import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

function show() {
  const articleFeed = document.querySelectorAll('.article-feed');

  articleFeed.forEach(article => {
    let articleTitle = article.querySelector('.article-feed__header-title');
    let articleArrow = article.querySelector('.article-feed__header-arrow');
    let articleContent = article.querySelector('.article-feed__content');

    articleTitle.addEventListener('click', () => {
      articleContent.classList.toggle('show');
    })
    articleArrow.addEventListener('click', () => {
      articleContent.classList.toggle('show');
    })
  });
}
show();

function burger() {
  let menu = document.querySelector('body');
  const burger = document.querySelector('.menu__burger');

  burger.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    menu.classList.toggle('lock');

  })
}
burger();
