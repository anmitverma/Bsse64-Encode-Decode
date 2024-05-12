function ePage() {
    document.getElementById("page").innerHTML = `<head id="page">
    <link rel="stylesheet" href="style.css">
    <script src="api.js"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base 64 | Encode</title>
</head>
<body>
    
<h1 class="header1">Base 64, Encode</h1>

<input type="text" class="field" id="toE">

<br>
<br>

<button class="btn" onclick="eCode()">Encode</button>
<div class="tooltip">
    <button class="btn" onclick="copy()" onmouseout="outFunc()">
      <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
      Copy Output
      </button>
</div>

<br>
<br>

<textarea id="coded" class="coded" cols="10" rows="2.5" readonly placeholder="Output"></textarea>
<footer>&copy;Nevi 2024 - 20XX</footer>

</body>`;
}

function eCode() {
    let toE = document.getElementById("toE").value;
    document.getElementById("coded").innerHTML = btoa(toE);
}

function dPage() {
    document.getElementById("page").innerHTML = `<head id="page">
    <link rel="stylesheet" href="style.css">
    <script src="api.js"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base 64 | Decode</title>
</head>
<body>
    
<h1 class="header1">Base 64, Decode</h1>

<input type="text" class="field" id="toD">

<br>
<br>

<button class="btn" onclick="dCode()">Decode</button>
<div class="tooltip">
    <button class="btn" onclick="copy()" onmouseout="outFunc()">
      <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
      Copy Output
      </button>
</div>

<br>
<br>

<textarea id="coded" class="coded" cols="10" rows="2.5" readonly placeholder="Output"></textarea>
<footer>&copy;Nevi 2024 - 20XX</footer>

</body>`;
}

function dCode() {
    let toE = document.getElementById("toD").value;
    document.getElementById("coded").innerHTML = atob(toE);
}

function copy() {
    var copyText = document.getElementById("coded");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }