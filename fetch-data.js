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
        statusDiv.textContent = '';
        function displayUsers(users) {
            const userList = document.createElement('ul');
            users.foreach(user =>{
                const li = document.createElement('li');
                li.textcontent = user.name;
                userList.appendChild(li);
            });
                datacontainer.appendChild(userList);
            }
            
    } function (showError) {
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

    document.addEventListener('DOMContentLoaded', fetchUserData);



