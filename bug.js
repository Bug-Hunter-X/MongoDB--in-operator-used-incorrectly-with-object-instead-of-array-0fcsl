```javascript
const query = { name: 'John Doe' };

// Incorrect usage of $in operator
db.collection('users').find({ name: { $in: query } }).toArray((err, result) => {
  console.log(result);
});
```