//UC1
const Is_Absent=0;
let empcheck=Math.floor(Math.random()*10)%2;
if(empcheck == Is_Absent){
    console.log("Employee is Absent");
    return;
}
else
{
    console.log("Employee is Present");
}