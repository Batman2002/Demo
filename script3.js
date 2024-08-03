// let str1="nfeqwj";
// // console.log(str1);

// let str2='venwufa';
// // console.log(str2 + " & " + str1);



// let str3=`nffowfef`;
// // console.log(str3.slice(-5,-2));
// // console.log(5-2);

// // console.log('Hello')

// // console.log('World!')

// // function printer(a){
// //     console.log(a)
// //     console.log("Chinmay")
// // }


// // function xyz(){
// //     return 10;
// // }

// // function slicer(temp){
// //     temp("Yahs")
// // }


// let printer=(a)=>{
//     console.log(a);
//     console.log('Chinmay')
// }

// let xyz=()=>{
//     return 10;
// }

// let slicer=(temp)=>{
//     console.log(temp);
// }


// printer(slicer(xyz()))

// console.log(typeof(xyz()))

// // let a=(10<20)?20:10;
// // console.log(a)


// let numCheck=(num)=>{
//     if(num>100){
//         return "Num greater than 100";
//     }
//     else{
//         return "Num less than 100";
//     }
// }

// console.log(numCheck(200))

// let numCheck2=(num,num2)=>{
//     if((num+num2)>100){
//         return num+num2;
//     }
//     else{
//         return -1;
//     }
// }

// let che=numCheck2(10,20)


// console.log(che)


// let i=prompt("Enter a number");
// i = Number(i);

// a.unshift(i);

// console.log(a);

function append(arr,element){
    arr.push(element);
    console.log(arr);
}

function prepend(arr,element){
    arr.unshift(element);
    console.log(arr);
}


// append(a,60);
// prepend(a,0);
// a.pop();
// console.log(a);

// a.splice(2,100,69);
// console.log(a);

// let state=true;
// let a=[10,20,30,40,50];
// while(state){
//     let option=Number(prompt(`Your array is:${a} \n Select Operation to perform: \n 1.Push \n 2.Pop \n 3.Shift \n 4.Unshift \n 5.Splice \n 6.Exit`));

//     switch(option){
//         case 1:
//             let element=Number(prompt("Enter element to be added:"));
//             append(a,element);
//             break;
//         case 2:
//             a.pop();
//             break;
//         case 3:
//             let element3=Number(prompt("Enter element to be added:"));
//             a.shift(element3);
//             break;
//         case 4:
//             let element2=Number(prompt("Enter element to be added:"));
//             a.unshift(element2);
//             break;
//         case 5:
//             let index=Number(prompt(`Enter index of number to delete between 0 and ${a.length}:`));
//             let element5=Number(prompt(`Enter index of number to be deleted uptil ${index} and ${a.length}:`));
//             let element4=Number(prompt("Enter element to be added:"));
//             a.splice(index,element5,element4);
//             break;
//         case 6:
//             state=false;
//             break;
//         default:
//             console.log("Invalid input");
//     }
// }


// for(let i=1;i<11;i++){
//     if(i==4) console.log(8*i);
//     else if(i==9) console.log(5*i);
//     else console.log(2*i);
// }


// function averageWaitingTime(customers) {
//     let prep = customers[0][1];
//     let n = customers.length;
//     let time = customers[0][0] + customers[0][1];
    
//     for (let i = 1; i < n; i++) {
//         if (customers[i][0] < time) {
//             time += customers[i][1];
//         } else {
//             time += (customers[i][0] - time) + customers[i][1];
//         }
        
//         prep += (time - customers[i][0]);
//     }
    
//     return prep / n;
// }

// let ar=[1,2,3,4,5];

// let sum=0;
    
// for(let i=0;i<ar.length;i++){
//     sum+=ar[i];   
// }
// console.log(sum);
    
// let a="subhashhelloji";
// let b=a.split("").reverse();
// for(let i=1;i<b.length;i++){
//     if(b[i-1]==b[i]) b.splice(i-1,2);
// }
// console.log(b.reverse().join(""))
// let arr=[3,8,16,28,22,15,14]
// let new_arr=arr.filter((ele,index,arr)=>{
//     if(ele%2==0) ele*=15;
//     return ele>80;
// })
// for(let i=0;i<arr.length;i++){
    // if(arr[i]>16) new_arr.push(arr[i]);`
// }
// console.log(new_arr.map((ele,index,new_arr)=>{
//     return ele*15;
// }));

function peek(arr){
    return arr[arr.length];
}

// let ip="(abcd(bd))"

// let arr=ip.split("")
// let ans=[]
// let ans2=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=")") ans.push(arr[i]);
//     else{
//         while(ans[ans.length-1]!="("){
//             ans2.push(ans.pop());
//         }
//         ans.pop()
//     }
//     for(let j=0;j<ans2.length;j++)ans.push(ans2[j]);
//     ans2=[]
// }
// console.log(ans.join(""))

// for(let i=0;i<ip.length;i++){
//     if(ip[i]!=")") arr.push(ip[i]);


//     else{


//         while(arr[arr.length-1]!="(") {
//             ans.push(arr.pop());
//         }

//         arr.pop();
//     }


//     for(let j=0;j<ans.length;j++) arr.push(ans[j]);
    
//     ans=[]

// }

// while(arr.length!=0){
//     ans.push(arr.pop());
// }
// console.log(ans.reverse().join(""));




// let num="1634";
// let sum=0;
// for(let i=0;i<num.length;i++){
//     let mul=Number(num[i]);
//     for(let j=0;j<num.length-1;j++){
//         mul*=Number(num[i]);
//         // console.log(mul)
//     }
//     sum+=mul
// }
// console.log(sum)
// if(sum===Number(num)) console.log(true);


// let star=(layers)=>{
//     for(let i=0;i<layers;i++){
        
//     }
// }

// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     console.log(this.firstName + " " + this.lastName);
//   }
// };

// person.fullName();
// console.log(person.id);

// let obj=[ {value:2}, {value:88}, {value:51}, {value:81}]
// for(let i=0;i<obj.length;i++){
//     if(obj[i].value%2==0) console.log(obj[i]);
// }
// function outer(){
//     let a=10;
//     function inner(){
//         console.log(a);
//     }
//     inner()
// }

// outer();


// 1)

let add=(num1,num2)=>{
    return num1+num2;
}

// 2)

let largest=(num1,num2,num3)=>{
   if(num1>num2 && num1>num3) return num1;
   else if(num2>num1 && num2>num3) return num2;
   else return num3; 
}

// 3)

let evenOdd=(num1)=>{
    if(num1%2==0) return "Even";
    else return "Odd";
}

// 4)

let reverseString=(str)=>{
    let arr=[];
    for(let i=0;i<str.length;i++){
        arr.push(str[i]);
    }
    return arr.join("");
}

// 5)

let palindorme=(str)=>{
    let arr=[];
    for(let i=0;i<n;i++){
        arr.push(str[i]);
    }
    return (arr.join("")==str);
}

// 6)

let factorial=(num1)=>{
    let ans=1;
    for(let i=0;i<num1;i++){
        ans*=num1;
        num-=1;
    }
    return ans;
}

// 7)

let fibonacci=(num1)=>{
    let prev=0;
    let ans=1;
    let current=1;
    console.log(prev);
    console.log(ans);
    for(let i=0;i<num1-2;i++){
        current=ans+prev;
        prev=ans;
        ans=current;
        console.log(current);
    }
}

// 8)

let leapYear=(year)=>{
    if(year%4==0) return "Yes, given year is leap year";
    else return "No, given year is not a leap year";
}

// 9)

let sumOfDigits=(num1)=>{
    let sum=0;
    while(num1>10){
        sum+=num1%10;
        num1-=num1%10;
        num1=num1/10;
        // console.log(sum)
    }
    return sum+1;
}


// 10)


// 11)

let longestWord=(str)=>{
    let arr=str.split(" ");
    let longword=arr[0];
    for(let i=1;i<arr.length;i++){
        if(longword.length<arr[i].length) longword=arr[i];
    }
    return longword;
}

// 12)

let countVowels=(str)=>{
    let ans=0;
    let vowels=['a','e','i','o','u'];
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])) ans++;
    }
    return ans;
}


// 13)

let removeDuplicates=(arr)=>{
    let arr2=[]
    for(let i=0;i<arr.length;i++){
        if(!arr2.includes(arr[i])) arr2.push(arr[i]);
    }
    return arr2;
}

// 14)

let sortAscending=(arr)=>{
    return arr.sort((a,b)=>a-b);    
}

// 15)

let findIntersection=(arr1,arr2)=>{
    let ans=[]
    for(let i=0;i<arr1.length;i++)
        return ans;
}


// 16)

