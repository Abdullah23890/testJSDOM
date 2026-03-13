// Q1 : -

// DOM(Document Object Model) is a programming interface that represents an HTML document as a tree of objects, allowing JavaScript to access and modify the content, structure, and style of web pages


// Q2 : -

// HTML is the root node.

// Head and Body are children of HTML.

// Title is a child of Head.

// H1 and P are children of Body.

// This structure allows JavaScript to traverse, access, and modify elements easily using parent-child relationships


// Q3 : -

// The DOM (Document Object Model) is important because it acts as a bridge between HTML and JavaScript. Without DOM, JavaScript cannot directly interact with web page elements.

// Advantages of Using DOM
// Dynamic Content – You can update web page content without reloading the page.

// Disadvantages of Not Using DOM
// Static Pages Only – Without DOM, you cannot change content dynamically; the page will remain static.

// Feature    
// Content Manipulation

// With DOM
// Can change HTML dynamically

// Without DOM
// Cannot change content dynamically


// Real-World Example
// Example: Updating a shopping cart on an e-commerce website.


// Q4 : -

// Explanation

// querySelector()

// Returns the first element in the DOM that matches the given CSS selector.
// If no element matches, it returns null.

// querySelectorAll()

// Returns all elements in the DOM that match the CSS selector as a NodeList (similar to an array).
// If no element matches, it returns an empty NodeList.
// You can loop through the NodeList to access all matched elements.

// code 

// querySelector

// <h1 class="title">Hello World</h1>
// <h1 class="title">Welcome</h1>

// let firstTitle = document.querySelector(".title");
// console.log(firstTitle.innerHTML); 
// Output: Hello World

// querySelectorAll

// let allTitles = document.querySelectorAll(".title");
// allTitles.forEach(function(title){
//     console.log(title.innerHTML);
// });
// Output:
// Hello World
// Welcome


// Q5 : -

// method1.html  ( file )
// method2.html  ( file )
// method3.html  ( file )


// Q6 : - 

