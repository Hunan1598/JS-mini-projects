//Homework JSON

// let a = localStorage.getItem('data')


// a = JSON.parse(a)
// let h = document.createElement('h1')
// let hh = document.createElement('h2')

// h.innerHTML = a.key1 
// hh.innerHTML = a.key2

// document.body.append(h)
// document.body.append(hh)

//Homework JSON END



// hashvel erexaneri qanake

// class Employee{
//     constructor(a,b,c){
//         this.name = a
//         this.surname = b
//         this.counChild = c

//     }
//     show(){

//     }
// }
// let a1 = new Employee('Alik', 'Martirosyan',6)

// let a2 = new Employee('Nareg','Gevorgyan', 5)

// let a3 = new Employee('Anahit', 'Matevosyan', 4)

// let a4 = new Employee('Diana', 'Avetisyan', 7)

// let a5 = new Employee('Artak', 'Rostomyan', 3)

// let a6 = new Employee('Norik', 'Avetyan', 8)
 
// let arr = []
// arr.push(a1,a2,a3,a4,a5,a6)
// arr.forEach(function(item){
//     console.log(item.counChild)
//     if(item.counChild > 5 ){
//         hh.innerHTML += item.name + '<br>'
//     }
// })
// hashvel erexaneri qanake End




 
  //Homework 6 Emaili verjin tarere
//  class User{
//      constructor(a,b,c){
//          this.name = a
//          this.email = b
//          this.password = c
//          return new Proxy(this,{
//              get: function(o,f){
//                  if(f == 'password')
//                  o[f] = o[f].split('')
//                  for(let i = 0; i<o[f].length; i++){
//                      if(f.length > 4){
//                          for(let j = 0; j<o[f].length - 4; j++){
//                              o[f][j] = '#'
//                          }
//                          o[f] = o[f].join('');
//                          return o[f];
//                      }
//                  }
//              },
//              set: function(o,f,v){
//                  if(o.hasOwnProperty(f) && f == 'email'){
//                      throw new Error('Nman Dasht Cheq karox Avelacnel')
//                  }
//              }

//          })
//      }
//  }
//  let obj1 = new User('Arman','arman@maul.ru','55667788')
//  console.log(obj1.password)
//  obj1.email = 'gsdgsd'
//  console.log(obj1.email)




    //Homework 6 email i verjin tarere End


    //Homework 7 lezuner

    // class Developer{
    //     constructor(a,b,c,d){
    //         this.name = a
    //         this.surname = b
    //         this.skills = c
    //         this.salary = d

    //         let l = document.createElement('li')
    //         l.innerHTML = this.name += this.surname += this.skills +='<br>'
    //         document.body.append(l)
    //     }
    // }
    // let obj1 = new Developer('Ani','Sargsyan','HTML,CSS,JavaScript',120000)
    // console.log(obj1)

    //Homework 7 lezunerEnd





    //    class Developer{
    //     constructor(a,b,c,d){
    //         this.name = a
    //         this.surname = b
    //         this.skills = c
    //         this.salary = d

            
    //     }
    // }
    // let obj1 = new Developer('Ani','Sargsyan','HTML,CSS,JavaScript',120000)
    // console.log(obj1)

    // class Backend extends Developer{
    //     constructor(a,b,c,d,f){
    //         super(a,b,c,d)
    //         this.direction = f
    //     }
    // }
    // let obj2 = new Backend('Artak','Barseghyan','HTML,CSS,JavaScript',135000,'frontend')
    // console.log(obj2)

    // class Frontend extends Developer{
    //     constructor(a,b,c,d){
    //         super(a,b,c,d)
    //     }
    // }
    // let obj3 = new Frontend('Tatev','Arevyan','PHP,JAVA,NODEJS',225000)
    // console.log(obj3)
    // let arr = []
    // arr.push(Backend,Frontend)
    // for(let i = 0; i<=Backend.length; i++){
    //     for(j = 0; j<Frontend.length; j++){
    //         if(i[0] > j[0]){
    //             this.name

    //         }else{
    //             false
    //         }
    //     }
    // }
    // console.log(arr.push())
   



                        //TO Do List

// let addToDoButton = document.getElementById('addToDo')
// let toDoContainer = document.getElementById('toDoContainer')
// let inputField = document.getElementById('inputField')

// addToDoButton.addEventListener('click', function(){
//     let paragraph = document.createElement('p')
//     paragraph.classList.add('paragraph-styling');
//     paragraph.innerHTML = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     inputField.value = '';
//     paragraph.addEventListener('click', function(){
//         paragraph.style.textDecoration = 'line-through';
//     })
//     paragraph.addEventListener('dblclick',function(){
//         toDoContainer.removeChild(paragraph);
//     })
// })
                       // TO Do List End

  
//  class Project{
//      constructor(a,b){
//          this.name = a
//          this.languages = b
//      }
//  }
//  let d1 = document.querySelector('.d1').innerHTML += d1.value
//  let obj1 = new Project('Tatev', 'English')


//  class Developer{
    
//      constructor(c,d,f,g){
//          this.name = c
//          this.surname = d
//          this.photo = f
//          this.projects = []
//      }
     
//      addProject(x){
//          this.projects.push(x.name);
//          this.projects.push(x.languages);

        
//      }
//  }
//  let obj2 = new Developer ('Diana','Avetisyan',' ', [])
//  console.log(obj2)

 

 

























    