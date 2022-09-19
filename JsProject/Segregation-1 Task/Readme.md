
 # Segregation-1 Task

- In this task we are using only javaScript to Work on learning methods of objects

## Input

```javascript

const obj = {
    'name1': 'sec-a',
    'name2': 'sec-a',
    'name3': 'sec-c',
    'name4': 'sec-a',
    'name5': 'sec-c',
};
```
## Output

```javascript
{
   'sec-a': { count: 3, names: [ 'name1', 'name2', 'name4' ] },
   'sec-c': { count: 2, names: [ 'name3', 'name5' ] }
}

```