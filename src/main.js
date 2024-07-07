// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


function getPictures(query) {

    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = "44781960-4338c4c6360104e4623fadff2";
    const imageType = 'photo';
    const orientation = 'horizontal';
    const safeSearch = true;

    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}`).then((res) => {
        if (!res.ok) {
            throw new Error(res.status)
        }
        return res.json()
    })
}





const formSearch = document.querySelector('.form-search');
const cardContainer = document.querySelector('.card-container');
const loader = document.querySelector('.loader')

formSearch.addEventListener('submit', handlerSearch)

function handlerSearch(event) {
    
    event.preventDefault();

    const form = event.currentTarget;
    const userValue = form.elements.search.value.toLowerCase();

    showLoader()

    getPictures(userValue)
        .then(createMarkup) 
        .catch(onFetchError) 
        .finally(() => {
            form.reset();
            hideLoader();
        });
}

function createMarkup({ hits }) {
    if (hits.length === 0) {
        onFetchError();
        return;
    }
    const markup = hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
       return `
    <li class="item">
        <a href="${largeImageURL}"><img class="image" src="${webformatURL}" alt="${tags}" width="360" ></a>
            <ul class="descr-list">
                    <li class="descr-item">
                            <h3 class="descr-title">Likes</h3>
                            <p class="descr-value">${likes}</p>
                    </li>
            <li class="descr-item">
                            <h3 class="descr-title">Views</h3>
                            <p class="descr-value">${views}</p>
                    </li>
            <li class="descr-item">
                            <h3 class="descr-title">Comments</h3>
                            <p class="descr-value">${comments}</p>
                    </li>
            <li class="descr-item">
                            <h3 class="descr-title">Downloads</h3>
                            <p class="descr-value">${downloads}</p>
                    </li>
            </ul>
    </li>
    `
    }).join('') ;
    cardContainer.innerHTML = markup;

    const lightbox = new SimpleLightbox('.card-container a', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
});

    lightbox.refresh();
}



function onFetchError() {
    iziToast.error({
   
    message: 'Sorry, there are no images matching your search query. Please try again!',
});

}

function showLoader() {
    loader.style.display = 'flex';
}

function hideLoader() {
    loader.style.display = 'none';
}
