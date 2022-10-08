function hellospeaker(name){
   return "Hello " + name;
}
function byespeaker(name){
    return "Good Bye " + name;
}

let array = ["Yakoov","John","Jen","Jason","Paul", "Frank","Larry", "Paula","Laura","Jim"];
for (let i=0;i<array.length;i++){
    let name=array[i];
    if(name[0]=='J' || name[0]=='j'){
        console.log(byespeaker(array[i]));
    }
    else{
        console.log(hellospeaker(array[i]));
    }
}


