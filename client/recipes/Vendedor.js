Template.Vendedor.onCreated(function(){
	this.editMode = new ReactiveVar(false);
	// this.editMode = new ReactiveVar();
	// this.editMode.set(false);
	var self = this;
	self.autorun(function() {
		self.subscribe('inMenu',this._id);
		self.subscribe('userdetails',this._id);
	});
});

Template.Vendedor.helpers({
	
	checked: function() {
		return Meteor.users.findOne({_id: this.id});
	}
});

Template.Vendedor.events({
	'click .vended': function() {
		// const objet = inMenuCollection.find({ idUser: this._id }).fetch();  arreglo
		Meteor.call('toggleMenuItem', this._id , this.inMenu);
	},
	'click .fa-trash': function() {
		// const objet = inMenuCollection.find({ idUser: this._id }).fetch();  arreglo
		Meteor.call('deleteRecipe', this._id );
	},
	'click .custom-control-input': function() {
		// const objet = inMenuCollection.find({ idUser: this._id }).fetch();  arreglo
		Meteor.call('setAdmin', this._id,this.isAdmin);
	}
	
});