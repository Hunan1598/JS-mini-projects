// let sum = 0
// for (let i = 0;i<=10;i++){
//     if(1 % 2 === 1){

//     }
//     console.log(sum);
// }







    // let min = 0;
    // let x= [1,5,8,0]
    // max = x[0]
    // for(let i = 0;i<=x.length;i++){
    //     if(max < x[i]){
    //         max = x[i]
    //     }
    // }
    // console.log(max);




    // let max = 0;
    // let x = [1,5,8,9,12,36,58]
    // max = x[0]
    // for(let i = 0;i<=x.length;i++){
    //     if (max < x[i]){
    //         max = x[i]
    //     }
    // }
    // console.log(max);



    
    // let min = 0;
    // let x = [5,23,87,69,1,33,123]
    // min = x[0]
    // for(let i = 0;i <= x.length;i++){
    //     if(min > x[i]){
    //         min = x[i]
    //     }
    // }
    // console.log(min);




    

    // let f = document.querySelectorAll('.k')
    // for(let i = 0; i < f.length; i++){
    //     f[i].addEventListener('click',f)
    // }
    // function f(){
    //     for(let i = 0; i< 0; i++){

    //     }
    // }










// change colors:


    // let colors = ['red','yellow','blue','green','brown','orange','black'];

    // let button = document.getElementById('button');

    // button.addEventListener('click',function(){

    //     let randomColor = colors[Math.floor(Math.random() * colors.length)]

    //     let container = document.getElementById('container');

    //     container.style.background = randomColor;

    // })



    //end

    






        //Task 2;
      //vords clcik color

    // let btnPrimary = document.querySelector('#primary');
    // let btnDanger = document.querySelector('#danger');
    // let btnSuccess = document.querySelector('#success');


    // btnPrimary.addEventListener('click',() => btnPrimary.style.backgroundColor='green' )
    // btnDanger.addEventListener('click',() => btnDanger.style.backgroundColor='red')
    // btnSuccess.addEventListener('click',() => btnSuccess.style.backgroundColor='orange' )
    

    // End








    //Homework 2


    // let img = document.querySelector('img');
    // let btn1 = document.querySelector('#btn1');
    // let btn2 = document.querySelector('#btn2');
    // let btn3 = document.querySelector('#btn3');
    // let btn4 = document.querySelector('#btn4');
    // let btn5 = document.querySelector('#btn5');


    // btn1.addEventListener('click',() => {
    //   img.src = 'https://iso.500px.com/wp-content/uploads/2016/02/stock-photo-141823007-1500x1000.jpg';
    // })  


    // btn2.addEventListener('click',() => {
    //   img.src = 'https://tse3.mm.bing.net/th?id=OIP.Y8rD_z4Vifd0VZuTbk5qEQHaEK&pid=Api&P=0&w=304&h=172';
    // }) 


    // btn3.addEventListener('click',() => {
    //   img.src = 'https://tse1.mm.bing.net/th?id=OIP.PuIZTV6-yHY5zNgYcH2ZMQHaEm&pid=Api&P=0&w=285&h=178';
    // }) 


    // btn4.addEventListener('click',() => {
    //   img.src = 'https://tse3.mm.bing.net/th?id=OIP.S-SOtVa6Ecs6K0w-KtLXFwHaEo&pid=Api&P=0&w=296&h=186';
    // }) 

    // btn5.addEventListener('click',() => {
    //   img.src = 'https://tse1.mm.bing.net/th?id=OIP.mGKSz4HBV7oGUTjjDpPn7gHaE8&pid=Api&P=0&w=257&h=173';
    // }) 

  //  homework 2 End 






                // homework 3  inp  

  // function calc(){
  //   let a = parseInt(document.querySelector('#value1').value);
  //   let b = parseInt(document.querySelector('#value2').value);
  //   let op = document.querySelector('#operator').value;
  //   let calculate;

  //   if (op == 'add') {
  //     calculate = a + b;

  //   }else if( op == 'min') {
  //     calculate = a - b;

  //   }else if(op == 'div') {
  //     calculate = a / b;

  //   }else if(op == 'mul') {
  //     calculate = a * b;

  //   }

  //   document.querySelector('#result').innerHTML = calculate;
  // }
  
  // homework 3 End inp
  
  // homework 4 slide show 

  // let slider_img = document.querySelector('.slider-img');
  // let images = ['b.jpg.jpg', 'c.jpg.jpg', 'd.jpg.jpg', 'f.jpg.jpg', 'g.jpg.jpg'];
  // let i = 0;

  // function prev(){
  //   if(i <= 0) i = images.length;
  //   i--;
  //   return setImg();

  // }

  // function next(){
  //   if(i >= images.length - 1) i = -1;
  //   i++;
  //   return setImg(); 

  // }



  // function setImg(){
  //   return slider_img.setAttribute('src', 'images/' + images[i]);
  // }
  
  // homework 4 slide show End 




  // homework 5

  // function red(){
  //   document.querySelector('#header').style.color = 'red';

  // }

  // function green(){
  //   document.querySelector('#header').style.color = 'green';
  //     }

  //     function orange(){
  //       document.querySelector('#header').style.color = 'orange';
  //     }
  
  // homework 5 End 


  // homework 6 palindrome
  // let text = document.getElementById('text');
  // let userInput = document.getElementById('userInput');
  // let isPalindrome = document.getElementById('isPalindrome');

  // function checkPalindrome(){
  //   let regularExpression = /[\W_]/g;
  //   let lowerRegValue = text.value.toLowerCase().replace(regularExpression,'');
  //   let reverseValue = lowerRegValue.split('').reverse().join('');

  //   if(reverseValue === lowerRegValue){
  //     if(text.value != ''){
  //       isPalindrome.classList.remove('false');
  //       isPalindrome.classList.add('true');
  //       isPalindrome.innerHTML = 'Պալինդրոմ է ';
  //       userInput.innerHTML = text.value;
  //     }
  //     else{

  //     }

  //   }
  //   else{
  //     isPalindrome.classList.remove('true');
  //     isPalindrome.classList.add('false');
  //     isPalindrome.innerHTML = 'Սա Պալինդրոմ չէ';
  //     userInput.innerHTML = text.value;
  //   }
  // }
      
  // homework 6 palindrome End 


  // homework 7 Match 

  // let users = ['David','Narek','Armen', 'Tigran', 'Karen','Tigran', 'Karen', 'Artur' ,'Rob', 'Rob'];
  // function addUsers(usernames){
  // let template = usernames.map(user => `<li>${user}</li>`).join('\n');
  // document.querySelector('ul').innerHTML = template;

  // }
  // addUsers(users);

  //  let btnGet = document.querySelector('button');

  //  btnGet.addEventListener('click', ()=>{
  //    let usernames = users.filter((user, index) => users.indexOf(user) != index);
  //    let set = new Set(usernames);
  //    usernames = Array.from(set)
  //    addUsers(usernames);
  //  });




  // homework 7 match End 

