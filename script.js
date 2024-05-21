const settingsButton = document.getElementById("showSettings");
const settingsPanel = document.getElementById("settingsPanel");


const changeStylesheetButton = document.getElementById('changeStylesheet');
let currentStylesheet = 'styles.css'; 

changeStylesheetButton.addEventListener('click', () => {
  resetFontSize(text1Elements, 'text1');
  resetFontSize(text2Elements, 'text2');
  resetFontSize(text3Elements, 'text3');
  resetFontSize(text4Elements, 'text4');
  resetFontSize(text5Elements, 'text5');
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

const text1Elements = document.querySelectorAll('.text1');
const text2Elements = document.querySelectorAll('.text2');
const text3Elements = document.querySelectorAll('.text3');
const text4Elements = document.querySelectorAll('.text4');
const text5Elements = document.querySelectorAll('.text5');

const initialFontSizes = {
  text1: [],
  text2: [],
  text3: [],
  text4: [],
  text5: [],
};

text1Elements.forEach((element, index) => initialFontSizes.text1[index] = getComputedStyle(element).fontSize);
text2Elements.forEach((element, index) => initialFontSizes.text2[index] = getComputedStyle(element).fontSize);
text3Elements.forEach((element, index) => initialFontSizes.text3[index] = getComputedStyle(element).fontSize);
text4Elements.forEach((element, index) => initialFontSizes.text4[index] = getComputedStyle(element).fontSize);
text5Elements.forEach((element, index) => initialFontSizes.text5[index] = getComputedStyle(element).fontSize);

const increaseFontSize = (elements) => {
  elements.forEach(element => {
    const currentFontSize = parseFloat(getComputedStyle(element).fontSize);
    element.style.fontSize = `${currentFontSize * 1.1}px`; 
  });
};

const decreaseFontSize = (elements) => {
  elements.forEach(element => {
    const currentFontSize = parseFloat(getComputedStyle(element).fontSize);
    element.style.fontSize = `${currentFontSize / 1.1}px`; 
  });
};

const resetFontSize = (elements, type) => {
  elements.forEach((element, index) => {
    element.style.fontSize = initialFontSizes[type][index];
  });
};

increaseFontSizeButton.addEventListener('click', () => {
  increaseFontSize(text1Elements);
  increaseFontSize(text2Elements);
  increaseFontSize(text3Elements);
  increaseFontSize(text4Elements);
  increaseFontSize(text5Elements);
});

decreaseFontSizeButton.addEventListener('click', () => {
  decreaseFontSize(text1Elements);
  decreaseFontSize(text2Elements);
  decreaseFontSize(text3Elements);
  decreaseFontSize(text4Elements);
  decreaseFontSize(text5Elements);
});

