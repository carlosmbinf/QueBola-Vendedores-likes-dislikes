Template.RecipeSingle.onCreated(function() {
	this.editMode = new ReactiveVar(false);

	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		console.log(id);
		self.subscribe('userdetails',id);
	});
});

Template.RecipeSingle.helpers({
	users: ()=> {
		var id = FlowRouter.getParam('id');
		return Meteor.users.findOne({_id:id});
	},
	inMenu: ()=> {
		var id = FlowRouter.getParam('id');
		return Meteor.users.findOne({_id:id}).inMenu;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	}
});

Template.RecipeSingle.events({
	
	'click .toggle-menu': function() {
		var id = FlowRouter.getParam('id');
		// alert( 'id '+id + ', inMenu ' + this.recipe.inMenu );
		console.log(id);
		
		Meteor.call('toggleMenuItem', id, Meteor.users.findOne({_id:id}).inMenu);
	},
	'click .fa-trash' : function() {
		var id = FlowRouter.getParam('id');
		Meteor.call('deleteRecipe', id);
		FlowRouter.go('recipe-book');
	},
	'click .fa-pencil' : function(event, template) {
		template.editMode.set(!template.editMode.get());
	}
});