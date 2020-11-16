 /* import countryListTmpl from '..templates/country-list.hbs'; */
/*  import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
const { error } = require('@pnotify/core');
error.delay = '1000';
error.autoOpen = false;  */



export default
    function fetchCountries(response) {
        return fetch(`https://restcountries.eu/rest/v2/name/${response}`)
            .then(response => {
                 if (response.ok)  return response.json();
                else if (response.status === 404) {
                /* showError(); */
                return response.json();
                }
                /* return response.json(); */
            })
    
    }


/* function showError() {
     error({
        text:
            "Уточіть пошук! Використовуйте ENG ",
    });
} */
