document.addEventListener('DOMContentLoaded', function() {
     fetch('https://restcountries.com/v3.1/all')
         .then(response => response.json())
         .then(data => {
             data.sort((a, b) => a.name.common.localeCompare(b.name.common))
             const countries = data.slice(0, 300);
             const countriesContainer = document.getElementById('countries');
 
             countries.forEach((country, index) => {
                 const countryIndex = document.createElement('h3');
                 countryIndex.textContent = `Country Numero ${index + 1}`;
                 const countryDiv = document.createElement('div');
                 countryDiv.className = 'country';
 
 
 
                 const countryName = document.createElement('h2');
                 countryName.textContent = country.name.common;
 
                 const countryRegion = document.createElement('h3');
                 countryRegion.textContent = `Region: ${country.flag}`;
 
                 const countryPopulation = document.createElement('p');
                 countryPopulation.textContent = `Population: ${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
 
                 countryDiv.appendChild(countryIndex);
                 countryDiv.appendChild(countryName);
                 countryDiv.appendChild(countryRegion);
                 countryDiv.appendChild(countryPopulation);
 
                 countriesContainer.appendChild(countryDiv);
             });
         })
         .catch(error => console.error('Error fetching data:', error));
 });
 