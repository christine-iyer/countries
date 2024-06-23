// document.addEventListener('DOMContentLoaded', function() {
//     const pickUp = document.getElementById('picker')
//     const discard = document.getElementById('discard')
//      const searchButton = document.getElementById('searchButton');
//      const countryInput = document.getElementById('countryInput');
//      const countriesContainer = document.getElementById('countries');



//      searchButton.addEventListener('click', function() {
//          const countryName = countryInput.value.trim();
//          if (countryName) {
//              fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//                  .then(response => response.json())
//                  .then(data => {
//                      countriesContainer.innerHTML = ''; // Clear previous results
//                      data.forEach((country, index) => {
//                          const countryDiv = document.createElement('div');
//                          countryDiv.className = 'country';

//                          const countryIndex = document.createElement('h2');
//                          countryIndex.textContent = `Result ${index + 1}`;

//                          const countryFlag = document.createElement('h3');
//                          countryFlag.textContent= country.flag

//                          const countryName = document.createElement('h2');
//                          countryName.textContent = country.name.common;



//                          const countryRegion = document.createElement('p');
//                          countryRegion.textContent = `Region: ${country.region}`;

//                          const countryPopulation = document.createElement('p');
//                          countryPopulation.textContent = `Population: ${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

//                          countryDiv.appendChild(countryFlag);
//                          countryDiv.appendChild(countryName);
//                          countryDiv.appendChild(countryRegion);
//                          countryDiv.appendChild(countryPopulation);

//                          countriesContainer.appendChild(countryDiv);
//                      });
//                  })
//                  .catch(error => {
//                      console.error('Error fetching data:', error);
//                      countriesContainer.innerHTML = '<p>Error fetching data. Please try again.</p>';
//                  });
//          } else {
//              alert('Please enter a country name.');
//          }
//      });
//  });

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const wordInput = document.getElementById('wordInput');
    const wordsContainer = document.getElementById('words');

    if (searchButton && wordInput && wordsContainer) {
        searchButton.addEventListener('click', function () {
            const wordName = wordInput.value.trim();
            if (wordName) {
                fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordName}`)
                    .then(response => response.json())
                    .then(data => {
                        wordsContainer.innerHTML = ''; // Clear previous results
                        data.forEach((word) => {
                            const wordDiv = document.createElement('div');
                            wordDiv.className = 'word';

                            const wordWord = document.createElement('h3');
                            wordWord.textContent = word.word;
                            wordDiv.appendChild(wordWord);

                            wordsContainer.appendChild(wordDiv);
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                        wordsContainer.innerHTML = '<p>Your word is not legit.</p>';
                    });
            } else {
                alert('Please enter a word name.');
            }
        });
    } else {
        console.error('One or more elements not found in the DOM.');
    }
});