// tveri fctorial 8 homework
//   function factorial(x) 
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// console.log(factorial(5));

//tveri faktorial 8 End 

// homework 9 tveri astichannere 
// function pow(base,exp){
//   if( exp === 0){
//     return 1;
//   }else{
//     const res = base * pow(base, exp - 1)
//     return res
//   }
// }
// console.log(pow(3, 3))

// homework 9 tveri astichannere End 

// homework 10 kent ev zuyg

// function isEven(number){
//   switch(number){
//     case 0:
//       return true;
//       case 1:
//         return false;
//         default:
//           return isEven(number - 2)
//   }
// }
// console.log(isEven(1))
// homework 10 kent ev zuyg End 

 

 


    // tveri factoryalneri gumare No11


// function sum(num){
//   if(num > 0){
//     return num + sum(num - 1);
//   }else{
//     return num;
//   }
// }
// let res = sum(2);
// console.log(res);


// tveri factoryalneri gumare No11 End




                            // Arrow functions   start 


// tvere avelanum en 10 ov Homework 12

// let num = [1,2,3,4]
// num = num.map(function(a) {
//   return a+10
  
// })
// console.log(num)
// tvere avelanum en 10 ov Homework 12 End 


// tpvum en ayn tvere voronq met en 10ic Homework 13

// let num = [1,4,11,14,8,15,3,5,25,7,9,33]
// num = num.filter(num=> num>10)
// console.log(num)
// tpvum en ayn tvere voronq met en 10ic Homework 13 End


  // sortavorum @st A tari Homework 14
// let names = ['Arsen','Tigran','Robert','Artur','Karen','Arman','Artak']
// names = names.sort()
// console.log(names)
 // sortavorum @st A tari Homework 14 End 

// veradarznum e mez drakan tvere homework 15
// let numbers = [1,4,-3,2,-5,7,-4,9]
// numbers = numbers.filter(numbers=> numbers > 0 )

// console.log(numbers)
// veradarznum e mez drakan tvere homework 15 End 


// Random anunner Homework 16 
// let btnRandom = document.querySelector('button')
// let result = document.querySelector('h1')

// let users = ['Messi','Alba','Griezman','Dembele','Ter Stegen','Pique','Fati','Pyanich']

// function getRandomNumber(min ,max){
//   let step1 = max - min + 1;
//   let step2 = Math.random() * step1;
//   let result = Math.floor(step2) + min;

//   return result
// }
// btnRandom.addEventListener('click',()=>{
//   let index = getRandomNumber(0, users.length - 1);
//   result.innerHTML = users[index];

