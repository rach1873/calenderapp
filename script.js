const gridArray = document.querySelectorAll('.grid');
const calendarMonths = document.querySelectorAll('.calendarMonths');
const calendarYear = document.querySelectorAll('.calendarYear');
const sideBar = document.querySelectorAll('.sidebar');
const menu = document.getElementById('menu');
const calendarDays = document.querySelectorAll('.day');
const modal = document.getElementById('modal');
const submit= document.getElementById('submit');
const cancel= document.getElementById('cancel');
const dayEvent = document.getElementById('day-event');
const time = document.getElementById('time');
const where = document.getElementById('where');
const inputs = document.querySelectorAll('input');
const rightSide = document.getElementById('right-side-bar');
const save = document.getElementById('save');
const dte = document.getElementById('dte');
const modal2= document.getElementById('modal-2');
const cancel2= document.getElementById('cancel2');
const hoverDate = document.getElementById('hover-date');
const hoverEvent = document.getElementById('hover-event');
const hoverTime = document.getElementById('hover-time');
const hoverWhere = document.getElementById('hover-where');
const topHover = document.getElementById('top-hover');
const topDate = document.getElementById('top-date')
const topEvent = document.getElementById('top-event')
const topTime = document.getElementById('top-time')
const topWhere = document.getElementById('top-where')
 



const dayEvent2 = document.getElementById('day-event2');
const time2 = document.getElementById('time2'); 
const where2 = document.getElementById('where2')
const dte2 = document.getElementById('dte2');


let currentID;
let currentDate;

const events = JSON.parse(localStorage.getItem('events')) || [];

sortList(events);


const sun = 0;
const mon = 1;
const tues = 2;
const wed= 3;
const thurs = 4;
const fri = 5;
const sat = 6;

const days =['sun','mon','tues','wed','thurs','fri','sat'];

const months = {
    'January': 0,
    'February':1,
    'March':2,
    'April':3,
    'May':4,
    'June':5,
    'July':6,
    'August':7,
    'September':8,
    'October': 9,
    'November': 10,
    'December': 11

}

const meses = ['january','february','march','april','may','june','july','august','september','october','november','december'];


