import { arrayOfAllCourses } from './courses.js';

const input = document.querySelector('.courses_input');
const coursesList = document.querySelector('.courses-list');

const sortedArrayByName =  arrayOfAllCourses.sort((firstcourse, secondCourse) => {
   return firstcourse.name.localeCompare(secondCourse.name) 
});

const arrayForRender = sortedArrayByName.map(course => {
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
    
  coursesList.innerHTML = arrayForRender;
   

function getSuitableCourses(word, arrayOfAllCourses) {

    return arrayOfAllCourses.filter(course => {
        // визначаємо, що вводимо в інпут (назва курсу)
        // метод match перевіряє наявність символів в course.name
        // прапор "gi" - шукає всі співпадіння в тсроці незалежно від регістру
        const regex = new RegExp(word, 'gi');
        return course.name.match(regex) || course.category.match(regex) || course.level.match(regex);
    })
};

function displayOptions() {
    const arrayOfFiltredCourses = getSuitableCourses(this.value, arrayOfAllCourses);
    
    const html = arrayOfFiltredCourses.map(course => {
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

  
input.addEventListener('keyup', displayOptions);   