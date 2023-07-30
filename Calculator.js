//we collecting whatever the user will enter 
let results = document.getElementById("input");
//Now we need to write the actions for those functions
let calculate=(number)=>{
    //we need to use eval() to calculate the results
    results.value+=number;

}
let Results =()=>{
    try {
        results.value=eval(results.value);
    } catch (error) {
        alert("Please enter correctly");
    }

}
//here we want to clear the data when user inputs wrongly
function clr(){
    results.value=" ";
}
//here we want to delate 
function del(){
    results.value=results.value.slice(0,-1);
}