// app.js

var addressBook = new AddressBook();
var addressBookView = new AddressBookView({
  collection: addressBook
});
    console.log('app');
addressBook.add([
  { name: 'yutapon', tel: '090-xxxx-xxxx' },
  { name: 'hogepon', tel: '080-xxxx-xxxx' }
]);