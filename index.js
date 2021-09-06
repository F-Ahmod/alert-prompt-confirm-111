const askfeel=()=>{
    const name= prompt('how are you');
    if(name){
        console.log(name)
    }
};

const clickAlert=()=>{
    alert('hi !! im your boss')
}

const clickA=(x,y)=>{
    x=prompt("type a number")
    y=prompt("type another number")
    const result =Number(x) + Number(y);
    alert("total = "+ result);
} 
const clickB=(x,y)=>{
   
    y=prompt("type another number")
    const result =Number(100) + Number(y);
    alert("total = "+ result);
} 

const ask=()=>{
    const response = confirm( 'do u want to see my page URL?!!');
    console.log(response);
    if (response === true){
        alert(location.hostname)
    }
    else{
        console.log('hi')
    }

}
