document.getElementById("reveal-button").addEventListener("click", function(){
    document.getElementById("rose").classList.remove("hidden");
    document.getElementById("text").classList.remove("hidden");
    document.getElementById("arrow").classList.remove("hidden");
    document.getElementById("no-button").classList.remove("hidden");
    document.getElementById("yes-button").classList.remove("hidden");
  });

  function getRandomNumber() {
    return Math.floor(Math.random() * 3);
  }




  document.getElementById("no-button").addEventListener("click", function(){
    let responses = ["i think you pressed the wrong button", "hmmm let's go back and decide again", "i think you are looking for another answer"]
    alert(responses[getRandomNumber()]);
  });

  document.getElementById("yes-button").addEventListener("click", function(){
    alert("i love you forever and always");
  });