function add(fun){
    return function(array){
        return fun.apply(null, array);
    };
}

var addArrayElements =add (function(x,y) {return x+y});
addArrayElements([1,2]);
