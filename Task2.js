function checkSpam(str) {
      const lowerStr = str.toLowerCase();
      return lowerStr.includes('рос') || lowerStr.includes('xxx');
    }

    function checkText() {
      const input = document.getElementById("textInput").value;
      const result = document.getElementById("result");

      if (!input) {
        result.textContent = "Будь ласка, введіть текст.";
        return;
      }

      const isSpam = checkSpam(input);
      result.textContent = isSpam
        ? "Виявлено спам!"
        : "Текст не містить спам.";
      result.style.color = isSpam ? "red" : "green";
    }