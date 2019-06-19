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
      .catch(error => errorAlert());
  }

  function displayResults(responseJson) {
    console.log(responseJson);
    removeCurrentImage();

    if (responseJson.status === "success") {
      $('.image_container').append(
        `<img src="${responseJson.message}" class="dog_image" alt="dog image">`
      );
      $('section').removeClass('hidden');
    } else {
      errorAlert();
    }
  }

  function removeCurrentImage() {
    $('.image_container').empty();
  }

  function errorAlert() {
    alert('Sorry, no pictures for that breed. Please choose another.');
  }
});