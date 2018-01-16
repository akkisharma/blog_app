$(function(){

  $("#post_form").submit(function(event){
   validateForm(event);
 });

  $("#comment-form").submit(function(event){
   validateForm(event);
 });

  $('#post_form').validate({
    rules: {
      '[name="post[title]"]': {
        required: true,
        minlength: 3
      },
      '[name="post[content]"]': {
        required: true,
        minlength: 5
      }
    },

    messages: {
      '[name="post[title]"]': {
        required: "Please enter post title",
        minlength: "Your Title must be at least 3 characters long"
      },
      '[name="post[content]"]': {
        required: "Please enter post content",
        minlength: "Your content must be at least 5 characters long"
      }
    }

  });

  $('#comment-form').validate({
    rules: {
      'comment[commenter]': {
        required: true,
        minlength: 3
      },
      'comment[body]': {
        required: true,
        minlength: 5
      }
    },

    messages: {
      'comment[commenter]': {
        required: "Please enter Name title",
        minlength: "Your Name must be at least 3 characters long"
      },
      'comment[body]': {
        required: "Please enter comment Body",
        minlength: "Your content Body must be at least 5 characters long"
      }
    }

  });

});

function validateForm(event) {
  if($(event.target).valid()){
    $(event.target).submit;
  }
  else{
    event.preventDefault();
    return false;
  }
}