async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const statusDiv = document.getElementById('status');
    const userList = document.getElementById('userList');
    try{
        //fetch  the data 
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        //convert to JSON
        const users = await response.json();
        statusDiv.textContent = 'Loading user data..';
        //update the UI with the fetched data
        dataContainer.innerHTML = data.map(user => `<li>${user.name}</li>`).join('');
    } catch (error) {
        console.error('Error fetching user data:', error);
        statusDiv.textContent = 'Failed to load user data.';
    }
}
    document.addEventListener('DOMContentLoaded', fetchUserData);