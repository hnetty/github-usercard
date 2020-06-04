/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/hnetty')
.then(response => {
  console.log(response);
  let masterDiv = document.querySelector('.cards');
  masterDiv.appendChild(createCard(response.data));
})
.catch(error => {
  console.log(error)
},[])
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/* STEP 4: Pass the data received from Github into your function,  and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. 
    
    Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

  for (let i = 0; i < followersArray.length; i++){
    let link = 'https://api.github.com/users/' + followersArray[i];
    axios.get(link)
    .then(response => {
      console.log(response);
      let masterDiv = document.querySelector('.cards');
      masterDiv.appendChild(createCard(response.data));
    })
    .catch(error => {
      console.log(error)
    },[])

  }

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard(input){

  let parentDiv = document.createElement('div');
  let imageHolder = document.createElement('img');
  let childDiv = document.createElement('div');
  let heading = document.createElement('h3');
  let userParagraph = document.createElement('p');
  let locationParapraph = document.createElement('p');
  let profileParagraph = document.createElement('p');
  let linkSection = document.createElement('a');
  let followersParagraph = document.createElement('p');
  let followingParagraph = document.createElement('p');
  let bioParagraph = document.createElement('p');

  parentDiv.classList.add('card');
  childDiv.classList.add('card-ino');
  heading.classList.add('name');
  userParagraph.classList.add('username');
  
  imageHolder.src = 'https://avatars2.githubusercontent.com/u/64793537?v=4';
  heading.textContent = input.name;
  userParagraph.textContent = input.login;
  locationParapraph.textContent = input.location;
  profileParagraph.textContent = `Profile: ${linkSection}`;
  linkSection.textContent = input.html_url;
  linkSection.src = input.html_url;
  followersParagraph.textContent = `Followers: ${input.followers}`;
  followingParagraph.textContent = `Following: ${input.following}`;
  bioParagraph.textContent = `Bio: ${input.bio}`;

  parentDiv.appendChild(imageHolder);
  parentDiv.appendChild(childDiv);
  childDiv.appendChild(heading);
  childDiv.appendChild(userParagraph);
  childDiv.appendChild(locationParapraph);
  childDiv.appendChild(profileParagraph);
  childDiv.appendChild(followersParagraph);
  childDiv.appendChild(followingParagraph);
  childDiv.appendChild(bioParagraph);

  return parentDiv;

}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
