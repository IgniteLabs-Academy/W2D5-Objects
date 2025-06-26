// 1. Declare an object 'user' with properties 'name' and 'age'
let user = {
  name: 'Alice',
  age: 25
};

// 2. Access and log the 'name' property
console.log(user.name);

// 3. Update the 'age' property of the user
user.age = 26;

// 4. Add a new property 'email' to the object
user.email = 'alice@example.com';

// 5. Delete the 'email' property from the object
delete user.email;

// 6. Add a nested object property 'address' with keys: 'city' and 'country'
user.address = {
  city: 'New York',
  country: 'USA'
};

// 7. Use object destructuring to extract 'name' and 'age' from the user object and log them
let { name, age } = user;
console.log(name, age);

// 8. Use the spread operator to create a new object 'updatedUser' that copies all properties from 'user' and updates the 'age' to a new value
const updatedUser = { ...user, age: 30 };

// 9. Loop through all properties of the 'user' object using for...in and log each key and value
for (let key in user) {
  console.log(key, user[key]);
}

// 10. Use console.log() to display the complete 'user' object
console.log(user);
