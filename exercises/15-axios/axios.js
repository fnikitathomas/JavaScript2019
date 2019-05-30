/**
 * As a user, I should be greeted with a list of all rick and morty characters
 * As a user, I should be able to select a character from the dropdown and have that user displayed as an image
 * Helpful link for populating a dropdown
 *
 * This is the URL for the API you will be using. The method should be GET.
 * https://rickandmortyapi.com/api/character
 *
 * Use the AXIOS library to make AJAX requests.
 */

/**
 * Call on this function to populates the dropdown on the page with a character.
 * @param {Object} data the entire AJAX response
 */
const populateDropDown = data => {
  // $("#dropdown").empty(); You can't choose Rick if you're 'empty'
  data.forEach(p => { // This is what you need to replace
    $("#dropdown").append(
      $("<option></option>")
        .val(p.image)
        .html(p.name)
    );
  });
};

/**
 * Axios here
 */
// Change "reqres.in" to demo throwing an error

let b0 = []
const paginatedAPI = (uri, arr) => {
   axios.get(uri)
  .then(resp => {
    populateDropDown(resp.data.results)
    arr = [...arr,...resp.data.results] // cache all the results
    if(resp.data.info.next){
      paginatedAPI(resp.data.info.next,arr)
    }
    b0 = arr
  })
  .catch(data => {
    const htmlStr = '<div class="text-danger">We\'re sorry, but an unexpected error occurred</div>';
    $('.container').append(htmlStr);
  });
}

paginatedAPI('https://rickandmortyapi.com/api/character',b0)

$('#dropdown').change((e) => {
  let imgSrc  = $(e.target).val()
  if(imgSrc){
    $('#img-location').html(`<img src="${imgSrc}">`)
  }
  else $('#img-location').html('')
})
