function strikeStr(str) {
  const words = str.trim().split(/\s+/);
  if (words.length <= 3) return str;

  let result = '';
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if ((i + 1) % 3 === 0 && i !== words.length - 1) {
      result += ' \n';
    } else if (i !== words.length - 1) {
      result += ' ';
    }
  }
  return result;
}

