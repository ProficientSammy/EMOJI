// Array of emojis and their decimal codes
const emojis = [
    { code: 128512, symbol: "😀" },
    { code: 128513, symbol: "😁" },
    { code: 128514, symbol: "😂" },
    { code: 128515, symbol: "😃" },
    { code: 128516, symbol: "😄" },
    { code: 128517, symbol: "😅" },
    { code: 128518, symbol: "😆" },
    { code: 128519, symbol: "😉" },
    { code: 128520, symbol: "😊" },
    { code: 128521, symbol: "😋" },
    { code: 128522, symbol: "😎" },
    { code: 128523, symbol: "😍" }
  ];
  
  // Selected the emoji gallery section
  const gallery = document.getElementById("emoji-gallery");
  
  // Loop for each emoji and created an element for it
  emojis.forEach(emoji => {
    const emojiItem = document.createElement("div");
    emojiItem.classList.add("emoji-item");
  
    const emojiChar = document.createElement("span");
    emojiChar.classList.add("emoji");
    emojiChar.innerHTML = `&#${emoji.code};`;
  
    const emojiCode = document.createElement("span");
    emojiCode.classList.add("code");
    emojiCode.textContent = emoji.code;
  
    
    emojiItem.appendChild(emojiChar);
    emojiItem.appendChild(emojiCode);
    gallery.appendChild(emojiItem);
  });
  