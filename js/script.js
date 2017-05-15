$(document).ready(function(){
//  function isValidEmailAddress(emailAddress) {
    //    var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
      //  return pattern.test(emailAddress);
  //  };
  $("form#subscribtion").submit(function(event){
    event.preventDefault();
    var email=$("input#subscribed").val();
    //var validate=isValidEmailAddress(email);
    var re=new RegExp();
      re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(re.test(email)){
     alert("you are  subscribed");
  }
  else {
    alert("Enter a valid gmail");
  }
  $("form#subscribtion")[0].reset();
  });
});
