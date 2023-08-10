//const beep= process.stdout.write('\x07');
var i=1;

const clock = (alarm)=>{
if(typeof alarm !=="number"){
  console.log("schedule your alarm correctly");
} else if(alarm < i){
console.log("no alarm schedule");
}
else { 
  setTimeout(() => {
  process.stdout.write('\x07');
}, alarm );
  
}
}

clock(1900)