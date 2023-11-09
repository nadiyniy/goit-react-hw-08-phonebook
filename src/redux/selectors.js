export const selectContacts = state => state.phonebook.contacts.items;
export const selectFilter = state => state.phonebook.filter;
export const selectError = state => state.phonebook.contacts.error;
export const selectIsLoading = state => state.phonebook.contacts.isLoading;
export const selectCurrentId = state => state.phonebook.deletedId;
