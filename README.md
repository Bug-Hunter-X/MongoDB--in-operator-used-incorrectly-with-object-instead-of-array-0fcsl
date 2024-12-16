# MongoDB $in Operator Bug

This repository demonstrates a common error when using the `$in` operator in MongoDB queries.  The `$in` operator is intended to match documents where a field's value is present in a given array.  However, the example code incorrectly passes an object instead of an array. This results in an unexpected query outcome and potential data retrieval issues.  The solution shows the correct usage of `$in` with an array of values for proper functionality.

## Bug
The bug lies in incorrectly using an object instead of an array in the `$in` query:

```javascript
db.collection('users').find({ name: { $in: query } });
```

## Solution
The solution involves creating an array of values and using it correctly within the `$in` operator:

```javascript
db.collection('users').find({ name: { $in: ['John Doe', 'Jane Doe'] } });
```