// fetchData()
//  .then(data => generateOptions(data.message))
 
// fetchData('https://dog.ceo/api/breeds/image/random') // takes the data
// // (doesnt apply because of the function we created) .then(response => response.json()) // stores the response then turns it into JSON
//  .then(data => generateImage(data.message)) // we pass the random dog url we added a function, takes the JSON and stores it in data, goes into the message

// VARIABLES

let table = document.querySelector('.table-list');



buildTable(countryData);

function buildTable(data) {
    table.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let row = `
            <tr class="table">
                <td class="rows">${data[i].name}</td>
                <td class="rows">${data[i].dial_code}</td>
                <td class="rows">${data[i].code}</td>
            </tr>
        `;

    table.innerHTML += row;
    }
}
const searchHeader = document.querySelector('.header2')
const searchLabel = document.createElement('label')
const searchForm = () => {
    
    
    searchLabel.innerHTML = '';
    let html =
        `
        <label for="search" class="country-search">
        <span>Search by Country</span>
        <input id="search" placeholder="Search by Country...">
        <button type="button"><img src="images/icons8-search.svg" alt="Search icon"></button>
        </label>
        `;
    searchLabel.innerHTML += html;
    // console.log(searchLabel);
    searchHeader.appendChild(searchLabel)
  }

  searchForm()


  const searchInput = document.getElementById('search')
  let newCountryList = []
  

  //    a. Event listener to filter out students based on the key characters provided to the search bar.
  searchInput.addEventListener('keyup', (e) => {
    let filterInput = e.target.value.toLowerCase();
    // console.log('filterInput', filterInput);
    

   
   
    const res = document.querySelector('.results');
    let item = countryData.filter( function (val) {
        
        let valLower = val.name.toLowerCase();
        const notIncludesD = !valLower.includes(filterInput);

        if(valLower.includes(filterInput)) {
            let results =  val.name;
            return results;
        
        }// if (newCountryList.length === 0) {
            
        //     res.innerHTML += '<li class="no-results">No results.</li>';
        //   }
        
        // if (notIncludesD) {
        //     res.innerHTML = '';
        //     // let html =
        //     //      `
        //     //     <h1>No Results</h1>
        //     //     `;
        //     // res.innerHTML = html;
        //     // // console.log(searchLabel);
        //     // res.appendChild(searchHeader)
        //     let html = 
        //     `
        //     <h1>No Results</h1>
        //     `;

        //     res.innerHTML += html;
        //     searchHeader.appendChild(res)
        // res.innerHTML = `<h1>No Results</h1>`;
        // }
        console.log(val);
    })

   

    newCountryList = item;
    console.log(newCountryList);
    buildTable(newCountryList);
    
  });



  


// let selectList = document.querySelector('#countries');
// // listens for click event

// // !USE THE FILTER METHOD!!

// let displayCode = document.querySelector('.country-code-display');

// // FUNCTIONS
// function fetchData (url) { // paremeter is the fetchs url
//       return fetch(url)
//                  .then(checkStatus)
//                  .then(res => res.json()) // res = the result of the url converted to json
//                  .catch(error => console.log('Looks like there was a problem', error))// if there is an error in the promise then catch catches it and it will log the message.
//      }

//      fetchData('https://gist.github.com/kcak11/4a2f22fb8422342b3b3daa7a1965f4e4.js')
//         .then(data => generateOptions(data.message))

// function generateOptions(data) {
//         const options = data.map(item => `
//             <option value='${item}'>${item}</option>
//         `).join(''); // join removes comma seperation and combines the maps
//         select.innerHTML = options;
//         }
// function checkStatus(response) {
//     if(response.ok) {
//     return Promise.resolve(response);
//     } else {
//     return Promise.reject(new Error(response.statusText)); // if a promise is rejected due to a failded http response
//     }
// }








// selectList.addEventListener("change", () => {
//     let selectedCountry = selectList.value;
//     let len = countryCodes.length;
//     const country = countryCodes.find(country => country.iso === selectedCountry);
    
//     for (let elem in countryCodes) {
//         // displayCode.innerHTML = `${country.iso} ${country.code}`;
//         console.log(country.code + country.iso);
//         displayCode.textContent = `<h1>${country.code} ${country.iso}</h1>`;
        
