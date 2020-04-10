function compare(ip1, ip2) {
    let op1 = '';
    let op2 = ''; 
    for(let i=0; i<ip1.length; i++) {
        if(ip2[i] != undefined) {
            if(!ip2.includes(ip1[i])) {
                op1 +=ip1[i];
            }
        }
           
    }

    //2d loop
    for(let i=0; i<ip2.length; i++) {
        if(ip1[i] != undefined) {
            if(!ip1.includes(ip2[i])) {
                op2 +=ip2[i];
            }
        }
           
    }

    console.log("op1: ",op1, "op2", op2);

}

compare('abc', 'bcd');