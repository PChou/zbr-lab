//defin a global router
define(['jquery','underscore','backbone',
    'text!template/teach.index.html',
    ],function ($,_,Backbone,
        TeachIndexTemple
        ) {


	var HomeView = Backbone.View.extend({

        _template: _.template(TeachIndexTemple),

        id: 'HomeView',

        initialize: function() {

        },

        render: function(){
            if(this.model){
                this.$el.html(this._template(this.model.toJSON()));
            }
            else{
                this.$el.html(this._template({}));
            }
            return this;
        }

	});

	return HomeView;

})