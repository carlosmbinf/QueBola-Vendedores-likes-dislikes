Template.SideNav.onCreated(function(){
	// this.editMode = new ReactiveVar();
	// this.editMode.set(false);
	
	var self = this;
	self.autorun(function() {
		self.subscribe('user');
	});

});

Template.SideNav.helpers({
	iconsrc: function() {
		try {
			return Meteor.users.findOne({_id: Meteor.userId()}).services.facebook.picture.data.url
		} catch (error) {
			return ''
		}
		
		 ; 
	}
});
