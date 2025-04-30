const chars = {
  'pa': 'd',
  'ta': 'θ',
  'ka': 'c',
  'na': 'ξ',
  'la': 'λ',
  'sa': 'z',
  'ja': 'y',
  'fa': 'g',
  'ra': 'ж',
  'ma': 'д',
  'pi': 'π',
  'ti': 'ζ',
  'ki': 'ψ',
  'ni': 'ε',
  'li': 'δ',
  'si': 'σ',
  'ji': 'x',
  'fi': 'φ',
  'ri': 'я',
  'mi': 'h',
  'pe': 'p',
  'te': 't',
  'ke': 'k',
  'ne': 'n',
  'le': 'l',
  'se': 's',
  'je': 'j',
  'fe': 'f',
  're': 'r',
  'me': 'm',
  'po': 'q',
  'to': 'τ',
  'ko': 'μ',
  'no': 'u',
  'lo': 'ω',
  'so': 'и',
  'jo': 'л',
  'fo': 'ч',
  'ro': 'ю',
  'mo': 'ъ'
};

const input = document.getElementById("input");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");

input.addEventListener("input", () => {
  const str1 = input.value.toLowerCase();

  let result1 = "";
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];

    if (/\s/.test(char)) {
      result1 += char;
    } else if (/[.,!?;:(){}[\]'"`~]/.test(char)) {
      result1 += char;
    } else {
      const nextChar = str1[i + 1];

      const pair = char + nextChar;

      if (chars[pair]) {
        result1 += chars[pair];
        i++;
      } else {
        if (/[\s.,!?;:(){}[\]'"`~]/.test(nextChar) || !nextChar) {
          const variantPair = char + "e";
          if (chars[variantPair]) {
            result1 += chars[variantPair] + chars[variantPair];
          } else {
            result1 += "?"
          }
        } else {
          result1 += "?"
        }
      }
    }
  }

  output1.innerText = result1;

  const str2 = str1.replace(/v/g, 'f').replace(/d/g, 't').replace(/q/g, 'k').replace(/c/g, 's').replace(/y/g, 'j');
  let result2 = "";

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];

    if (/\s/.test(char)) {
      result2 += char;
    } else if (/[.,!?;:(){}[\]'"`~]/.test(char)) {
      result2 += char;
    } else {
      const nextChar = str2[i + 1];

      const pair = char + nextChar;

      if (chars[pair]) {
        result2 += chars[pair];
        i++;
      } else {
        if (/[\s.,!?;:(){}[\]'"`~]/.test(nextChar) || !nextChar) {
          const variantPair = char + "e";
          if (chars[variantPair]) {
            result2 += chars[variantPair] + chars[variantPair];
          } else {
            result2 += "?"
          }
        } else {
          result2 += "?"
        }
      }
    }
  }

  output2.innerText = result2;

}); // This is just a sample script. Paste your real code (javascript or HTML) here.
