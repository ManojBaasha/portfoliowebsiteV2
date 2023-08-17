const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Web Wizard 🕸️",
    "Projects Galore 🚀",
    "Passionate Coder 🤖",
    "Innovative Geek 🛠️",
    "Tech Enthusiast 🌌",
    "Problem-Solving Ninja 🎯",
    "JavaScript Juggler 🤹‍♂️",
    "Python Maestro 🐍",
    "Embedded Systems Sorcerer 🪄",
    "Creative Code Conjurer 🎩",
    "UI/UX Explorer 👁️",
    "Software Architect 🏰",
    "Learning Addict 📚",
    "Coffee-Powered Coder ☕",
    "Startup Survivor 🚀",
    "Code Composer 🎶",
    "Tech Troubleshooter 🔧",
    "Debugging Diver 🐞",
    "Pixel Perfectionist 🖼️",
    "Curious Mind with a Keyboard ⌨️",
    "Tech Whiz Kid 🧙‍♂️",
    "Code Commander 🛡️",
    "Algorithm Alchemist 🧪",
    "Byte-sized Innovator 💡",
    "Pixel Picasso 🎨",
    "Startup Starship Captain 🚀",
    "Digital Dreamweaver 💭",
    "Tech Tango Dancer 💃",
    "Ctrl+C, Ctrl+V Champion 🏆",
    "Full Stack Funambulist 🎪",
    "404 Error Enchanter 🧙‍♀️",
    "Byte-Size Storyteller 📖",
    "GUI Guru 🖥️",
    "Console Conductor 🎵",
    "Git Magician 🪄",
    "Browser Whisperer 🌐",
    "Cyber Code Cowboy 🤠",
    "Bit-Flipping Philosopher 🤔",
    "Virtual Reality Voyager 🚀",
    "Loop Lover 🔁",
    "Code Czar 👑",
    "Pixel Wrangler 🎮",
    "Digital Doodler 🖋️",
    "Syntax Sorcerer 🔮",
    "Algorithm Archer 🏹",
    "Ctrl+Z Specialist ⏪",
    "Tech Trekker 🏞️",
    "Binary Bard 🎭",
    "Whitespace Wizard ␣",
    "Crypto Creator 💰",
    "Kernel Kung Fu Master 🥋",
    "Browser Battlefront General ⚔️",
    "Code Cartographer 🗺️",
    "Enthusiastic Debugger 🔍",
    "Stack Overflow Explorer 🗂️",
    "Function Fanatic 🎉",
    "Async Adept ⏱️",
    "Tech Time Traveler ⌛",
    "Error Ender 🚫",
    "Syntax Samurai ⚔️",
    "Pixel Pusher 🎨",
    "Browser Bouncer 🏀",
    "Commit Conductor 🎼",
    "Code Climber 🧗‍♂️",
    "Interface Illusionist 🌟",
    "Cyber Sketch Artist 🎨",
    "Class Constructor 🏗️",
    "API Acrobat 🤸‍♂️",
    "Debugger Diviner 🔮",
    "Whitespace Wanderer ␢",
    "Digital Diplomat 🌐",
    "Pattern Perceiver 🔍",
    "Resourceful Resolver 🛠️",
    "Loop Luminary 🔁",
    "Bug Bash Brawler 🐛",
    "Crypto Cryptographer 🕵️‍♂️",
    "Kernel Keymaster 🗝️",
    "GUI Gladiator 🛡️",
    "Terminal Tactician 💻",
    "Function Funkster 🕺",
    "Syntax Sentinel 🛡️",
    "Pixel Plumber 🚰",
    "Binary Broker 📈",
    "Ctrl+Z Zealot ⏪",
    "Tech Trek Trailblazer 🚀",
    "Gym Enthusiast 💪",
    "Gaming Guru 🎮",
    "by Manoj, Tech Mythbuster 🛸"
];

const morphTime = 1;
const cooldownTime = 2;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();
