'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

spider.style.top = (wall.scrollHeight - spider.scrollHeight) / 2 + 'px';

spider.style.left = (wall.scrollWidth - spider.scrollWidth) / 2 + 'px';
