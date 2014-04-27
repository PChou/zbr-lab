//defin a global router
define(['jquery','underscore','backbone',
    'text!template/teach.detail.html',
    ],function ($,_,Backbone,
        TeachDetailTemple
        ) {


	var HomeView = Backbone.View.extend({

        _template: _.template(TeachDetailTemple),

        id: 'TeachView',

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