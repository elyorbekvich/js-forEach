var arr = [1, 2, 3, 4, 12, 16, 10,5,25,18 ,28 ,31, 39, 45, 40, 59,53,62,65,71,78,89,81,90,95]
console.log('20-dan katta 50-dan kichik');
arr.forEach((item)=>{
    if(item > 20 && item < 50){
        console.log(item);
    }
})
console.log('50-dan katta va toq');
arr.forEach((item)=>{
    if (item > 50 && item % 2 == 0 ) {
        console.log(item);
    }
}
)

var arrr = ['Valijonov','Valijonova','Erkinboyev','Erkinboyeva','Daminov','Daminova','Soliyev','Soliyeva','Sodiqov','Sodiqova']
console.log('familya');
arrr.forEach((item)=>{
    if (item[item.length - 1] == 'a' ) {
        console.log(item);
    }
}
)