Sheet.Router.map(function () {
  
  this.resource('main_edit');
  this.resource('main_edit', { path: '/main_edit/:main_edit_id' });
  this.resource('main_edit.edit', { path: '/main_edit/:main_edit_id/edit' });
  
  this.resource('mains');
  this.resource('main', { path: '/main/:main_id' });
  this.resource('main.edit', { path: '/main/:main_id/edit' });
  
});
