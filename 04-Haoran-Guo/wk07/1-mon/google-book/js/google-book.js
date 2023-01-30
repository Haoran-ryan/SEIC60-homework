// initialisers 
const input = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.btn');
const result = document.querySelector('.search-log');
const bookCount = document.querySelector('#actual-count');

// create a function to connect to Google Book API 
const bookSearch = (title) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`)
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data["items"][0]["volumeInfo"]["title"]);
            console.log(data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]);
            
            const card_div = document.createElement('div');
            card_div.setAttribute('class','card g-col-6');

            const pic = document.createElement('img');
            pic.setAttribute('class', 'card-img-top');
            pic.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
            result.appendChild(card_div).appendChild(pic);

            const card_title = document.createElement('h3');
            card_title.setAttribute('class', 'card-title');
            card_title.innerText = data["items"][0]["volumeInfo"]["title"];

            const card_body = document.createElement('div');
            card_body.setAttribute('class', 'card-body');
            card_div.appendChild(card_body);
            card_body.appendChild(card_title);

            const searchNo = result.childElementCount
            if(searchNo === 1){
                bookCount.innerText = `${searchNo} book`;
            }else{
                bookCount.innerText = `${searchNo} books`;
            }
            
        }
    }
}

// add an event listener 

searchBtn.addEventListener('click', () => {
    bookSearch(input.value);
    }
);