const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    "All commands: <span class='code'>name</span>, <span class='code'>age</span>, <span class='code'>country</span>, <span class='code'>contact</span>, <span class='code'>reboot</span>",
  name: "Arda Engin Ebcim",
  age: "I am 16 years old",
  country: "in Turkey 🇹🇷",
  contact:
    "<a href='https://instagram.com/ardaengnebcim' class='success link'>Instagram</a>, <a href='https://github.com/ArdaEnginEbcim/' class='success link'>Github</a>, <a href='mailto:ardaengnebcim@gmail.com' class='success link'>Mail</a>",
  reboot: "<a href='../meska.html' class='success link'>Click.</a>",
};

let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output =
    "<div class='terminal-line'><span class='success'>➜</span> <span class='directory'>~</span>" +
    input +
    "</div>";
  if (!COMMANDS.hasOwnProperty(input)) {
    output += "<div class='terminal-line'>no such command: " + input + "</div>";
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML =
    terminalOutput.innerHTML +
    "<div class='terminal-line'>" +
    output +
    "</div>";
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