// });
// Random anunner Homework 16 End


        // Random diver Homework 17 
// let r
// let g
// let b 
// let color 
// let w 
// let h 

// document.addEventListener('click', (e)=>{
//   let div2 = document.createElement('div')
//   r = Math.floor((Math.random() *256))
//   g = Math.floor((Math.random() *256))
//   b = Math.floor((Math.random() *256))

//   color = `rgb(${r}, ${g}, ${b})`

//   w = Math.floor((Math.random() *300))
//   h = Math.floor((Math.random() *300))

//   div2.style = `background: ${color}; width:${w}px; height:${h}px; position:bsolute; left:${e.pageX}px; top:${e.pageY}px;`;
//   document.body.append(div2);
// })
// Random diver Homework 17 End





// Random guyner Homework 18 


// for(i = 1; i<=100; i++){
//   const box = document.createElement('div');
//   box.classList.add('box');
//   document.querySelector('.container').appendChild(box);
// }

// const btn = document.querySelector('.btn');
// const randomColorBlock = document.querySelectorAll('.box');

// function RandomHexColorCode () {
//   let chars = '0123456789abcdef';
//   let colorLength = 6;
//   let color = '';

//   for(let i = 0; i<colorLength;i++){
//     let randomColor = Math.floor(Math.random() * chars.length);
//     color += chars.substring(randomColor,randomColor+1);

//   }
//   return '#'+color;
  
// }

// function addColor(){
//   randomColorBlock.forEach(e =>{
//     let newColor = RandomHexColorCode();
//     e.style.backgroundColor = newColor;
//   })
// }
// Random guyner Homework 18 End 



// class User{
//   constructor(a,b,c){
//     this.name = a
//     this.surname = b 
//     this.cuntChild = c

//   }
//   tpel(){
//     console.log(this.name,this.surname,this.cuntChild)
    
//     let t = this
    
//     if(t.cuntChild > 5){
//       t.name 
//       h1.innerHTML = t.name + t.surname      
//     }     
//   }
// }
// let a1 = new User('Aman','Sargsyan', 3)
// a1.tpel()
// let a2 = new User('Diana','Avetisyan',4)
// a2.tpel()
// let a3 = new User('Anahit','Arakelyan',6)
// a3.tpel()
// let a4 = new User('Tigran','Arshakyan', 7)
// a4.tpel()
// let a5 = new User('Armen','Markosyan', 2)
// a5.tpel()

// let obj = {
//   a: 4,
//   b: 4,
//   c: 4,
//   F: function (){
//     let hh = document.createElement('h1').innerHTML = this.a * this.b ;
//     document.body.append(hh)
//   },
//   Draw: function (){
//     let s2 = document.createElement('h2');
//     for(let i = 0; i<=this.a;i++){
//       for(let j = 0; j<=i; j++){
//         s2.innerHTML += '*';
//       }
//       s2.innerHTML += '<br>';
//       document.body.append(s2);
//     }
//   }
// }
// obj.F()
// obj.Draw()



                   // PYRAMIDA

// let obj = {
//   a: 4,
//   b: 4,
//   c: 4,
//   F: function(){
//     let hh = document.createElement('h1').innerHTML = this.a * this.b /2;
//   document.body.append(hh)
//   },
//   Draw: function (){
//     let s2 = document.createElement('h2')
//     for(let i = 0; i<=this.a; i++){
//       for(let j = 0; j<=i; j++){
//         s2.innerHTML += '*';
//       }
//       s2.innerHTML += '<br>';
//       document.body.append(s2)
//     }

//   },
  

  
// }
// obj.F()
// obj.Draw()
// PYRAMIDA END 

                      // TIMER 

// class Timer{
//   constructor(w,s){
//     this.rope = w
//     this.vrk = s
    
//   }
//   show(){
//     hh.innerHTML = this.rope + ':' + this.vrk
//     let t = this
//     let int = setInterval(function(){
//       t.vrk--
//       if(t.vrk < 0){
//         t.vrk = 59
//         t.rope--
//       }
//       hh.innerHTML = t.rope + ':' + t.vrk
//       if(t.rope == 0 && t.vrk ==0){
//         hh.innerHTML = t.rope
//         clearInterval(int)
//       }
//     },10)
//   }
// }
// let y = new Timer(10,15)
// y.show()
//                           // TIMER END 

//Homework JSON

//  btn.addEventListener('click',function(){
//    let text = text_inp.value;
//    let text1 = text_inp1.value;
//    let btn1 = btn.value;

//    let obj = {
//      key1: text,
//      key2: text1,
//      key3: btn1,
     
//    }
//    obj = JSON.stringify(obj)
//    localStorage.setItem('data',obj)
//    location.href = 'index2.html'

// })
//Homework JSON End
































