var compArray = [
    "Your experience has given you an intractable amount of wisdom",
    "When you listen, people feel heard",
    "You can make someone's day better today",
    "You meet people with an open mind",
    "You're good at finding things you like in people",
    "You give everyone a chance",
    "You try to live your life according to your values",
    "Your values are strong",
    "The way you live your life makes the world a better place",
    "You create communities around you",
    "People feel valued by you",
    "You're hilarious!",
    "You're good at making people laugh",
    "You know when people need a break",
    "You help the people around you to relax when they're nervous",
    "You're good at caring for others",
    "You make a mean cup of tea",
    "You attract good, authentic, deep people",
    "You are a good, authentic, deep person",
    "You are good to people who need a friend",
    "You are so interesting",
    "When you talk, you say valuable things",
    "You radiate warmth",
    "You are adventurous",
    "You're up for doing things that scare you",
    "You love that about yourself",
    "You trust your instincts about people",
    "You make people smile",
    "You are becoming very good at setting boundaries",
    "People want to be around you because you're warm and honest",
    "You're really good at looking after your energy",
    "You know when to give and when to rest",
    "When you're on, you can light up a room",
    "You value your quiet time",
    "You're creative",
    "You're generous of spirit",
    "You can solve problems when other people falter",
    "You eminate abundance",
    "You help people",
    "Your smile makes people feel warm"
];
var speak = 0;

function goLong() {
    speak = compArray[Math.floor(Math.random() * compArray.length)];
    document.getElementById("title").innerHTML = (speak);
 }

