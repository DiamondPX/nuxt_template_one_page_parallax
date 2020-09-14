const handleFormSummernote = function () {
  'use strict'
  $('#comment').summernote({
    placeholder: 'Leave a comment here...',
    height: 300,
  })
}

const ForumDetailsPage = (function () {
  'use strict'
  return {
    // main function
    init() {
      handleFormSummernote()
    },
  }
})()

$(document).ready(function () {
  ForumDetailsPage.init()
})
