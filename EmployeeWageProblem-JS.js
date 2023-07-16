//UC1,UC2
//const Is_Absent=0;
const Part_Time=1;
const Full_Time=2;
const Part_Time_Hour=4;
const Full_Time_Hour=8;
const Wage_Per_Hour=20;
let empHrs=0;
let empcheck=Math.floor(Math.random()*10) % 3;
switch(empcheck)
{
    // case Is_Absent:
    //     empHrs=0;
    case Part_Time:
        empHrs=Part_Time_Hour;
    case Full_Time:
        empHrs=Full_Time_Hour;
    default:
        empHrs=0;

}
let empWage=empHrs*Wage_Per_Hour;
console.log("Employee Wage:- "+empWage);
