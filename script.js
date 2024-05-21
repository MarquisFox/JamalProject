const settingsButton = document.getElementById("showSettings");
const settingsPanel = document.getElementById("settingsPanel");


const changeStylesheetButton = document.getElementById('changeStylesheet');
let currentStylesheet = 'styles.css'; 

changeStylesheetButton.addEventListener('click', () => {
  if (currentStylesheet === 'styles.css') {
    changeStylesheet('styles2.css'); 
    currentStylesheet = 'styles2.css'; 
  } else {
    changeStylesheet('styles.css'); 
    currentStylesheet = 'styles.css'; 
  }
});

function changeStylesheet(newStylesheetUrl) {
  const existingLink = document.querySelector('link[rel="stylesheet"][href="' + currentStylesheet + '"]');
  if (existingLink) {
    existingLink.href = newStylesheetUrl;
  }
}

const increaseFontSizeButton = document.getElementById('increaseFontSize');
const decreaseFontSizeButton = document.getElementById('decreaseFontSize');
const body = document.body;

let currentFontSize = 16; 

increaseFontSizeButton.addEventListener('click', () => {
  currentFontSize += 2; 
  document.querySelectorAll('div').forEach(div => {
  div.style.fontSize = currentFontSize + 'px';
  });
});
decreaseFontSizeButton.addEventListener('click', () => {
  currentFontSize -= 2; 
  document.querySelectorAll('div').forEach(div => {
    div.style.fontSize = currentFontSize + 'px';
  });
});

