import './styles.css';
import './js/fetchCountries';
import countryListTmpl from './templates/country-list.hbs';
const debounce = require('debounce');

const refs = {
    searchForm: document.querySelector('.js-search'),
    containerList: document.querySelector('.container-cards'),
}

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(event) {
    event.preventDefault();
    const searchData = event.target.value;


    const url = `https://restcountries.eu/rest/v2/name/${searchData}`;
    fetch(url)
        .then(response => {
        return response.json();
    })
    .then(country => {
        /* console.log(country); */
        const markUp = countryListTmpl(country);
        console.log(markUp);

        refs.containerList.insertAdjacentHTML('beforeend',markUp);
    })
        .catch(error => {
        console.log(error);
        })
    

}
/* import countryListTmpl from './templates/country-list.hbs';

fetchCountries(); */


const API = fetch('https://restcountries.eu/rest/v2/name/switzerland').then(response => {
    return response.json();
})
.then(country => {
    /* console.log(country); */
    const markUp = countryListTmpl(country);
    console.log(markUp);
})
    .catch(error => {
    console.log(error);
})
