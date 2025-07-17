document.getElementById('myButton').addEventListener('click', function() {
    // Change the text of the heading with id 'myHeading'
    document.getElementById('myHeading').textContent = 'Heading Changed!';

    // Make an AJAX request to fetch data from a server
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);
            // Optionally, display fetched data on the page
            // document.getElementById('output').textContent = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});