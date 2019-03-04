module.exports = function getZerosCount(number, base) {
  let count = 0;
  let result = 0;
  let main_r = [];
  osn(number);

     function Factorzin(base){
       for(let i=2; i<= base; i++){
         while(base %i === 0 ){
           base = base/i;
           main_r.push(i);      
         }
       }   
       return main_r; 
     }

     function osn(number){ 
      Factorzin(base);
       for(i=0; i<main_r.length; i++){
         if(main_r[main_r.length-1]===main_r[i]){
           count++
         }
       }
        let elemet = main_r[main_r.length-1]
         let b =elemet;
         while(number>elemet){
           result = result + number/elemet >> 0;
           elemet *=b; 
          }
       }
       if(count) {result=result/count >> 0;}
      return result;
}