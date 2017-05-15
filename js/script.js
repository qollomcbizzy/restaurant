$(document).ready(function(){
//  function isValidEmailAddress(emailAddress) {
    //    var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
      //  return pattern.test(emailAddress);
  //  };
  $("form#subscribtion").submit(function(event){
    event.preventDefault();
    var email=$("input#subscribed").val();
    //var validate=isValidEmailAddress(email);
    if(email.test(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)){
      alert("you are subscribed");
    }
    else{
    alert("you entered wrong email");
  }
  });
});
