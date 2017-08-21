import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';


Template.layout.onRendered(function(){
  $.material.init();

});

Template.main_section.helpers({
  bifts: function(){
    return Bifts.find();
  }
});
// Template.registerHelper({
//   bifts: function(){
//     return Bifts.find();
//   }
// });



Template.bift_form.events({
  'submit #registerBift'(event){
    event.preventDefault();
    const target = event.target;
    let newBift = {
      company_id : target.company_id.value,
      bifty_table	:	target.bifty_table.value,
      bift_amount	:	target.bift_amount.value,
      bift_count	:	target.bift_count.value,
      bift_date	:	target.bift_date.value,
      bift_rate	:	target.bift_rate.value,
      bift_table_id	:	target.bift_table_id.value
    }
    console.log('nice');
    Meteor.call('bifts.insert', newBift);
    Router.go('/');
    return false;
  }
});

Template.bift_edit_form.events({
  'submit #updateBift'(event){
    event.preventDefault();
    const target = event.target;
    const id = target.company_id.value;
    const upBift  = Bifts.find(id);

    let updateBift = {
      company_id : target.company_id.value,
      bifty_table	:	target.bifty_table.value,
      bift_amount	:	target.bift_amount.value,
      bift_count	:	target.bift_count.value,
      bift_date	:	target.bift_date.value,
      bift_rate	:	target.bift_rate.value,
      bift_table_id	:	target.bift_table_id.value
    }
    Meteor.call('bifts.insert', updateBift);

    // Bifts.upsert(upBift, updateBift);
    Router.go('/');
    return false;
  }
});

Template.form.events({
  'submit #registerCompany'(event){
    event.preventDefault();
    const target = event.target;
    let newCompany = {
      	company_name	:	target.company_name.value,
      	company_number	:	target.company_number.value,
      	company_line	:	target.company_line.value,
      	company_type	:	target.company_type.value,
      	company_address	:	target.company_address.value,
      	company_email	:	target.company_email.value,
      	company_phone	:	target.company_phone.value,
      	company_ceo_name	:	target.company_ceo_name.value,
      	company_bank_name	:	target.company_bank_name.value,
      	company_bank_number	:	target.company_bank_number.value,
      	company_certificate	:	target.company_certificate.value,
      	company_bank_copy	:	target.company_bank_copy.value,
      	company_manager	:	target.company_manager.value,
      	company_manager_number	:	target.company_manager_number.value,
      	company_credit	:	target.company_credit.value,
      	company_registered_date	:	target.company_registered_date.value
    }

    Meteor.call('companies.insert', newCompany);
    Router.go('/');
    return false;

  }
});
