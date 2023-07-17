//UC1,UC2,UC3,UC4,UC5,UC6
//const Is_Absent=0;
const Part_Time=1;
const Full_Time=2;
const Part_Time_Hour=4;
const Full_Time_Hour=8;
const Wage_Per_Hour=20;
const Num_Of_Working_Days=20;
const Max_Hrs_In_Month=100;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empHrs=0;
let empDailyWageArray=new Array();
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
function calcDailyWage(empHrs){
    return empHrs*Wage_Per_Hour;
}
while(totalEmpHrs <= Max_Hrs_In_Month && totalWorkingDays < Num_Of_Working_Days){
    totalWorkingDays++;
    let empcheck=Math.floor(Math.random()*10) % 3; 
   let empHrs=GetWorkingHours(empcheck);
   totalEmpHrs+=empHrs;
   empDailyWageArray.push(calcDailyWage(empHrs));
}
let empDialyWage=calcDailyWage(totalEmpHrs);
console.log("Total Days:- "+totalWorkingDays+"\tTotal Hrs:- "+totalEmpHrs+"\tEmployee Wage:- "+empDialyWage);
console.log(empDailyWageArray);
