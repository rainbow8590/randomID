
;(function(global){

    var randomId = {

        rid:function(){
            //随机码数组
            var codeArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
            var num = '';
            if(arguments.length == 0){    
                for(var i = 0 ; i < 7 ; i ++){
                    num += codeArr[parseInt(Math.random()*1000%codeArr.length)];
                }       
            }else{
                for(var i = 0 ; i < arguments[0]; i++){
                    num += codeArr[parseInt(Math.random()*1000%codeArr.length)];
                }
            }
            return num;
        }
    }

    global.randomId = randomId
})(window)