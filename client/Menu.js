Template.Menu.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('usersInMenu');
		self.subscribe('likesdislikes');
	});
});

Template.Menu.helpers({
	recipes: ()=> {
		return Recipes.find({inMenu: true});
	},	
	users: ()=> {
		// add dentro del find()    {inMenu: true}
		// inMenuCollection.find({ idUser: this._id }).fetch();
		return Meteor.users.find({inMenu: true});
	}
});

Template.MenuItem.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
		self.subscribe('userdetails',this.id);
	});
});

Template.MenuItem.helpers({
	like: (id)=> {
		return inMenuCollection.find({iduseradarlike: id ,likedislike: 1}).count();
	},
	dislike: (id)=> {
		// add dentro del find()    {inMenu: true}
		// inMenuCollection.find({ idUser: this._id }).fetch();
		
		
		return inMenuCollection.find({iduseradarlike: id,likedislike: 0}).count();
	}
});

Template.MenuItem.events({
	'click .like': function() {
		// const objet = inMenuCollection.find({ idUser: this._id }).fetch();  arreglo
		Meteor.call('addlikedislike', this._id , Meteor.userId(), 1);
	},
	'click .dislike': function() {
		// const objet = inMenuCollection.find({ idUser: this._id }).fetch();  arreglo
		Meteor.call('addlikedislike', this._id , Meteor.userId(), 0);
	}

});