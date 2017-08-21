import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'companies.insert'(a){
    Companies.insert(a);
  },
  'bifts.insert'(a){
    Bifts.insert(a);
  }



});
