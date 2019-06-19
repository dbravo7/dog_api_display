"use strict"; 

$(document).ready(function() {

  $('form').submit(event => {
    event.preventDefault();
    const num = parseInt($("input[type=number]").val());
    getDogImages(num);
  });

  function getDogImages(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson));
  }

  function displayResults(responseJson) {
    console.log(responseJson);
    removeCurrentImages();

    let count = responseJson.message.length;
    for (let i = 0; i < count; i++) {

      $('.image_container').append(
        `<img src="${responseJson.message[i]}" class="dog_image" alt="dog image">`
      );
    }
    $('section').removeClass('hidden');
  }

  function removeCurrentImages() {
    $('.image_container').empty(); 
  }
});