//     }
    // countryCodes.forEach(selectedCountry => console.log(countryCodes[selectedCountry]));
    // for (let i = 0; i < len; i++) {
    //     selectedCountry = countryCodes[i];
    //     console.log(selectedCountry);
    // }
    
// });


// BELOW IS AN NOTES ON HOW TO USE API'S AND FETCH AS WELL AS POSTING TO A SERVER.

// const select = document.getElementById('breeds');
// const card = document.querySelector('.card'); 
// const form = document.querySelector('form');

// // ------------------------------------------
// //  FETCH FUNCTIONS
// // ------------------------------------------
// function fetchData (url) { // paremeter is the fetchs url
//   return fetch(url)
//             .then(checkStatus)
//             .then(res => res.json()) // res = the result of the url converted to json
//             .catch(error => console.log('Looks like there was a problem', error))// if there is an error in the promise then catch catches it and it will log the message.
// }
// // using promise.all is easier to manage for bigger projects
// Promise.all([
//   fetchData('https://dog.ceo/api/breeds/list'), // dont forget to comma seperate!
//   fetchData('https://dog.ceo/api/breeds/image/random')
// ]) // waits for both promises to resolve then returns 1 promise for the both
//   .then( data => {
//     const breedList = data[0].message;
//     const randomImage = data[1].message;
    
//     generateOptions(breedList);
//     generateImage(randomImage);
//   })

// //This Still Works The Same Way. Better for smaller projects.
// //fetchData('https://dog.ceo/api/breeds/list')
// //  .then(data => generateOptions(data.message))
// //  
// //fetchData('https://dog.ceo/api/breeds/image/random') // takes the data
// //// (doesnt apply because of the function we created) .then(response => response.json()) // stores the response then turns it into JSON
// //  .then(data => generateImage(data.message)) // we pass the random dog url we added a function, takes the JSON and stores it in data, goes into the message
// //

// // ------------------------------------------
// //  HELPER FUNCTIONS
// // ------------------------------------------
// function checkStatus(response) {
//   if(response.ok) {
//     return Promise.resolve(response);
//   } else {
//     return Promise.reject(new Error(response.statusText)); // if a promise is rejected due to a failded http response
//   }
// }

// function generateOptions(data) {
//   const options = data.map(item => `
//     <option value='${item}'>${item}</option>
//   `).join(''); // join removes comma seperation and combines the maps
//   select.innerHTML = options;
// }

// function generateImage(data) { // addin img element to display the data variable.
//   const html = ` 
//     <img src='${data}' alt>
//     <p>Click to view images of ${select.value}s</p>
//   `;
//   card.innerHTML = html;
// }

// function fetchBreedImage() {
//   const breed = select.value;
//   const img = card.querySelector('img');
//   const p = card.querySelector('p'); 
//                     //              interpolate the breed
//   fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
//     .then(data => {
//       img.src = data.message;
//       img.alt = breed;
//       p.textContent = `Click to view more ${breed}s`;
//     })
// }

// // ------------------------------------------
// //  EVENT LISTENERS
// // ------------------------------------------

// select.addEventListener('change', fetchBreedImage);
// card.addEventListener('click', fetchBreedImage);
// form.addEventListener('submit', postData);

// // ------------------------------------------
// //  POST DATA
// // ------------------------------------------
// // posts to server on submit
// function postData(e) {
//   e.preventDefault; // cancels the browsers default submit behavior
//   const name = document.getElementById('name').value;
//   const comment = document.getElementById('comment').value;
//   const config =  {
//     method:'POST', // the type of request/ fetch spec requires all methods to be uppercase although not required
//     headers:{
//       'Content-Type': 'application/json' // communicates to the server that the data has been encoded in json.
//     },  
//     body: JSON.stringify({ name: name, comment: comment })// values are sent to the server in the body of the request.
//   } // stringy transforms the data into a json string.
  
//   // submiting to a fake api https://jsonplaceholder.typicode.com/comments

//   fetch('https://jsonplaceholder.typicode.com/comments', config)
//     .then(checkStatus)
//     .then(res => res.json())
//     .then(data => console.log(data))
// 