const calendar = [
    {   
        
        month: 'January',
        year: function getYear() {

            const dte = new Date();
            return dte.getFullYear();
        },

        firstDay: function getFirst() {
            const dte = new Date();
            const year = dte.getFullYear();

            return days[new Date(year,months[this.month],1).getDay()];
        },

        days: function getDays()  {
            const dte = new Date();
            const year = dte.getFullYear();

            return new Date(year, months[this.month]+1, 0).getDate();
            
        }
       
           
    },
    {
        month: 'February',
        year: function getYear() {

            const dte = new Date();
            return dte.getFullYear();
        },

        firstDay: function getFirst() {
            const dte = new Date();
            const year = dte.getFullYear();

            return days[new Date(year,months[this.month],1).getDay()];
        },

        days: function getDays()  {
            const dte = new Date();
            const year = dte.getFullYear();

            return new Date(year, months[this.month]+1, 0).getDate();
            
        }
           
    },
    {
        month: 'March',
        year: function getYear() {

            const dte = new Date();
            return dte.getFullYear();
        },

        firstDay: function getFirst() {
            const dte = new Date();
            const year = dte.getFullYear();

            return days[new Date(year,months[this.month],1).getDay()];
        },

        days: function getDays()  {
            const dte = new Date();
            const year = dte.getFullYear();

            return new Date(year, months[this.month]+1, 0).getDate();
            
        }
           
    },
    {
        month: 'April',
        year: function getYear() {

            const dte = new Date();
            return dte.getFullYear();
        },

        firstDay: function getFirst() {
            const dte = new Date();
            const year = dte.getFullYear();

            return days[new Date(year,months[this.month],1).getDay()];
        },

        days: function getDays()  {
            const dte = new Date();
            const year = dte.getFullYear();

            return new Date(year, months[this.month]+1, 0).getDate();
            
        }
           
    },
    {
        month: 'May',
        year: function getYear() {

            const dte = new Date();
            return dte.getFullYear();
        },

        firstDay: function getFirst() {
            const dte = new Date();
            const year = dte.getFullYear();

            return days[new Date(year,months[this.month],1).getDay()];
        },

        days: function getDays()  {
            const dte = new Date();
            const year = dte.getFullYear();

            return new Date(year, months[this.month]+1, 0).getDate();
            
        }
           
    },
    {
        month: 'June',
        year: function getYear() {

            const dte = new Date();
            return dte.getFullYear();
        },

        firstDay: function getFirst() {
            const dte = new Date();
            const year = dte.getFullYear();

            return days[new Date(year,months[this.month],1).getDay()];
        },

        days: function getDays()  {
            const dte = new Date();
            const year = dte.getFullYear();

            return new Date(year, months[this.month]+1, 0).getDate();
            
        }
           
    },
    {
        month: 'July',
        year: function getYear() {

            const dte = new Date();
            return dte.getFullYear();
        },

        firstDay: function getFirst() {
            const dte = new Date();
            const year = dte.getFullYear();

            return days[new Date(year,months[this.month],1).getDay()];
        },

        days: function getDays()  {
            const dte = new Date();
            const year = dte.getFullYear();

            return new Date(year, months[this.month]+1, 0).getDate();
            
        }
           
    },
    {
        month: 'August',
        year: function getYear() {

            const dte = new Date();
            return dte.getFullYear();
        },

        firstDay: function getFirst() {
            const dte = new Date();
            const year = dte.getFullYear();

            return days[new Date(year,months[this.month],1).getDay()];
        },

        days: function getDays()  {
            const dte = new Date();
            const year = dte.getFullYear();

            return new Date(year, months[this.month]+1, 0).getDate();
            
        }
           
    },
    {
        month: 'September',
        year: function getYear() {

            const dte = new Date();
            return dte.getFullYear();
        },

        firstDay: function getFirst() {
            const dte = new Date();
            const year = dte.getFullYear();

            return days[new Date(year,months[this.month],1).getDay()];
        },

        days: function getDays()  {
            const dte = new Date();
            const year = dte.getFullYear();

            return new Date(year, months[this.month]+1, 0).getDate();
            
        }
           
    },
    {
        month: 'October',
        year: function getYear() {

            const dte = new Date();
            return dte.getFullYear();
        },

        firstDay: function getFirst() {
            const dte = new Date();
            const year = dte.getFullYear();

            return days[new Date(year,months[this.month],1).getDay()];
        },

        days: function getDays()  {
            const dte = new Date();
            const year = dte.getFullYear();

            return new Date(year, months[this.month]+1, 0).getDate();
            
        }
           
    },
    {
        month: 'November',
        year: function getYear() {

            const dte = new Date();
            return dte.getFullYear();
        },

        firstDay: function getFirst() {
            const dte = new Date();
            const year = dte.getFullYear();

            return days[new Date(year,months[this.month],1).getDay()];
        },

        days: function getDays()  {
            const dte = new Date();
            const year = dte.getFullYear();

            return new Date(year, months[this.month]+1, 0).getDate();
            
        }
           
    },
    {
        month: 'December',
        year: function getYear() {

            const dte = new Date();
            return dte.getFullYear();
        },

        firstDay: function getFirst() {
            const dte = new Date();
            const year = dte.getFullYear();

            return days[new Date(year,months[this.month],1).getDay()];
        },

        days: function getDays()  {
            const dte = new Date();
            const year = dte.getFullYear();

            return new Date(year, months[this.month]+1, 0).getDate();
            
        }
           
    }

]

//!

function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //!Get full year
function getFullYear() {
    const d = new Date();
    
    return d.getFullYear();
}
  

//!clear all forms

function clearForms() {
    inputs.forEach(input=>{
        input.value = '';
    })
}
    
//!gets the first weekday of each month. 
function addFirstWeekDays(day,index) {
    let len = day ==='sun'? 0 : day ==='mon' ? 1 : day === 'tues' ? 2 : day === 'wed' ? 3 : day === 'thurs' ? 4 : day === 'fri' ? 5 : day === 'sat' ? 6 : 'nothing';

    for(let i = 0; i<len; i++) {
        const div = document.createElement('div')

        div.setAttribute('class','day')
        div.textContent = '';
    
        gridArray[index].appendChild(div)

       
    }


    
}

//!will be used to write the other days
function addOtherDays(numOfDays,index) {
    for (let i = 0; i<numOfDays;i++) {
        const div = document.createElement('div');
        div.setAttribute('class','day')
        div.setAttribute('id',meses[index]+(i+1)) //!gives the month and day for id (ex. march2)
        div.textContent = i + 1;
        gridArray[index].appendChild(div);
    }
}



