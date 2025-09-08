const buttons = document.querySelectorAll('.button');
const body = document.body;

const colors = {
  "Soft White": "#F5F5F5",
  "Warm Beige": "#EADBC8",
  "Greige": "#D6CCC2",
  "Charcoal Gray": "#3C3C3C",

  "Sky Blue": "#A2D2FF",
  "Mint Green": "#B7E4C7",
  "Lavender": "#C8A2C8",
  "Soft Gray": "#E9ECEF",

  "Terracotta": "#E07A5F",
  "Mustard Yellow": "#F4A261",
  "Warm Brown": "#8D6E63",
  "Cream White": "#FAF3DD",

  "Navy Blue": "#264653",
  "Forest Green": "#2A9D8F",
  "Deep Burgundy": "#800020",
  "Charcoal Black": "#1C1C1C"
};

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const color = colors[e.target.id];
    if (color) {
      body.style.backgroundColor = color;
    }
  });
});