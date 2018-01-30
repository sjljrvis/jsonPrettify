# jsonPrettify

## Usage


```
const Pretiffy = require('./jsonPretiffy/jsonPretiffy')

let uglyJSON = '{ "name":"John", "age":30,a:[1,2,3,4,4,4],"city":"New York"}' ;

let pretiffiedJSON  = new Pretiffy(uglyJSON).prettyJson() ;
console.log(pretiffiedJSON) // check output
```
Output
```
{
         "name":"John",
         "age":30,
        a:[
                1,
                2,
                3,
                4,
                4,
                4
        ],
        "city":"New York"
}
```