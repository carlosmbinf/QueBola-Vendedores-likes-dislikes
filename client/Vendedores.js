Template.Vendedores.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('users');
	});
});

Template.Vendedores.helpers({
	vendedores: ()=> {
		return Meteor.users.find({});
	}
});







