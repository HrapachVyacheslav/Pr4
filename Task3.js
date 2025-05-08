function truncate(str, maxlength) {
      if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "…";
      }
      return str;
    }

    function truncateText() {
      const text = document.getElementById("textInput").value;
      const maxLength = parseInt(document.getElementById("maxLengthInput").value);
      const result = document.getElementById("result");

      if (!text || isNaN(maxLength) || maxLength <= 0) {
        result.textContent = "Будь ласка, введіть текст і коректну довжину.";
        return;
      }

      result.textContent = `Результат: ${truncate(text, maxLength)}`;
    }