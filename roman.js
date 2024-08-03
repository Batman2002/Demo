// const ref={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
// let str="V";
// let num=0
// let s=str.split('');
// // console.log(s);
// while(s.length>0){
//     if((s[s.length-1]=='V' || s[s.length-1]=='X')&& s[s.length-2]=='I') {num+=(ref[s.pop()]-1);
//         s.pop();
//     }
//     else if((s[s.length-1]=='C' || s[s.length-1]=='L')&& s[s.length-2]=='X'){
//         num+=(ref[s.pop()]-10);
//         s.pop();
//     }
//     else if((s[s.length-1]=='M' || s[s.length-1]=='D')&& s[s.length-2]=='C'){
//         num+=(ref[s.pop()]-100);
//         s.pop();
//     }
//     else num+=ref[s.pop()]
// }
// console.log(num);