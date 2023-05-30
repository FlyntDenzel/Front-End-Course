// const btn = document.getElementById('btn-1');
// function addParagraph(){
//     const paragraph = document.createElement('p');
//     paragraph.textContent = 'A new element has been created';
//     document.body.appendChild(paragraph);
// }
// //using an eventlistener to call the function
// btn.onclick = addParagraph;


function clearAll(){
    const meme = document.querySelector('.meme');
    const joke = document.querySelector('.joke');
    const wisdom = document.querySelector('.wisdom');
    const riddle = document.querySelector('.riddle');

    meme.innerHTML = "";
    joke.innerHTML = "";
    wisdom.innerHTML = "";
    riddle.innerHTML = "";

}

function showMeme(){
    const memeContainer = document.createElement('p');
    // const memeText = 
}


function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }


const memes = [
    "https://i.redd.it/a0v87gwzoge61.jpg",
    "https://i.redd.it/q29egav34ee61.jpg",
    "https://i.redd.it/iij16swxjie61.jpg",
    "https://i.redd.it/vek7dm2hrge61.jpg",
    "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png",
    "https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png"
]

const jokes = [
    "This statement",
    "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
    "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
    "All programmers are playwrights, and all computers are lousy actors.",
    "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds."
]

const quotes = [
    {
        quote:
          "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "Harold Abelson",
      },
      {
        quote:
          "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
        author: "Rick Cook",
      },
      {
        quote:
          "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
        author: "John Woods",
      },
      {
        quote:
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
      },
      {
        quote: "Truth can only be found in one place: the code.",
        author: "Robert C. Martin",
      }
]

const riddles = [
    {
        question:
          "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
        answer: "An echo",
      },
      {
        question:
          "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
        answer: "A Candle",
      },
      {
        question:
          "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
        answer: "A Map",
      },
      {
        question:
          "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
        answer: 'The letter "R"',
      },
      {
        question:
          "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
        answer: "All the people were married",
      }
]