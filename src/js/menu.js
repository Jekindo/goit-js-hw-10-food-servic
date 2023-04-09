import menuData from './data/menu.json';
import Handlebars from 'handlebars';
import menuItems from '../templates/menuItems.precompiled';

const template = Handlebars.templates.menuItems;

const markup = template(menuData);
document.querySelector('.js-menu').insertAdjacentHTML('afterbegin', markup);
