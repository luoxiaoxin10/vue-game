
const types = ['left','right']
export const randomNum = function (minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
            break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
            break; 
        default: 
            return 0; 
            break; 
    } 
}

export const forla = (Num) =>{
    let list = []
    let top = 0
    for (let i = 0; i < Num; i++) {
        let obj = {}
        obj.type = types[randomNum(0,1)]
        obj.width = randomNum(5, 50)
        top = randomNum(top+60, top+160)
        obj.top = top
        list.push(obj)
   }
   return list
}