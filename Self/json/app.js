let emp = `  {
    "students": [
        {
            "firstName": "john",
            "lastName": "Weel"
        },
        {
            "firstName": "Vishal",
            "lastName": "Chavda"
        },
        {
            "firstName": "rinkal",
            "lastName": "soni"
        }
    ]
}`


//This is the form which comes from json
let emp1 = `  {
    "students": [
        {
            "firstName": "john",
            "lastName": "Weel"
        },
        {
            "firstName": "Vishal",
            "lastName": "Chavda"
        },
        {
            "firstName": "rinkal",
            "lastName": "soni"
        }
    ]
}`

//This is the method to access json data
let eobj = JSON.parse(emp);

     (eobj["students"][0].firstName = "azim");
     console.log(eobj["students"][0].firstName);

//


