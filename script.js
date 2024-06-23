document.addEventListener('DOMContentLoaded', function() {
    const pickUp = document.getElementById('picker')
    const discard = document.getElementById('discard')
     const searchButton = document.getElementById('searchButton');
     const countryInput = document.getElementById('countryInput');
     const countriesContainer = document.getElementById('countries');
     
     pickUp.addEventListener(('click', function(){
        console.log('clicked')
     }))
     searchButton.addEventListener('click', function() {
         const countryName = countryInput.value.trim();
         if (countryName) {
             fetch(`https://restcountries.com/v3.1/name/${countryName}`)
                 .then(response => response.json())
                 .then(data => {
                     countriesContainer.innerHTML = ''; // Clear previous results
                     data.forEach((country, index) => {
                         const countryDiv = document.createElement('div');
                         countryDiv.className = 'country';
 
                         const countryIndex = document.createElement('h2');
                         countryIndex.textContent = `Result ${index + 1}`;

                         const countryFlag = document.createElement('h3');
                         countryFlag.textContent= country.flag
 
                         const countryName = document.createElement('h2');
                         countryName.textContent = country.name.common;

                         
 
                         const countryRegion = document.createElement('p');
                         countryRegion.textContent = `Region: ${country.region}`;
 
                         const countryPopulation = document.createElement('p');
                         countryPopulation.textContent = `Population: ${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
 
                         countryDiv.appendChild(countryFlag);
                         countryDiv.appendChild(countryName);
                         countryDiv.appendChild(countryRegion);
                         countryDiv.appendChild(countryPopulation);
 
                         countriesContainer.appendChild(countryDiv);
                     });
                 })
                 .catch(error => {
                     console.error('Error fetching data:', error);
                     countriesContainer.innerHTML = '<p>Error fetching data. Please try again.</p>';
                 });
         } else {
             alert('Please enter a country name.');
         }
     });
 });
 