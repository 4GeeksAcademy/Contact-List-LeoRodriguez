import React, {useContext} from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom'

function CardContact({contact}) {
  const {store, actions} = useContext(Context)
  const deleteContact = async () => {
    try {
      await actions.deleteContact(contact.id); 
      alert('Contacto eliminado');
    } catch (error) {
      console.error('Error al eliminar contacto:', error);
    }
  };

  return (
    <div className='container'>
    <div className="contact-card">
      <div className="icons">
      <Link to={`/editcontact/${contact.id}`}>
            <i className="fa-regular fa-pen-to-square icon" />
          </Link>
        <i className="fa-solid fa-trash-can icon" onClick={deleteContact}/>
      </div>
      <div className="circle-image">
        <img src="https://www.wikihow.com/images/3/35/Draw-Realistic-People-Step-21-Version-2.jpg" alt="Avatar" />
      </div>
      <div className="contact-info">
        <p>Nombre y apellido: {contact && contact.full_name}</p>
        <p>Teléfono: {contact && contact.phone} </p>
        <p>Email: {contact && contact.email} </p>
        <p>Dirección: {contact && contact.address}</p>
      </div>
    </div>
  </div>
  
  )
}

export default CardContact;