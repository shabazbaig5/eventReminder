
console.log('script loaded');
var date = new Date();
console.log(date.getDate());
// deleteEvent = (e) => {
//     console.log('clicked');
//     console.log(e);
//     console.loh(e.target.value);
//     // fetch('/deleteEvent')
//     //     .then(() => {

//     //     })
// }


var eventList = document.querySelectorAll('.centerPaper p');


eventList.forEach((list) => {
    list.addEventListener('click',(e) => {
        let str = e.target.innerHTML;
        console.log(e.target.innerHTML);
        for(let i= 0; i<str.length; i++){
            if(str[i]===':'){
                str = str.slice(0,i-1);
                break;
            }
        }
    
        fetch(`/deleteEvent/${str}`)
            .then((result) => {
                
                return result;
            }).then((result) => {
               location.reload();
            })
        console.log(str);
        console.log(str.length);
    });
});



console.log(eventList);



// let centerPaper = document.querySelector('.centerPaper');

// let para = centerPaper.querySelector('p');




// eventList.addEventListener('click', (e) => {
//     let str = e.target.innerHTML;
//     console.log(e.target.innerHTML);
//     for(let i= 0; i<str.length; i++){
//         if(str[i]===':'){
//             str = str.slice(0,i-1);
//             break;
//         }
//     }

//     fetch(`/deleteEvent/${str}`)
//         .then((result) => {
            
//             return result;
//         }).then((result) => {
//            location.reload();
//         })
//     console.log(str);
//     console.log(str.length);
// });

// event.onclick = (e) => {
//     let str = e.target.innerHTML;
//     console.log(e.target.innerHTML);
//     for(let i= 0; i<str.length; i++){
//         if(str[i]===':'){
//             str = str.slice(0,i-1);
//             break;
//         }
//     }

//     fetch(`/deleteEvent/${str}`)
//         .then((result) => {
//             // r    
//             return result;
//         }).then((result) => {
//             console.log(result);
//         })
//     console.log(str);
//     console.log(str.length);
// }
