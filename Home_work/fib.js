
function fibonachi (_stop){
    var res='1 1 '
    var a=1,b=1;
    for (var i=2;i<=_stop;i++){
        a=a+b;
        b=a-b;
        res+=a+' ';
        }
    return res;
    }

console.log(fibonachi(20));