Meteor.publish('inMenu', function(){
	return inMenuCollection.find({});
});
Meteor.publish('user', function(){
	return Meteor.users.find({_id:Meteor.userId()});
});
Meteor.publish('users', function(){
	return Meteor.users.find({});
});
Meteor.publish('usersInMenu', function(){
	return Meteor.users.find({inMenu: true});
});
Meteor.publish('userdetails', function(id) {
	// check(id, String);
	return Meteor.users.find({_id: id});
});

Meteor.publish('likesdislikes', function() {
	// check(id, String);
	return inMenuCollection.find({});
});

