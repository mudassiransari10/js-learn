// Immediately Invoked Function Expressions (IIFE)

// avoid accessing global variable we make use of iife
// if trying to write two IIFE make use of *; (semicolon)* to indicate the end of first IIFE

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`)
})();

( (name) => {
    // unnamed IIFE
    // parameterized IIFE
    console.log(`DB CONNECTED TWO ${name}`)
} )("mudassir")