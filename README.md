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

### use json data 

> npx json-server --watch  data/db.json --port 8613

### hook useEffect

```js
useEffect(()=>{},[])
```

> npm install react-router-dom@6


### useEffect clean up 

> https://juejin.cn/post/7070703117817348109
> https://codedamn.com/news/reactjs/useeffect-cleanup
> https://developer.mozilla.org/en-US/docs/Web/API/AbortController/AbortController
> https://www.educative.io/answers/how-to-abort-a-fetch-request-using-the-abortcontroller
> 