// function myFunc() {
//   //alert("hi");
//     var x = document.getElementById("fourdiv");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function myfunction(first) {
//     deletePreviousDivs();
//     for (var i = 1; i <= first; i++) {
//       var div = document.createElement("div");

//       div.id = 'dynamicdiv';
// div.innerHTML =  i+"." + "   " + 'ITEM';
// div.className = 'border pad';
// // div.style.background="grey";
// // div.style.color="black";


//            document.body.appendChild(div);
// }

// }

// var user_input = document.getElementById('first');
// var PageNumber = document.getElementById('current');
// var forward =document.getElementById('box-2');
// var backward = document.getElementById('box-1');
// var firstPage=1;
// var allowedDivs=3;
// var currentPage = firstPage;
// var lastPage = firstPage;

// // var b= document.getElementById("first");
// // lastpage =b/3;

// forward.addEventListener('click', ()=>{
//   alert("clicked");
//   console.log(currentPage);
//   if(currentPage<lastPage){
//       currentPage++;
//        alert("Changed Current Page F:"+currentPage);
//       PageNumber.innerText="Current Page: "+currentPage;
//       renderCurrentPage(currentPage);
//   }
// })

// backward.addEventListener('click', ()=>{
//   if(currentPage>1){
//       currentPage--;
//       alert("Changed Current Page B:"+currentPage);
//       PageNumber.innerText="Current Page: "+currentPage;
//       renderCurrentPage(currentPage);
//   }
// })

// user_input.addEventListener('change', ()=>{
//   //alert(user_input.value);
//   currentPage=1;
//   lastPage=Math.ceil(user_input.value/3);
//   //alert("Changed Current Page :"+currentPage);
//   alert("Changed Last Page :"+lastPage);
//   PageNumber.innerText="Current Page: "+currentPage;
//   renderCurrentPage(currentPage);
// })

// createDiv = (divNumberGlobal, divPageID, divNumberLocal) => {
        
//   let newDiv=document.createElement('div');
//   let newNumberDiv=document.createElement('div');
//   let divHeading=document.createElement('h3');
//   let diskHeading=document.createElement('h4');
//   let diskHeadingContent=document.createTextNode(divNumberGlobal);
//   let headingContent=document.createTextNode("ITEM " + divPageID+ divNumberLocal);

//   divHeading.appendChild(headingContent);
//   diskHeading.appendChild(diskHeadingContent);
//   newNumberDiv.appendChild(diskHeading);
//   newDiv.appendChild(newNumberDiv);
//   newDiv.appendChild(divHeading);

//   newDiv.classList.add('div-generated');
//   newNumberDiv.classList.add('disk-number');
//   divHeading.classList.add('text-div'); 
  
//   return newDiv;
// }

//   deletePreviousDivs=() => {
//   var all_div_generated = document.querySelectorAll('div-generated');
// //alert(all_div_generated.length);
//   for(var i=0;i<all_div_generated.length;i++){
//       all_div_generated[i].parentNode.removeChild(all_div_generated[i]);
//       console.log(i);
//   }
// }



// renderCurrentPage=(currentPage) => {
//   deletePreviousDivs();

//   let rightContainer = document.querySelector('.dynamic-div-container');
//   let block_number=(currentPage-firstPage)*allowedDivs+firstPage;
//   for(var i=1;i<=allowedDivs && block_number<=user_input.value;i++){
//     newDiv = createDiv(block_number, String.fromCharCode(currentPage+64), i);
//     rightContainer.appendChild(newDiv);
//       block_number++;
//   }
// }



//<button onclick="myfunction(document.getElementById('first').value)">submit</button> 



var quantity_input = document.getElementById('first');
var PageNumber = document.getElementById('current');
var forwardButton=document.getElementById('box-2');
var backwardButton = document.getElementById('box-1');
var firstPage=1;
var allowedDivs=3;
var currentPage = firstPage;
var lastPage = firstPage;

// alert("Begin :"+currentPage);
// alert("Begin :"+lastPage);

forwardButton.addEventListener('click', ()=>{
  alert("clicked");
  console.log(currentPage);
  if(currentPage<lastPage){
      currentPage++;
       alert("Changed Current Page F:"+currentPage);
      PageNumber.innerText="Current Page: "+currentPage;
      renderCurrentPage(currentPage);
  }
})

backwardButton.addEventListener('click', ()=>{
  if(currentPage>1){
      currentPage--;
      alert("Changed Current Page B:"+currentPage);
      PageNumber.innerText="Current Page: "+currentPage;
      renderCurrentPage(currentPage);
  }
})

quantity_input.addEventListener('change', ()=>{
  //alert(user_input.value);
  currentPage=1;
  lastPage=Math.ceil(quantity_input.value/3);
  //alert("Changed Current Page :"+currentPage);
  alert("Changed Last Page :"+lastPage);
  PageNumber.innerText="Current Page: "+currentPage;
  renderCurrentPage(currentPage);
})

createDiv = (divNumberGlobal, divPageID) => {

    let newDiv=document.createElement('div');
    let newNumberDiv=document.createElement('div');
    let divHeading=document.createElement('h3');
    let diskHeading=document.createElement('h4');
    let diskHeadingContent=document.createTextNode(divNumberGlobal);
    let headingContent=document.createTextNode("ITEM " +"A" + divPageID);

    divHeading.appendChild(headingContent);
    diskHeading.appendChild(diskHeadingContent);
    newNumberDiv.appendChild(diskHeading);
    newDiv.appendChild(newNumberDiv);
    newDiv.appendChild(divHeading);

    newDiv.classList.add('div-generated');
    newNumberDiv.classList.add('disk-number');
    divHeading.classList.add('text-div'); 
    
    return newDiv;
}

deletePreviousDivs=() => {
    var all_div_generated = document.querySelectorAll('.div-generated');

    for(var i=0;i<all_div_generated.length;i++){
        all_div_generated[i].parentNode.removeChild(all_div_generated[i]);
    }
}

renderCurrentPage=(currentPage) => {
    deletePreviousDivs();

    let rightContainer = document.querySelector('.dynamic-div-container');
    let block_number=(currentPage-firstPage)*allowedDivs+firstPage;
    for(var i=1;i<=allowedDivs && block_number<=quantity_input.value;i++){
        newDiv = createDiv(block_number, String.fromCharCode(currentPage+64), i);
        rightContainer.appendChild(newDiv);
        block_number++;
    }
}
        