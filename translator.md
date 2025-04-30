---
layout: default
title: Translator
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
#input, #output1, #output2 {
  font-family: "Source Code Pro", monospace
}
#input {
  resize: none;
  height: 40vh;
}
main section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
  margin: 0;
}
</style>

# Vertalen naar het Filorano

|     | /a/ | /i/ | /e/ | /o/ |
| --- | --- | --- | --- | --- |
| /p/ |  d  |  π  |  p  |  q  |
| /t/ |  θ  |  ζ  |  t  |  τ  |
| /k/ |  c  |  ψ  |  k  |  μ  |
| /n/ |  ξ  |  ε  |  n  |  u  |
| /l/ |  λ  |  δ  |  l  |  ω  |
| /s/ |  z  |  σ  |  s  |  и  |
| /j/ |  y  |  x  |  j  |  л  |
| /f/ |  g  |  φ  |  f  |  ч  |
| /r/ |  ж  |  я  |  r  |  ю  |
| /m/ |  д  |  h  |  m  |  ъ  |

<section>

<h2>Inputtekst</h2>
<h2>Letterlijke outputtekst</h2>
<h2>Verbeterde outputtekst</h2>

<textarea id="input"></textarea>
<div id="output1"></div>
<div id="output2"></div>

</section>

<script src="/assets/scripts/translator.js"></script>
