
export default
    function fetchCountries(response) {
        return fetch(`https://restcountries.eu/rest/v2/name/${response}`)
            .then(response => {
                 if (response.ok)  return response.json();
                else if (response.status === 404) {
                return response.json();
                }
            })
    }
