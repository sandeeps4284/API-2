/**
 * 
 * EasyHTTP library
 * Library for making HTTP requests
 * 
 * 
 * @version 2.0.0
 * @author Sandeep
 * @license MIT
 * 
 * 
 **/


class EasyHTTP{
    get(url){
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        })
    }

    post(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        })
    }
}
//custom library using ajax

// function easyHTTP(){
//     this.http = new XMLHttpRequest();
// }

// easyHTTP.prototype.get = function(url){
//     this.http.open('GET',url,true);

//     this.http.onload= () => {
//         if(this.http.status === 200){
//             console.log(this.http.responseText);
//         }
//     }

//     this.http.send();
// }

