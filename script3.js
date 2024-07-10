let str1="nfeqwj";
// console.log(str1);

let str2='venwufa';
// console.log(str2 + " & " + str1);



let str3=`nffowfef`;
// console.log(str3.slice(-5,-2));
// console.log(5-2);

// console.log('Hello')

// console.log('World!')

// function printer(a){
//     console.log(a)
//     console.log("Chinmay")
// }


// function xyz(){
//     return 10;
// }

// function slicer(temp){
//     temp("Yahs")
// }


let printer=(a)=>{
    console.log(a);
    console.log('Chinmay')
}

let xyz=()=>{
    return 10;
}

let slicer=(temp)=>{
    console.log(temp);
}


printer(slicer(xyz()))

console.log(typeof(xyz()))

// let a=(10<20)?20:10;
// console.log(a)


let numCheck=(num)=>{
    if(num>100){
        return "Num greater than 100";
    }
    else{
        return "Num less than 100";
    }
}

console.log(numCheck(200))

let numCheck2=(num,num2)=>{
    if((num+num2)>100){
        return num+num2;
    }
    else{
        return -1;
    }
}

let che=numCheck2(10,20)


console.log(che)