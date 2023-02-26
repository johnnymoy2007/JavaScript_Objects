/*Q1.	Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
    ●	Handle of author
    ●	content, 
    ●	An image link posted by the author of the post
    ●	Number of views, 
    ●	Number of likes,
    */
const InstagramPost = new Object();
InstagramPost.HandleOfAuthor = "John";
InstagramPost.content = "How To learn Faster";
InstagramPost.AnImageLinkPostedByTheAuthorOfThePost = "instagram.com/john46/how_to_learn_faster";
InstagramPost.NumberOfViews = 1200;
InstagramPost.NumberOfLikes = 2004;

console.log(InstagramPost)


/*
Q2.	Create 2 Instagram post objects from the constructor function you created above
*/






/* Q3.	Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
○	ENG - 70
○	GOVT - 85
○	LIT - 82
○	CRK - 94

a)	Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
b)	Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
*/




//Q 4.	What are the different ways you can clone an object? Give examples for each of them.//
 //Option 1 - Using Object.assign() //

const firstBook = {
  author: "Chimamanda Adichie",
  title: "Half of a Yellow Sun",
  yearPublished: 2008,
};
 // correct way to make a copy/clone of an object
const secondBook = Object.assign({}, firstBook);

console.log(firstBook);
console.log(secondBook);

secondBook.title = "Purple Hibiscus";

console.log("After change title of second book");
console.log(firstBook);
console.log(secondBook);

// Option 2 - Using spread syntax i.e, ...

const thirdBook = { ...firstBook };
thirdBook.title = "Americanah";
console.log({ firstBook });
console.log({ thirdBook });

// Option 3 - Using the method JSON.parse(JSON.stringify())
// JSON - JavaScript Object Notation
const fourthBook = JSON.parse;
fourthBook.title = "Notes on Grief";
console.log({ firstBook });
console.log({ fourthBook });



/* Q5.	As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:
Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	’Omoyele Sowore is the presidential candidate of AAC’
*/
const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}
console.log(presidentialCandidate )





