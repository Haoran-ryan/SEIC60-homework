// initialisers 
const input = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.btn');
const output = document.querySelector('#output');


// create a function to connect to Google Book API 
const bookSearch = (title) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`)
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]);
            output.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
            
        }
    }
}

// add an event listener 

searchBtn.addEventListener('click', () => {
    bookSearch(input.value);
    }
);