<<<<<<< HEAD
# Dojo blog


File Import
  
    index.js 
      ---> App.js
           ---> Home.js
                -->BlogList.js
           ---> Navbar.js

one file is one of compents and dirtry their comation


### inline styling
`style={{}}` and inside `{}` is the style 
```js
  <a href="/crate" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>
```
### automatically invoke
` handleClick()` it going to invoke this automatically, without the user event clikcing on it 
```js
 <button onClick={handleClick()}>Click me</button> 
  ```
### pass parameter use closure

```
 const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.traget);
    }
   <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>

```

### setState 
```js
 const [name, setName] = useState('mario');
    const [age, setAge] = useState(9);
    const handleClick = (e) => {
        setName('luigi');
        setAge(103);
    };

    .....

    <p>{name} is {age} year old</p>
     <button onClick={handleClick}>Click me</button>
```

cross compments pass pramter


npx json-server --watch  data/db.json --port 8613
=======
# Tuts-react
react tutorial 
>>>>>>> 5aa902f4f0cb6db00aa796ad6fce40449daa5592
