//UC1,UC2
//const Is_Absent=0;
const Part_Time=1;
const Full_Time=2;
const Part_Time_Hour=4;
const Full_Time_Hour=8;
const Wage_Per_Hour=20;
const Num_Of_Working_Days=20;
let empHrs=0;
let empcheck=Math.floor(Math.random()*10) % 3;
function GetWorkingHours(empcheck){
    switch(empcheck){
    case Part_Time:
        return Part_Time_Hour
    case Full_Time:
        return Full_Time_Hour;
    default:
        return 0;
}  
}
for(let day=0;day <= Num_Of_Working_Days;day++){
    empHrs+=GetWorkingHours(empcheck);
}
let empWage=empHrs * Wage_Per_Hour;
console.log("Total Hrs = "+empHrs+"\tEmployee Wage:- "+empWage);
