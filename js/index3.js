document.addEventListener('DOMContentLoaded', () => {
    const loadUserButton = document.getElementById('loadUser');
    const userContainer = document.getElementById('userContainer');

    const loadRandomUser = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
        
            const user = data.results[0];

            document.getElementById('avatar').src = user.picture.large;
            document.getElementById('name').textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById('age').textContent = user.dob.age;
            document.getElementById('gender').textContent = user.gender;
            document.getElementById('country').textContent = user.location.country;
            document.getElementById('login').textContent = user.login.username;
            document.getElementById('password').textContent = user.login.password;
            document.getElementById('email').textContent = user.email;

            userContainer.style.display = 'block';
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    };

    loadUserButton.addEventListener('click', loadRandomUser);
});