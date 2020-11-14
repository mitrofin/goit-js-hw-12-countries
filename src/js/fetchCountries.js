/* import countryListTmpl from '..templates/country-list.hbs';
import { search } from 'core-js/fn/symbol';

export default class API {
    constructor() {
        this.searchQuery = "";
    }
    fetchCoutry() {
        return fetch('https://restcountries.eu/rest/v2/name/ukraine').then(response => {
    return response.json();
    })
    .then(country => {
        console.log(country);
        const markUp = countryListTmpl(country);
        console.log(markUp);
    })
        .catch(error => {
        console.log(error);
    })
        }
}
  

 */