const data = [
  'Joshua',
  'Sal',
  'Mel',
  'Ej',
  'Cj',
  'Maam Mich',
  'Sir Ian',
];

function myFunction() {
  window.ReactNativeWebView.postMessage(JSON.stringify(data));
}

var i, len, text;
for (i = 0, len = data.length, text = ""; i < len; i++) {
  text += data[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
