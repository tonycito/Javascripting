var a = 1, b = 2, c = 3;                  
                                          
(function firstFunction(){                
    var b = 5, c = 6;                     
                                          
    (function secondFunction(){           
        var b = 8;   
        // la consola va aqui por que tiene el vaiable b=8, y asu vez
        //tiene acceso a las demas variables.                    
           console.log('a: '+a+', b: '+b+', c: '+c);

        (function thirdFunction(){        
            var a = 7, c = 9;             
                                          
            (function fourthFunction(){   
                var a = 1, c = 8;         
                                          
            })();                         
        })();                             
    })();                                 
})();                                     

  

