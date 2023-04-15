import { arrayOfAllCourses } from './courses.js';

const coursesList = document.querySelector('.courses-list');
const levelBegginerBtn = document.querySelector('.level_begginer-btn');
const levelMiddleBtn = document.querySelector('.level_middle-btn');
const levelHighBtn = document.querySelector('.level_high-btn');


levelBegginerBtn.addEventListener('click', getCoursesByBegginerLevel);
levelMiddleBtn.addEventListener('click', getCoursesByMiddleLevel);
levelHighBtn.addEventListener('click', getCoursesByHighLevel);

function arrayCoursesByBegginerLevel() {
         return arrayOfAllCourses.filter(course => {
        return course.level.includes('початковий');
    }); 
}

function arrayCoursesByMiddleLevel() {
         return arrayOfAllCourses.filter(course => {
        return course.level.includes('середній');
    }); 
}

function arrayCoursesByHighLevel() {
         return arrayOfAllCourses.filter(course => {
        return course.level.includes('високий');
    }); 
}


function getCoursesByBegginerLevel() {
    
    const html = arrayCoursesByBegginerLevel().map(course => {
        return `<li class="courses_item">
     <a class="course_link">
        <img src=${course.img}  class="img_course" /> 
        <p class="course_description">Lorem ipsum, elit. Molestias voluptatum voluptate qui cupiditate quibusdam, distinctio odit quas corrupti vitae eaque veritatis. Delectus odit modi adipisci sit aliquid vero culpa iure</p>
        <span class="courses_name">${course.name}</span>
        <span class="courses_category"><span class="courses_category_title">Категорія:</span> ${course.category}</span>
        <span class="courses_level"><span class="courses_level_title">Рівень підготовки:</span> ${course.level}</span>
        </a>
        </li>`;
    }).join('');

    coursesList.innerHTML = html;
}


function getCoursesByMiddleLevel() {
    
    const html = arrayCoursesByMiddleLevel().map(course => {
        return `<li class="courses_item">
     <a class="course_link">
        <img src=${course.img}  class="img_course" /> 
        <p class="course_description">Lorem ipsum, elit. Molestias voluptatum voluptate qui cupiditate quibusdam, distinctio odit quas corrupti vitae eaque veritatis. Delectus odit modi adipisci sit aliquid vero culpa iure</p>
        <span class="courses_name">${course.name}</span>
        <span class="courses_category"><span class="courses_category_title">Категорія:</span> ${course.category}</span>
        <span class="courses_level"><span class="courses_level_title">Рівень підготовки:</span> ${course.level}</span>
        </a>
        </li>`;
    }).join('');

    coursesList.innerHTML = html;
}


function getCoursesByHighLevel() {
    
    const html = arrayCoursesByHighLevel().map(course => {
        return `<li class="courses_item">
     <a class="course_link">
        <img src=${course.img}  class="img_course" /> 
        <p class="course_description">Lorem ipsum, elit. Molestias voluptatum voluptate qui cupiditate quibusdam, distinctio odit quas corrupti vitae eaque veritatis. Delectus odit modi adipisci sit aliquid vero culpa iure</p>
        <span class="courses_name">${course.name}</span>
        <span class="courses_category"><span class="courses_category_title">Категорія:</span> ${course.category}</span>
        <span class="courses_level"><span class="courses_level_title">Рівень підготовки:</span> ${course.level}</span>
        </a>
        </li>`;
    }).join('');

    coursesList.innerHTML = html;
}