let chekcPrime=(num1)=>{
    for(let i=2;i<num1;i++){
        if(num1%i==0) return false;
    }
    return true;
}

// 17)


// 18)

let reverseSentence=(str)=>{
    let ans=str.split(" ");
    return ans.reverse().join(" ");
}

// 19)

let capitalFirstLetter=(str)=>{
    let arr=str.split(" ");
    for(let i=0;i<arr.length;i++){
        let a=arr[i];
        a=a.charAt(0).toUpperCase()+a.slice(1);
        arr[i]=a;
    }
}





// 20)

let secondLargestNumber=(arr)=>{
    let arr2=[]
    arr=arr.sort((a,b)=>a-b);
    for(let i=arr.length()-1;i>=0;i--){
        if(!arr2.includes(arr[i]))arr2.push(arr.pop());
    }
    arr.pop();
    return arr[arr.length-1];    
}

function printer_time(num,dealy) {
        for(let i=0;i<num.length;i++){
            setTimeout(()=>{
              console.log(num[i])  
            },i*dealy);
        }
}

// printer_time([1,2,3,4,5,6,7,8,9,10],1000)

let arr=[1,2,3,4,5,6,7,8,9,10]
// arr


let splicer=(arr,start,deleteCount,items=[])=>{
    for(let i=start;i<start+deleteCount;i++){
        arr[i]=0;        
    }
    let arr2=[]
    for(let i=0;i<arr.length+items.length;i++){
        if(i==start && items.length!=0){
            while(items.length>0) arr2.push(items.shift());
        }
        if(arr[i]!=0)arr2.push(arr[i]); 
    }
    console.log(arr2);
}

// splicer(arr,3,5,[11,22]);


let str="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac viverra lacus, sed commodo erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vitae arcu sapien. Duis quis cursus eros. Duis condimentum ipsum libero, vel lacinia sapien tincidunt in. Nunc vestibulum mauris congue quam imperdiet dignissim. Vestibulum suscipit risus in volutpat efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc tristique commodo dapibus. Quisque sed nibh eu tellus imperdiet posuere. Aliquam erat volutpat. Pellentesque in odio urna. Fusce aliquam ante eu ultricies hendrerit."

let strgin_Captializer=(str)=>{
    let arr=str.split(" ");
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].split("").reverse().join("");
        let a=arr[i];
        a=a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        a=a.replace(/\s{2,}/g," ");
        a=a.charAt(0).toUpperCase()+a.slice(1);
        a=a.slice(0,-1)+a.slice(-1).toUpperCase();
        arr[i]=a
    }
    // let d=arr.map((ele,index,arr)=>{
    //     ele.charAt(0).toUpperCase()+ele.slice(1);
    //     // ele.charAt(ele.length-1).toUpperCase()+ele.slice(1);
    // })
    console.log(arr.join(" "));
}

// strgin_Captializer(str);


let left_rotate=(matrix)=>{
    let ans_matrix=[]
    for(let row=0;row<matrix.length;row++){
        let arr=[]
        for(let col=0;col<matrix[row].length;col++){
            arr.push(matrix[col][row]);
        }
        ans_matrix.unshift(arr);
    }
    console.log(ans_matrix);
}

let arr2=[[1,8,9],[12,13,14],[15,16,17]]
// left_rotate(arr2);


// let users=fetch("https://jsonplaceholder.typicode.com/users/4").then(res=>res.json()).then(d=>{
//     console.log(d);
// });

async function json_fetch(url){
    let response=await fetch(url);
    let data=await response.json();
    // console.log(data);
    return data;
}

let users=json_fetch("https://jsonplaceholder.typicode.com/users")
// json_fetch("https://jsonplaceholder.typicode.com/users");

// users.then(res=>res.json()).then(d=>{
    // console.log(d)
// });

// console.log(users)

let data=[
    {
        'name':'subhash',
        'id':1,
        'address':'Baner'
    },
    {
        'name':'tushar',
        'id':2,
        'address':'Kharadi'
    },
    {
        'name':'yash',
        'id':3,
        'address':'Hinjewadi'
    },
    {
        'name':'shubham',
        'id':4,
        'address':'Jagtap Dairy'
    }
]

// let input=prompt("Enter name:");
console.log(users.length);
for(let i=0;i<users.length;i++){
    console.log(users);
    if(users[i].name=='Leanne Graham') console.log(users[i])
}