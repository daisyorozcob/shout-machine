window.onload = function () {

    const form = document.querySelector("form");
    form.onsubmit = function (event) {
      const userAnswer = document.querySelector("input#user-input").value;
      document.querySelector("p#answer").innerText = userAnswer.toUpperCase();
      event.preventDefault();
    };
  
  };