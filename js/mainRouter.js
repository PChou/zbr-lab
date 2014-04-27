//defin a global router
define(['jquery','underscore','backbone','lib/backstack',
	'views/home',
	'views/teach'
	],function ($,_,Backbone,BackStack,
	HomeView,
	TeachView
		) {
	// body...

	var stackNavigator = new BackStack.StackNavigator({
	    el: 'body'
	});

	var MainRouter = Backbone.Router.extend({

		initialize: function() {

			this.views = [];

            Backbone.history.start();
        },

		routes: {
            // When there is no hash bang on the url, the home method is called
            "": "home",
            "teach/:teachid": "teach"
        },

        home: function(){
        	var hv = this.views['HomeView'];
        	if(!hv){
        		this.views['HomeView'] = hv = new HomeView();
        		//$('body').append(hv.render().$el);
        	}
        	stackNavigator.pushView(hv);
        },

        teach: function(teachid){
        	var tv = this.views['TeachView']
        	if(!tv){
        		this.views['TeachView'] = tv = new TeachView();
        		//$('body').append(tv.render().$el);
        	}
        	stackNavigator.pushView(tv);
        }

	});

	return MainRouter;

})