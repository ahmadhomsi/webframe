alert("welcom in my wep for car ");
alert("evrey thing about the can find it here ");
function personalinformation(){
var username = prompt("plez enter your  name ");
document.write(username);

var phonenuper = prompt("plez enter your phonenuper");
document.write(phonenuper);

if (phonenuper > 0) {
    alert("good job");
}
else if (phonenuper <= 0) {
    alert("not good ");
}
}
personalinformation() 

var cartyep = prompt('please enter your faverite car');

function whatyouwont(){
    
while (cartyep !== 'sport' && cartyep !== 'economical'){

    cartyep = prompt('please enter of the carplease choise sport or economical car');

}
}
whatyouwont()
function pictur(){
var picNumber = prompt('please enter the number of photos you want to see');

for (var i = 0; i <  picNumber; i++) {
    if (cartyep == 'sport') {
        document.write('<img src="https://www.goodcarbadcar.net/wp-content/uploads/2019/07/2019-audi-r8-onlocation.jpg"/>');
    } else {
        document.write('<img src="https://cnet4.cbsistatic.com/img/ekNnmq9C9nu6cxGEU5KPufzm8f4=/2019/05/13/461af4f8-c387-46a2-a3a6-c74e520f27ec/2019-toyota-prius-awd-e-35.jpg"/>')
    }
}
}
pictur()


function carlife (parm1, parm2 ){
    for (var i = parm1; i < parm2; i++){
    console.log(i);}
    }

   carlife(1,10); 



