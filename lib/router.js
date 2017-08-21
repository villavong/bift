
Router.configure({
  layoutTemplate: 'layout'

});

Router.map(function(){
  Router.route('/', function(){
    this.render('dashboard');
  });

  this.route('/form', function(){
    this.render('form');
  });
  this.route('/new_bift_form', function(){
    this.render('bift_form');
  });

  this.route('/bift_view', function(){
    this.render('bift_view');
  });
  // this.route('/bift', function(){
  //   this.render('bift');
  // });


  this.route('/bifty_list', function(){
    this.render('bifty_list');
  });
});

Router.route('/bift/:_id', function () {
  var bift = Bifts.findOne({_id: this.params._id});
  this.render('bift', {data: bift});
});


Router.route('/bift/:_id/edit', function () {
  var bift = Bifts.findOne({_id: this.params._id});
  this.render('bift_edit_form', {data: bift});
}, {
  name: 'bift.edit'
});
