//PART I.

var users = [
{
  username: "larry",
  email: "larry@foo.com",
  yearsExperience: 22.1,
  favoriteLanguages: ["Perl", "Java", "C++"],
  favoriteEditor: "Vim",
  hobbies: ["Fishing", "Sailing", "Hiking"],
  hometown: {
    city: "San Francisco",
    state: "CA"
  }
},
{
  username: "jane",
  email: "jane@test.com",
  yearsExperience: 33.9,
  favoriteLanguages: ["Haskell", "Clojure", "PHP"],
  favoriteEditor: "Emacs",
  hobbies: ["Swimming", "Biking", "Hiking"],
  hometown: {
    city: "New York",
    state: "NY"
  }
},
{
  username: "sam",
  email: "sam@test.com",
  yearsExperience: 8.2,
  favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
  favoriteEditor: "Atom",
  hobbies: ["Golf", "Cooking", "Archery"],
  hometown: {
    city: "Fargo",
    state: "SD"
  }
},
{
  username: "anne",
  email: "anne@test.com",
  yearsExperience: 4,
  favoriteLanguages: ["C#", "C++", "F#"],
  favoriteEditor: "Visual Studio Code",
  hobbies: ["Tennis", "Biking", "Archery"],
  hometown: {
    city: "Albany",
    state: "NY"
  }
},
{
  username: "david",
  email: "david@test.com",
  yearsExperience: 12.5,
  favoriteLanguages: ["JavaScript", "C#", "Swift"],
  favoriteEditor: "Sublime Text",
  hobbies: ["Volunteering", "Biking", "Coding"],
  hometown: {
    city: "Los Angeles",
    state: "CA"
  }
}
];

//Write a function called printEmails which console.log's each email for the users.

function printEmails(){
  users.forEach(function(el){
    console.log(el.email);
  });
}

printEmails();

//Write a function called printHobbies which console.log's each hobby for each user.

function printHobbies(){
  users.forEach(function(el){
    el.hobbies.forEach(function(hobby){
      console.log(hobby)
    })
  })
}

printHobbies();

//Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in

function findHometownByState(state){
  return users.find(function(el){
    return el.hometown.state === state;
  })
}

findHometownByState("CA");

//Write a function called allLanguages which returns an array of all of the unique values

function allLanguages(){
  return users.reduce(function(acc, el){
    el.favoriteLanguages.forEach(function(lang){
      if(!acc.includes(lang)){
        acc.push(lang);
      }
    })
    return acc;
  },[]).sort();
}

allLanguages();

//Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in

function hasFavoriteEditor(editor){
  return users.some(function(el){
    return el.favoriteEditor === editor
  });
}

hasFavoriteEditor("Sublime Text") // true
hasFavoriteEditor("Eclipse") // false

//Write a function called findByUsername which takes in a string and returns an object in the users array that has that username

function findByUsername(name){
  return users.find(function(el){
    return el.username === name;
  });
}

findByUsername("david") 



//Part II

// Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).
function vowelCount(word){
  var wordArr = word.split('').filter(function(letter){
    return ['a','e','i','o','u'].includes(letter);
  });
  return wordArr.reduce(function(acc,el){
    if (acc[el] !== undefined){
      acc[el]++;
    }
    else {
      acc[el] = 1;
    }
    return acc;
  },{});
}

console.log(vowelCount("incredible"));
// {i:2, e: 2}
console.log(vowelCount("awesome"));
// {a:1, e:2, o:1}


// Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).

function removeVowels(word){
  return word.split('').filter(function(letter){
    return !(['a','e','i','o','u'].includes(letter));
  })
}

console.log(removeVowels("amazing")); // ["m","z","n","g"]
console.log(removeVowels("fun")); // ["f","n"]
console.log(removeVowels("silly")); // ["s","l","l","y"]