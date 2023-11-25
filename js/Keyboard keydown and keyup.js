"use strict";

window.addEventListener("keydown", (event) => {
  console.log("Event Key : \n ", event.key);
  console.log("Event Code : \n", event.code);
});

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyZ" && (event.ctrlKey || event.metaKey)) {
    console.log("Click key");
  }
  console.log(event.repeat);
});

const input = document.querySelector("input");

function checkPhoneKey(key) {
  return (
    (key >= 0 && key <= 9) ||
    ["+", "( , )", "-", "Delete", "ArrowLeft", "ArrowRight"].includes(key)
  );
}

input.addEventListener("keydown", checkPhoneKey);

document.addEventListener("keydown", (event) => {
  console.log(`Натиснута клавіша ${event.code} [${event.key}]`);
});

document.addEventListener("keyup", (event) => {
  console.log(`Відпущена клавіша ${event.code} [${event.key}]`);
});

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyA" && (event.ctrlKey || event.metaKey)) {
    alert("Click");
  }
});

document.addEventListener("keydown", (event) => {
  console.log("Натиснута клавіша ", event.code, `[${event.key}]`);
  console.log(event.repeat);
});

document.addEventListener("keydown", (event) => {
  console.log(`Натиснута клавіша ${event.code} (${event.key})`);
});

document.addEventListener("keyup", (event) => {
  console.log(`Відпущена клавіша ${event.code} (${event.key})`);
});

document.addEventListener("keydown", function (event) {
  if (event.code === "KeyZ" && (event.ctrlKey || event.metaKey)) {
    console.log("Click to Ctrl + Z");
  }
  console.log(event.repeat);
});

function checkPhoneKey(key) {
  return (key >= "0" && key <= "9") || ["+", "-", "( , )"].includes(key);
}

document.addEventListener("keydown", checkPhoneKey);

document.addEventListener("keydown", (event) => {
  console.log(event.type);
  console.log(event.code);
  console.log(event.key);
  console.log(event.repeat);
});

document.body.style.height = "200vh";

window.addEventListener("scroll", (event) => {
  console.log(parseInt(scrollY) + " px");
});

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
});

document.addEventListener("keydown", (event) => {
  console.log(`Event code [${event.code}]`);
  console.log(`Event key [${event.key}]`);
});

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyF" && (event.ctrlKey || event.metaKey)) {
    alert("Click");
  }
});

const runOfKeys = (func, ...codes) => {
  let pressed = new Set();

  document.addEventListener("keydown", function (event) {
    pressed.add(event.code);
  });
  for (let code of codes) {
    if (!pressed.has(code)) {
      return;
    }
  }
  pressed.clear();
  console.log(pressed);

  func();
  document.addEventListener("keyup", function (event) {
    pressed.delete(event.code);
  });
  console.log(pressed);
};

// const input = document.querySelector(".input__text");

input.addEventListener("keydown", (event) => {
  console.log("Event Code: ", event.code);
  console.log("Event Key: ", `[${event.key}]`);
});

document.addEventListener("keydown", (event) => {
  if (
    (event.code === "KeyA" || event.code === "KeyQ") &&
    (event.ctrlKey || event.metaKey)
  ) {
    console.log("Подія спрацювала!");
  }
});

const checkPhoneKey = (key) => {
  return (
    (key >= "0" && key <= "9") ||
    ["+", "-", "( , )", "Backspace", "ArrowLeft", "ArrowRight"].includes(key)
  );
};

input.onkeydown = function (event) {
  return checkPhoneKey(event.key);
};

const block = document.querySelector(".block");

block.addEventListener("mouseover", (event) => {
  block.innerHTML = "Курсор зайшов на елемент";
  console.log("target ", event.target);
  console.log("relatedTarget", event.relatedTarget);
});

block.addEventListener("mouseout", (event) => {
  block.innerHTML = "Курсор покинув елемент";
  console.log("target ", event.target);
  console.log("relatedTarget", event.relatedTarget);
});
