function ucFirst(str) {
      if (!str) return str;
      return str[0].toUpperCase() + str.slice(1);
    }

    function convertFirstLetter() {
      const input = document.getElementById("textInput").value;
      const result = document.getElementById("result");

      if (!input) {
        result.textContent = "Будь ласка, введіть текст.";
        return;
      }

      result.textContent = `Результат: ${ucFirst(input)}`;
    }