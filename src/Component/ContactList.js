import React , {useRef} from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {

const removeContactHandler= (id) => {
    props.getContactId(id);
}

const inputE1 = useRef("");

    const renderContactList = props.contacts.map((contact) =>{
      
        return <ContactCard contact={contact} clickHander={removeContactHandler} key={contact.id}/>
         
           

        

    });
  const  getSearchTerm = () => {
      props.searchKeyword(inputE1.current.value);
  };

 return ( 
    <div className="main">
     <div className="ui search">
        <div className="ui icon input">
            <input 
            ref = {inputE1}
            type="text" placeholder="Search User" className="prompt" value={props.term} onChange={ getSearchTerm} />
            <i className="search icon"></i>
        </div>

    </div>
     <div className="ui celled list">{renderContactList}</div>
    </div>
);

    };

export default ContactList
