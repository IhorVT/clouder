/**
 * Created by TW on 14.07.2015.
 */
function quad(a,b,c){
    var x,x1,x2,d,res;
    if (a===0){
        x=-c/b;
        res='x='+x;
    }
    else {
        d=b*b-4*a*c;
        if (d>0){
            x1=-(b-Math.sqrt(d))/(2*a);
            x2=-(b+Math.sqrt(d))/(2*a);
            res='x1='+x1+'\n'+'x2='+x2;
        }
        else if (d===0){
            x=-b/(2*a)
            res='x1='+x;}
        else{
            res='no solution';}
    }
    return res
}
console.log(quad(9,-12,4));