function creatingCalendar() {

    gridArray.forEach((x,i)=>{
        calendarMonths[i].textContent = calendar[i].month;
        calendarYear[i].textContent = calendar[i].year();
        addFirstWeekDays(calendar[i].firstDay(),i)
        addOtherDays(calendar[i].days(),i)

    })

}

//!shows sidebar when mouse hovers far left
window.addEventListener('mouseover',(e)=>{
    if(e.x === 0) {
        document.getElementById('sidebar').style.transform ='translateX(0)'
    } else if(e.x > window.innerWidth - 50) {
        rightSide.style.transform = 'translateX(0)'
    }
})

  

//!when mouse hovers away, sidebar is hidden
window.addEventListener('mouseout',(e)=>{
    if(e.target.className ===  'day') {
        document.getElementById('sidebar').style.transform ='translateX(-200px)'
       
    } 
})
//!Hide "rightSide" when mouse is hovered out
window.addEventListener('mouseover',(e)=>{
    if(e.target.className === 'day') {
        rightSide.style.transform = 'translateX(200px)'
    }
})

//!shows Modal
window.addEventListener('click',(e)=>{

    if(e.target.className === 'day' && e.target.textContent != '') {
       
       
        modal.classList.remove('hide-element');
       

    }



})

//!cancels Modal on screen
cancel.addEventListener('click',()=>{
    modal.classList.add('hide-element')


})

//!cancels 2nd Modal on screen   
cancel2.addEventListener('click',()=>{
    modal2.classList.add('hide-element')

    
})

//!forrms entire date using regex
window.addEventListener('click',(e)=>{

  let regex = /-grid/;
  let monthID = e.target.parentElement.id

    
    if(e.target.className === 'day' && e.target.textContent != '') {

        currentID= e.target.id;
        currentDate = toCapitalize(monthID.replace(regex,"")) + " " + e.target.textContent + "," + " " + getFullYear();    
       
    }

})


submit.addEventListener('click',(e)=>{

    const calendarEvent = {
        date: `${currentDate}`,
        event: '',
        time: '',
        where:'',
        id: `${currentID}`
    };

    calendarEvent.event = dayEvent.value;
    calendarEvent.time = time.value;
    calendarEvent.where = where.value;
   
          
        
    events.push(calendarEvent);

    sortList(events);

    // const div = document.createElement('div');
    // const h3 = document.createElement('h3');
    // const p1  = document.createElement('p');
    // const p2  = document.createElement('p');
    // const p3  = document.createElement('p');
    // const h4 = document.createElement('h4');
    // const edit=  document.createElement('h4'); 
   
    
   
    
    
    
    // div.setAttribute('id',currentDate);
   
   

    // h3.textContent = currentDate;
    // p1.textContent = calendarEvent.event;
    // p2.textContent = calendarEvent.time;
    // p3.textContent = calendarEvent.where;
    
    


    
    // h4.textContent = 'Remove Event'
    // edit.textContent = 'Edit Event' 


    

    // h4.setAttribute('class','remove-event');
    // edit.setAttribute('class','edit-event'); 
   

    

    // div.appendChild(h3);
    // div.appendChild(p1);
    // div.appendChild(p2);
    // div.appendChild(p3);
    // div.appendChild(h4);
    // div.appendChild(edit); 

   
    
    
    
    
    // rightSide.appendChild(div)

    writeDaysToPage();


    clearForms();
    document.getElementById(currentID).style.background = '#9AF2C1'
    modal.classList.add('hide-element')

     
    localStorage.setItem('events',JSON.stringify(events))

})    
    
//! writes elements to page
function writeDaysToPage() {
    rightSide.innerHTML = events.map(x=>{
        return `
        
            <div id='${x.date}' class='planned-event'>
                <h3>${x.date}</h3>
                <p>${x.event}</p>
                <p>${x.time}</p>
                <p>${x.where}</p>
                <h4 class='remove-event'>Remove Event</h4>
                <h4 class='edit-event'>Edit Event</h4> 
                
                    
            </div>
        
        
        
        `
    }).join("")

   

}

//!check repeats

function checkRepeats(date_string) {
    let counter = 0;    
    for(let i = 0; i < events.length; i++) {
        if(date_string === events[i].date) {
            counter++
        }
    }

    return 'event' + (counter+1);
}

//!green highlight on event days    

function highlight() {
    events.forEach(x=>{
        document.getElementById(x.id).style.background = '#9AF2C1'
    })
}


//!removes event from 'rightSide

