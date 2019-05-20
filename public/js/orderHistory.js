/* 
Necessary data: 
Tasker Name
Pickup Time
Phone Number
Order Status
Pickup 
Drop Off
Status
*/

fetch('/api/orders')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
     console.log('Fetch Error :-S', err);
});