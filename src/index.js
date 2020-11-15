import './styles.css';
import fetchCountries from './js/fetchCountries';
import countryListTmpl from './templates/country-list.hbs';
import countryNameTmpl from './templates/country-name.hbs';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
/* import { error } from '@pnotify/core'; */

const { alert ,info, error } = require('@pnotify/core');

const debounce = require('debounce');
fetchCountries()

const refs = {
    searchForm: document.querySelector('.js-search'),
    containerList: document.querySelector('.container-cards'),
}

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(event) {
    event.preventDefault();
    const searchData = event.target.value;
    clearCounrty()
    /* setTimeout(clearResult, 10000); */
    
    if (searchData.length === 0 || searchData === " ") {
        clearResult();
        const myInfo = info({
            text:
                "Спробуйте ще раз!",
        });
        return;
    }
    /* const url = `https://restcountries.eu/rest/v2/name/${searchData}`;
    fetch(url)
        .then(response => {
        return response.json();
        }) */
    fetchCountries(searchData)
            
        .then(country => {
        if (country.length > 10) {
            showError()
            clearCounrty() 
        
        }
        if (country === undefined) {
        showAlert()
        }
        console.log(country.length);
    
        appendCountries(country);
        })
      
        .catch(error => {
            console.log({ error });
        })
    
}

function clearResult() {
        refs.searchForm.value = "";
    }

function clearCounrty() {
        refs.containerList.innerHTML = "";
}
    
function appendCountries(country) {
    const markUp = countryListTmpl(country);
    console.log(markUp);
    const markUpName = countryNameTmpl(country);
    console.log(markUpName);

    if (country.length === 1) {
        return (refs.containerList.insertAdjacentHTML('beforeend', markUp));   
    }

    if (country.length > 1) {
        return (refs.containerList.insertAdjacentHTML('beforeend', markUpName))
    }

    if (country.length > 10) {
        clearCounrty()
    }

    if (country === undefined) {
    showAlert()
  }
    
    clearResult();
    clearCounrty();

}

function showError() {
    const myError = error({
    text:
            "Багато співпадінь.Уточіть пошук! Використовуйте ENG ", 
    });

}
function showAlert() {
    const myAlert = alert({
    text:
            "Нічого не знайдено!", 
    });

}

/* const myError = error({
    text:
      "Багато співпадінь. Уточіть пошук!" 
  }); */
      
