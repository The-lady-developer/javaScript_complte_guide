msg = "Hello, " + "world";   // Produces the string "Hello, world"
greeting = "Welcome to my blog," + " " + name;

//LENGTH PROPERTY
s.length

//In addition to this length property, there are a number of methods you can invoke on strings

var s = "hello, world"     // Start with some text.
s.charAt(0)                // => "h": the first character.
s.charAt(s.length-1)       // => "d": the last character.
s.substring(1,4)           // => "ell": the 2nd, 3rd and 4th characters.
s.slice(1,4)               // => "ell": same things.
slice(-3)                  // => "rld": last 3 characters
s.indexOf("l")             // => 2: position of first letter l.
s.lastIndexOf("l")         // => 10: position of last letter l.
s.indexOf("l", 3)          // => 3: position of first "l" at or after 3
s.split(", ")              // => ["hello", "world"] split into substrings
s.replace("h", "H")        // => "Hello, world": replaces all instances
s.toUpperCase()            // => "HELLO, WORLD"