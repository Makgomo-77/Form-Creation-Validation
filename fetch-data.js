async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const statusDiv = document.getElementById('status');
    const userList = document.getElementById('userList');
    try{
        //fetch  the data
        const dataContainer = document.getelementById('api-data');
        const response = await fetch('apiUrl');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        //convert to JSON
        const users = await response.json();
        statusDiv.textContent = 'Loading user data..';
        users.foreach(user=> {const ul = document.createElement('ul');
                              datacontainer.innerHTM =`<strong>${user.name}</strong> <br>
                              <span class="email">${user.email}</span>`;
                              userList.appendChild(ul)
    } catch (error) {
        console.error('Error fetching user data:', error);
        statusDiv.textContent = 'Failed to load user data.';
    }
}

    document.addEventListener('DOMContentLoaded', fetchUserData);


