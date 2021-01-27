
Meteor.methods({
	addlikedislike: function(iduseradarlike, iddeluserquediolike, value) {
		
		// console.log(iduseradarlike + ' ' + iddeluserquediolike + ' ' + value);
		
		like = inMenuCollection.findOne({
			iduseradarlike: iduseradarlike,
			iddeluserquediolike: iddeluserquediolike
		});
		console.log(like);
		
		if (like) {
			inMenuCollection.update({ _id: like._id }, {
				$set:{
					likedislike: value
				}
			});
		}
		else{
			var myData = {
				iduseradarlike: iduseradarlike,
				iddeluserquediolike: iddeluserquediolike,
				likedislike:value
			 }
			inMenuCollection.insert({
				iduseradarlike: iduseradarlike,
				iddeluserquediolike: iddeluserquediolike,
				likedislike:value
			 });
		// console.log(inMenuCollection.find().fetch());
		}
		
		

		
	},

	toggleMenuItem: function(id, currentState) {

		Meteor.users.update({ _id: id }, {
			$set:{
				inMenu: !currentState
			}
		});
				
		// console.log(currentState);
	},

	deleteRecipe: function(id) {
		Meteor.users.remove(id);
	},

	setAdmin: function(id,state) {

		if (state) {
			Meteor.users.update({ _id: id }, {
                $set:{
                    isAdmin: false
                }
            });
		}else{
            Meteor.users.update({ _id: id }, {
                $set:{
                    isAdmin: true
                }
            });
        }
		
	}
});

