Template.MenuPrincipal.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipesTotal');
	});
});

Template.MenuPrincipal.helpers({
	recipes: ()=> {
		return Recipes.find({inMenu: true});
	}
});