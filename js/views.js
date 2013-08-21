// extracted from https://github.com/ddewaele/emberjs-crud-rest
App.NavView = Ember.View.extend({
  tagName: 'li',
  classNameBindings: ['active'],

  didInsertElement: function () {
        this._super();
        this.notifyPropertyChange('active');
        var _this = this;
        this.get('parentView').on('click', function () {
            _this.notifyPropertyChange('active');
        });
  },

  active: function() {
    // TODO: determine if any child object is active
    return this.get('childViews.firstObject.active');
  }.property()
});