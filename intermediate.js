
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    

  });

 
  Accounts.onCreateUser(function (options, user) {
// console.log(options);

    if (!user.services.facebook) {
      user.like = [{likedislike:'' , _id:''}];
      user.comment = [{comment:[],_id:''}]
      // user.vendendor = false;
      if(Meteor.users.find().count()==0){
        user.isAdmin = true
      }else{
        user.isAdmin = false
      }
      user.inMenu = false
      // inMenuCollection.insert({idUser:user._id, inMenu: false });
      
        return user;
    }


    user.username = user.services.facebook.name;
    user.emails = [{address: user.services.facebook.email, verified: true}];
    user.like = [{likedislike:'' , _id:''}];
    user.comment = [{comment:[],_id:''}]
    // user.vendendor = false;
    if(Meteor.users.find().count()==0){
      user.isAdmin = true
    }else{
      user.isAdmin = false
    }
    user.inMenu = false
    // inMenuCollection.insert({idUser:user._id, inMenu: false });
        
    return user;

});

  ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '1586559028173170',
    secret: 'bf4f4eb2c78985730190c434d6781d65'
});

// Meteor.loginWithFacebook({
//   requestPermissions: ['user_friends', 'public_profile', 'email']
// }, (err) => {
//   if (err) {
//     // handle error
//   } else {
//     user.emails = [{address: email, verified: true}];
//     // successful login!
//   }
// });

}
