document.addEventListener('DOMContentLoaded', () => {
    const loadAuthorsButton = document.getElementById('loadAuthors');
    const authorsList = document.getElementById('authorsList');

    const loadAuthors = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'books.json', true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                try {
                    
                    const booksData = JSON.parse(xhr.responseText);

                    const authors = [...new Set(booksData.map(book => book.author))];

                    authorsList.innerHTML = '';

                    authors.forEach(author => {
                        const listItem = document.createElement('li');
                        listItem.textContent = author;
                        authorsList.appendChild(listItem);
                    });
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            } else {
                console.error('Error loading books.json:', xhr.status, xhr.statusText);
            }
        };

        xhr.onerror = function () {
            console.error('Network error');
        };

        xhr.send();
    };

    loadAuthorsButton.addEventListener('click', loadAuthors);
});