/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
/***
 * list of all available students
 * @type {NodeListOf<Element>}
 */
const item = document.querySelectorAll('.student-item');
/***
 * the max number of elements to display per page
 * @type {number}
 */
const numberOfElementsOnPage = 10;

/***
 * function that displays elements on a clicked page
 * @param list
 * @param page
 */
function showPage(list, page){
    let startIndex = (page * numberOfElementsOnPage ) - numberOfElementsOnPage;
    let endIndex = page * numberOfElementsOnPage -1;
    for (let i = 0; i < list.length ; i++){
        if (i >= startIndex && i<= endIndex) {
            list[i].style.display = '';
        }else{
            list[i].style.display = 'none'
        }
    }
}


/***
 * function that generates pagination links and appends them to the DOM
 * @param list
 */
function appendPageLinks(list){
    const div = document.createElement('div');
    div.className = 'pagination';
    document.getElementsByClassName('page')[0].appendChild(div);

    const ul = document.createElement('ul');
    div.appendChild(ul);
    ul.className = 'pagination-list';
    const numberOfPages = list.length / numberOfElementsOnPage;
    for (let i = 0; i< numberOfPages; i++) {
        const li = document.createElement('li');
        ul.appendChild(li);
        const a = document.createElement('a');
        li.appendChild(a);
        a.setAttribute('href', '#');
        a.textContent = i+1;
        //add 'active' class to the first element
        if (i === 0){
            a.className = 'active';
        }
        a.addEventListener('click', (e) =>{
            const allAncors = document.querySelectorAll('.pagination-list a');
            for (let i = 0; i< allAncors.length; i++){
                allAncors[i].classList.remove('active');
            }
            e.target.className = 'active';
            showPage(list, e.target.textContent);
            e.preventDefault();
        });
    }
    document.getElementsByClassName('pagination-list')[0].firstElementChild.className = 'active';
}

showPage(item, 1);
appendPageLinks(item);
