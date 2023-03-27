const promise1 = new Promise ((resolve, reject) =>{
    if(true){
        setTimeout(resolve, 4000, 'Success1')
    } else {
        reject('Error, this is a problem.');
    }
})
promise1.then(result => console.log(result));

const promise3 = Promise.resolve('success2');
promise3.then((value) => {
    setTimeout(() => {
        console.log(value);
      }, 4000);
});

const promise4 = Promise.reject('failed');
promise4
.catch(() => console.log('Ooops soemthing went wrong'))
.then((value) => {
    setTimeout(() => {
        console.log(value);
      }, 4000);
});

const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
  ]

  Promise.all(urls.map( url => {
    return fetch(url).then(resp=> resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
    console.log(results[3])
}).catch(() => console.log('whopsy!!!'))
  


