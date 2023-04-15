import { arrayOfAllCourses } from './courses.js';

const coursesList = document.querySelector('.courses-list');
const categoryLanguageBtn = document.querySelector('.category_language');
const categoryDesignBtn = document.querySelector('.category_design');
const categoryProgrammingBtn = document.querySelector('.category_programming');


categoryLanguageBtn.addEventListener("click", getCoursesByLanguageCategory);
categoryDesignBtn.addEventListener("click", getCoursesByDesignCategory);
categoryProgrammingBtn.addEventListener("click", getCoursesByProgrammingCategory);


function arrayOfLanguageCourses() {
         return arrayOfAllCourses.filter(course => {
        return course.category.includes('вивчення мови');
    }); 
}

function arrayOfProgrammingCourses() {
         return arrayOfAllCourses.filter(course => {
        return course.category.includes('програмування');
    }); 
}

function arrayOfDesigngCourses() {
         return arrayOfAllCourses.filter(course => {
        return course.category.includes('дизайн');
    }); 
}

function getCoursesByLanguageCategory() {
    
    const html = arrayOfLanguageCourses().map(course => {
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


function getCoursesByProgrammingCategory() {
    
    const html = arrayOfProgrammingCourses().map(course => {
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

function getCoursesByDesignCategory() {

    const html = arrayOfDesigngCourses().map(course => {
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