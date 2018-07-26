//The lexical structure of a programming language is the set of elementary rules that specifies 
//how you write programs in that language. It is the lowest-level syntax of a language; 
//it specifies such things as what variable names look like, the delimiter characters for comments, 
//and how one program statement is separated from the next.//

//javaScript programs are written using the Unicode character set. 
//Unicode is a superset of ASCII and Latin-1 and supports virtually every written language currently used on the planet.
//ES3 requires JavaScript implementations to support Unicode version 2.1.
//ES5 requires implementations to support Unicode 3.
//JavaScript is a case-sensitive language. 
//This means that language keywords, variables, function names, and other identifiers must always be typed with a consistent capitalization of letters. 
//The hello keyword, for example, must be typed “hello,” not “Hello” or “HELLO.” 
//Similarly, online, Online, OnLine, and ONLINE are four distinct variable names.
//Though HTML is not case sensitive, but its close association with client-side JavaScript, this difference can be confusing. 
//Where tags and attribute names can be typed in any case in HTML,but in JavaScript they typically must be all lowercase.
//for example the HTML onclick event handler attribute is sometimes specified as onClick in HTML, but it must be specified as onclick in JavaScript code.


//*Whitespace, Line Breaks, and Format Control Characters*//
//JavaScript ignores spaces that appear between tokens in programs.
//it usually ignore line breaks too.


//*Unicode Escape Sequences*//
//Some computer hardware and software can not display or input the full set of Unicode characters.
//To support programmers using this older technology, JavaScript defines special sequences of six ASCII characters to represent any 16-bit Unicode codepoint.
//for example unicode escape for the character é, for example, is \u00E9, and the following two JavaScript strings are identical:

"café" === "caf\u00e9"   // => true

//Unicode escapes may also appear in comments, but since comments are ignored, they are treated as ASCII characters in that context and not interpreted as Unicode.
