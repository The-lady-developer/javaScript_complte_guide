//Like many programming languages, JavaScript uses the semicolon (;) to separate statements.
//Consider the following code. Since the two statements appear on separate lines, the first semicolon could be omitted:

a = 3;
b= 5;

//Written as follows, however, the first semicolon is required:
a = 3; b = 5;

//Note that JavaScript does not treat every line break as a semicolon: it usually treats line breaks as semicolons only if it can’t parse the code without the semicolons. 
//More formally, JavaScript treats a line break as a semicolon if the next nonspace character cannot be interpreted as a continuation of the current statement. Consider the following code:
var a
a
=
3
console.log(a)

//javaScript interprets this code like this:
var a;  a = 3; console.log(a);

//JavaScript does treat the first line break as a semicolon because it cannot parse the code var a a without a semicolon. 
//The second a could stand alone as the statement a;, but JavaScript does not treat the second line break as a semicolon because it can continue parsing the longer statement a = 3;
//These statement termination rules lead to some surprising cases.        
//This code looks like two separate statements separated with a newline:
var y = x + f
(a+b).toString()

//But the parentheses on the second line of code can be interpreted as a function invocation of f from the first line, and JavaScript interprets the code like this:
var y = x + f(a+b).toString();

//statements beginning with ( and [ are not uncommon at all, at least in some styles of JavaScript programming.
// Some programmers like to put a defensive semicolon at the beginning of any such statement so that it will continue to work correctly even if the statement before it is modified and a previously terminating semicolon removed:

var x = 0                         // Semicolon omitted here
;[x,x+1,x+2].forEach(console.log) // Defensive ; keeps this statement separate

//two exceptions involves, first is
//JavaScript will always interpret that line break as a semicolon. For example, if you write:
return 
false;
//js will interpret it like
return; true;

//However, you probably meant:
return true;

//another one is
//++ and −− operators (Arithmetic Expressions). These operators  can be prefix operators that appear before an expression or postfix operators that appear after an expression
// If you want to use either of these operators as postfix operators, they must appear on the same line as the expression they apply to:
//otherwise  the line break will be treated as a semicolon, and the ++ or -- will be parsed as a prefix operator applied to the code that follows.        
//Consider this code, for example:

x
++
y


//js will assume it like
x; ++y;
//not as
x++; y