rightSide.addEventListener('click', function(e){

   const current_id =  e.target.parentElement.id
   const classname = e.target.className;
   const index = events.findIndex(x=>x.date===current_id);

   if(classname==='remove-event') {
        

        //clears background color of cell on page to gray
        document.getElementById(events[index].id).style.background = '#4b4b4b'; 

        //removes element from array 'events'
        events.splice(index,1);

        //remove element from 'rightSide'
        document.getElementById(current_id).remove();

   }

   localStorage.setItem('events',JSON.stringify(events));
  
}) 


//!editing event
rightSide.addEventListener('click',(e)=>{

    const parentKey = e.target.parentElement.id;
    const index = events.findIndex(x=>x.date===parentKey);

    currentDate = events[index].date;
    currentID = events[index].id;


    if(e.target.className === 'edit-event') {

  

        modal2.classList.remove('hide-element');


        dte2.value = events[index].date
        dte2.disabled = true;
        dayEvent2.value = events[index].event;
        time2.value = events[index].time;
        where2.value = events[index].where;
        
    }
})

//!saving event
save.addEventListener('click',()=>{

    const index = events.findIndex(x=>x.date === currentDate)

    //!update events array with new values

    events[index].date = dte2.value
    events[index].event = dayEvent2.value
    events[index].time = time2.value;
    events[index].where = where2.value;

    //!update localStorage

    localStorage.setItem('events',JSON.stringify(events));

    //!update rightside of screen       

    window.location.reload();

    //!removes modal2 from screen
    modal2.classList.add('hide-element')

   
})

//!sorts list in order
function sortListBtn() {
    sortList(events);
    writeDaysToPage();

}


function sortList(arr) {


    arr.sort(function(a,b){

    return new Date(a.date) - new Date(b.date)

    })


}


//!hovered event mouseover
// gridArray.forEach(function(day){
//     day.addEventListener('mouseover', function(e){
//         let dayKey = e.target.id;
//         let findDay = events.findIndex(x=>x.id === dayKey)

//         if(e.target.style.background === "rgb(154, 242, 193)") {

//             hoverDate.textContent = events[findDay].date
//             hoverEvent.textContent = events[findDay].event
//             hoverTime.textContent = events[findDay].time
//             hoverWhere.textContent = events[findDay].where


//             document.getElementById('side-months').style.maxHeight = 0;
//             document.getElementById('side-months').style.opacity = 0;

//             document.getElementById('sidebar').style.transform ='translateX(0)'


          
//         }
//     })
// })

//!hover event mouseover from top
gridArray.forEach(function(day){
    day.addEventListener('mouseover', function(e){
        let dayKey = e.target.id;
        let findDay = events.findIndex(x=>x.id === dayKey)
        let x = e.x;
        let y = e.y;


        if(e.target.style.background === "rgb(154, 242, 193)") {

            topDate.textContent = events[findDay].date
            topEvent.textContent = events[findDay].event
            topTime.textContent = events[findDay].time
            topWhere.textContent = events[findDay].where


           topHover.style.transform = 'translateY(0)';

        
           


          
        }
    })
})

// //!hovered event mouseout from left
// gridArray.forEach(function(day){
//     day.addEventListener('mouseout', function(e){
//         let dayKey = e.target.id;
//         let findDay = events.findIndex(x=>x.id === dayKey)

//         if(e.target.style.background !== "rgb(154, 242, 193)") {


//                 hoverDate.textContent = ""
//                 hoverEvent.textContent = ""
//                 hoverTime.textContent = ""
//                 hoverWhere.textContent = ""

//                 document.getElementById('side-months').style.maxHeight = '100%';
//                 document.getElementById('side-months').style.opacity = 1;
          
            

//             document.getElementById('sidebar').style.transform ='translateX(0)'


          
//         }
//     })
// })


//!hovered event mouseout from top
gridArray.forEach(function(day){
    day.addEventListener('mouseout', function(e){
        let dayKey = e.target.id;
        let findDay = events.findIndex(x=>x.id === dayKey)

        if(e.target.style.background !== "rgb(154, 242, 193)") {


                // hoverDate.textContent = ""
                // hoverEvent.textContent = ""
                // hoverTime.textContent = ""
                // hoverWhere.textContent = ""


            topHover.style.transform ='translateY(-200px)'


          
        }
    })
})  



console.log('brandon')

creatingCalendar(); 
writeDaysToPage();
highlight();