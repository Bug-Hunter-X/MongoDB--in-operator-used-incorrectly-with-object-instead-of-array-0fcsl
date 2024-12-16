```javascript
const names = ['John Doe', 'Jane Doe'];

// Correct usage of $in operator with an array of values
db.collection('users').find({ name: { $in: names } }).toArray((err, result) => {
  console.log(result);
});
```