
if (Meteor.isClient) {

	Tracker.autorun(() => {

		if (Meteor.userId()) {
			
		  Accounts._callHooksLogin();
		//   Session.set('admin', Accounts.user().isAdmin);
		} else {
		  Accounts._callHooksLogout();
		}
		
	  });

	Accounts.onLogin(function() {
		Session.set('admin', Accounts.user().isAdmin);
				
		if (Session.get('admin')) {
			FlowRouter.go('recipe-book');
		}else{
			FlowRouter.go('menu');
		}
		
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});

}




FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		
		FlowRouter.go('home');
	}else{
		if (!Session.get('admin')) {
			// console.log(Meteor.user());
			console.log(Template.Vendedor.editMode);
			
			// console.log(Meteor.users().findOne({_id: Meteor.userId()}) );
			
			// Session.set('admin', true );
		}
		
	}
}]);


FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			
				FlowRouter.go('menu');
			
			
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout', {main: 'Menu',second: 'ShoppingList'});
	}
});

FlowRouter.route('/lista-vendedores', {
	name: 'recipe-book',
	action() {
		
		

		// console.log(Meteor.users.find({
		// 	_id: Meteor.userId()
		// }))
		
		GAnalytics.pageview();

		// this.autorun(function() {
		// 		self.subscribe('userdetails',Meteor.userId());
		// 	});
		if (true) {
			BlazeLayout.render('MainLayout', {main: 'Vendedores'});
		}else{
			FlowRouter.go('menu');
		}
			
		
		
	}
	// ,
	// triggersEnter: [function(context, redirect) {

	// 	var self = this;
	// self.autorun(function() {
	// 	self.subscribe('userdetails',Meteor.userId());
	// });
	// 	if ( Meteor.user() ) FlowRouter.go('/menu');;
	//   }]
});



FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action() {
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});