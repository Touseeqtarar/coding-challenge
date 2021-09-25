import React , {useState , useEffect} from 'react';
import {uuid} from "uuidv4";
import './App.css';
import Header from './Header';

import AddContact from './AddContact';
import ContactList from './ContactList';
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
 const [contacts ,setContacts] = useState([]);
 const [searchTerm , setSearchTerm] = useState('');
 const [searchResults, setSearchResults] = useState([]);
  
  const addContactHandler = (contact) => {
    setContacts([...contacts ,{id: uuid() , ...contact}]);
    
  }
   const removeContactHnadler = (id) => {
     const newContactList = contacts.filter((contact) => {
       return contact.id !== id ;
     });
     setContacts( newContactList);
   }
   const searchHandler= (searchTerm) => {
     setSearchTerm(searchTerm);
     if(searchTerm!==""){
       const newContactList = contacts.filter((contact) =>{
         return Object.values(contact).join("").toLowerCase().includes(searchTerm.toLowerCase());
       })
       setSearchResults(newContactList);
     }else{
       setSearchResults(contacts);
     }
   };
 




  useEffect(() =>{
  const retrivecontacts  =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retrivecontacts)      setContacts(retrivecontacts);
},[]);

 
 
 
  useEffect(() =>{
        localStorage.setItem( LOCAL_STORAGE_KEY , JSON.stringify(contacts));
  },[contacts]);
  
  
  
  
  
  return (
    <>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList 
       contacts={searchTerm.length <1 ? contacts :searchResults} 
       getContactId={removeContactHnadler}
        term={searchTerm}
        searchKeyword={searchHandler}
       
       />
      
    </>
  );
}

export default App;
