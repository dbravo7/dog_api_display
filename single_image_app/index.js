"use strict";

$(document).ready(function () {

  $('form').submit(event => {
    event.preventDefault();
    let breed = $("input[type=text]").val();
    getDogImage(breed.toLowerCase());
  });

  function getDogImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert('Sorry, no pictures for that breed. Please choose another.'));
  }

  function displayResults(responseJson) {
    console.log(responseJson);
    removeCurrentImages();

    $('.image_container').append(
      `<img src="${responseJson.message}" class="dog_image" alt="dog image">`
    );

    $('section').removeClass('hidden');
  }

  function removeCurrentImages() {
    $('.image_container').empty();
  }
});