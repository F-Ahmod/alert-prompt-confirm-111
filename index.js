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

};
// alert 
function func(){
    swal("Hello world!");
    
}
function func2(){
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Submit",
      });
}
function func3(){
    
    swal("Good job!", "You clicked the button!", "success");
}
function func4(){
    
    swal("Good job!", "You clicked the button!", "error");
}
function func5(){
    
    swal("Click on either the button or outside the modal.")
    .then((value) => {
      swal(`The returned value is: ${value}`);
    });
}
function func6(){
    
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
}
function func7(){
    
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
}



const colors = {mango: 'green', grapes: 'black', organe: 'yellow'};

console.log(colors[grapes])
