//JavaScript defines a RegExp() constructor for creating objects that represent textual patterns. 
//These patterns are described with regular expressions 
//And JavaScript adopts Perl’s syntax for regular expressions. 
//Both strings and RegExp objects have methods for performing pattern matching and search-and-replace operations using regular expressions.

//RegExps are not one of the fundamental types of JavaScript.          
//Like Dates, they are simply a specialized kind of object, with a useful API. 
//The regular expression grammar is complex and the API is nontrivial.

//RegExp objects define a number of useful methods, 
//And strings also have methods that accept RegExp arguments.

var text = "testing: 1, 2, 3";   // Sample text
var pattern = /\d+/g             // Matches all instances of one or more digits
pattern.test(text)               // => true: a match exists
text.search(pattern)             // => 9: position of first match
text.match(pattern)              // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#");      // => "testing: #, #, #"
text.split(/\D+/);               // => ["","1","2","3"]: split on non-digits