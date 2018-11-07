initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            document.getElementById("name-container").innerHTML=displayName;
            document.getElementById("basta_esci").addEventListener("click", function(){
                
                firebase.auth().signOut().then(function() {
                 window.location.replace("index.html");
              }).catch(function(error) {
                // An error happened.
              });
            });
            
            }else {
            // User is signed out.
            window.location.replace("index.html");
          }
        }, function(error) {
          console.log(error);
        });
      };

      window.addEventListener('load', function() {
        initApp()
      });

