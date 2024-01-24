"use strict"

let image = document.querySelectorAll("img");
let pname = document.querySelector(".pname");
let price = document.querySelector(".price")

let obj = [
    {
        src:"product-1.webp",
        pname:"High Back Bench",
        price:"$9.99",
        content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."+
        "Fugit maiores illum voluptate? Ea rerum reprehenderit sed."+ 
        "Quasi nisi itaque sit hic magnam, explicabo nam sint delectus soluta,"+
        "voluptatum nulla rerum?"
    },

    {
        src:"product-2.webp",
        pname:"Albany Table",
        price:"$79.99",
        content:"ParagraphParagraphs are the group of sentences combined together, about a certain topic. It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
    },

    {
        src:"product-3.webp",
        pname:"Accent Chair",
        price:"$25.99",
        content:"We can say that a well-structured paragraph is the essence of good writing. The purposes of the paragraph are to give information, to explain something, to tell a story, and to convince someone that our idea is right."
    },

    {
        src:"product-4.webp",
        pname:"Wooden Table",
        price:"$45.99",
        content:"Paragraphs are blocks of textual content that segment out a larger piece of writing—stories, novels, articles, creative writing, or professional writing portions—making it less complicated to read and understand."
    },

    {
        src:"product-5.webp",
        pname:"Dinning Table",
        price:"$4.99",
        content:"Excellent paragraphs are an available writing skill for plenty of types of literature, and proper writers can substantially beautify the clarity of their news, essays, or fiction writing whilst constructing nicely."
    },

    {
        src:"product-6.webp",
        pname:"Sofa Set",
        price:"$69.99",
        content:"A topic sentence is a precise statement that reflects the main idea of the paragraph. It should be carefully written as it will show the reader what you are going to talk about. Words chosen for this should not be cluttered and ambiguous as readers will decide to read further based on this."
    },

    {
        src:"product-7.webp",
        pname:"Modern Bookshelf",
        price:"$19.99",
        content:"It is not necessary to write the topic sentence at the beginning of the paragraph. It can be put anywhere, as long as it reflects the main topic. For instance, if you mention that you are going to talk about the advantages of using the hand sanitizer,"
    },

    {
        src:"product-8.webp",
        pname:"Emperor Bed",
        price:"$23.99",
        content:"Supporting sentences explain the topic sentence in detail. They expand the main topic and develops the main idea into the explanation. They explain the main topic using examples, facts, quotes, etc. They have to be related to the topic sentence."
    },

    {
        src:"product-9.webp",
        pname:"Utopia Sofa",
        price:"$11.99",
        content:"A good concluding sentence brings a paragraph to a polished end. It may give a summary of the main topic, a concluding sentence also gives a final take on the topic and leaves the reader with complete information. "
    },
    
]



image.forEach((pic,index) => { 
    pic.addEventListener("click",() =>
    {
        // console.log("hello");
        localStorage.clear();
        window.open("description.html","blank");
        localStorage.setItem("dummy",obj[index])
        let json = JSON.stringify(obj[index])
        localStorage.setItem("object",json);
        

    });
});