let da=0;
let mo=0;
let ye=0;
function getdvalue(){
let d=document.getElementById("day");
da=parseInt(d.value);
  

}
function getmvalue(){
    let m=document.getElementById("month")
     mo=parseInt(m.value);
    
    
    }
function getyvalue(){
        let y=document.getElementById("year")
         ye=parseInt(y.value);
        
       
 }
 function findAge(current_date,current_month,
current_year, birth_date,
 birth_month, birth_year){
    let month= [31, 28, 31, 30, 31, 30,
        31, 31, 30, 31, 30, 31 ];

// if birth date is greater than current date
// then do not count this month and add 30
// to the date so as to subtract the date and
// get the remaining days
if (birth_date > current_date) {
current_date
= current_date + month[birth_month - 1];
current_month = current_month - 1;
}

// if birth month exceeds current month, then do
// not count this year and add 12 to the month so
// that we can subtract and find out the difference
if (birth_month > current_month) {
current_year = current_year - 1;
current_month = current_month + 12;
}

// calculate date, month, year
let calculated_date = current_date - birth_date;
let calculated_month = current_month - birth_month;
let calculated_year = current_year - birth_year;
let dd=document.getElementById("dd");
dd.textContent=calculated_date;
console.log(calculated_date);

let mm=document.getElementById("mm");
    mm.textContent=calculated_month;
    console.log(calculated_month);


    let yy=document.getElementById("yy");
    yy.textContent=calculated_year;
    console.log(calculated_year);
 }

 function calculate(){


    if(da<31  && da>0)
    {
        document.getElementById("p1").innerHTML = "";  
    }
    else{
    
        document.getElementById("p1").innerHTML = "Input Valid number! ";
        let f=document.getElementById("day");
        f.value="";
        return ;
    }
    if(mo<=12 && mo>1)
    {
        document.getElementById("p2").innerHTML = ""; 
       console.log("deep") ;
    }
    else{
        document.getElementById("p2").innerHTML = "Input Valid number!";
        document.getElementById("p2").style.color="red";
        let j=document.getElementById("month");
        j.value="";
        return ;
    }
    if(ye>1900 && ye<3000)
    {
        document.getElementById("p3").innerHTML = ""; 
    }
    else{
        document.getElementById("p3").innerHTML = "Input Valid number!";
        let h=document.getElementById("year");
        h.value="";
        return ;
    }
    let current_date = 15;
    let current_month = 6;
    let current_year = 2023;
  
    // birth dd// mm// yyyy
    let birth_date = da;
    let birth_month = mo;
    let birth_year = ye;
  
    // function call to print age
    findAge(current_date, current_month, current_year,
            birth_date, birth_month, birth_year);
  
 }
 