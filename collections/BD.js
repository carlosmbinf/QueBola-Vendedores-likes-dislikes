Recipes = new Mongo.Collection('recipes');
inMenuCollection = new Mongo.Collection('likes');

// inMenuCollection.allow({
// 	insert: function(userId, doc) {
// 		return !!userId;
// 	},
// 	update: function (userId, doc, fields, modifier) {
// 		console.log('UPDATE USER');
// 		return true; 
// 	}
// });

Meteor.users.allow({
	update: function (userId, doc, fields, modifier) {
	  console.log('UPDATE USER');
	  return true; 
  }
});

Recividores = new SimpleSchema({
	name: {
		type: String,
		label: "Nombre y Apellidos"
	},
	direccion: {
		type: String,
		label: "Direccion"
	},
	ci: {
		type: String,
		label: "CI"
	},
	cantenviar: {
		type: Number,
		label: "Cuanto va a enviar",
		defaultValue: 0,
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	},


});



EnviadorSchema = new SimpleSchema({
	
	nombre: {
		type: String,
		label: "Nombre y Apellidos"
	},
	direccion: {
		type: String,
		label: "Direccion"
	},
	ci: {
		type: String,
		label: "CI"
	},
	enviadors: {
		type: [Recividores]
		// label: "Discografía"
	},
	inMenu: {
		type: Boolean,
		defaultValue: true,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	// cantenviar: {
	// 	type: Number,
	// 	label: "Admin",
	// 	editable: false,
	// 	autoValue: function() {
	// 		var total = 0;
	// 		enviadors.forEach(element => {
	// 		total = total +	element.cantenviar;
	// 		})			
	// 		return total
	// 	}
	// },
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});



// Recipes.attachSchema( EnviadorSchema );