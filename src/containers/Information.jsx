import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

function Information() {

  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  const history = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone')
    }
    addToBuyer(buyer);
    history('/checkout/payment')
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" name="name" placeholder="Nombre completo" />
            <input type="email" name="email" placeholder="Correo electrónico" />
            <input type="text" name="address" placeholder="Dirección" />
            <input type="text" name="apto" placeholder="Apto." />
            <input type="text" name="city" placeholder="Ciudad" />
            <input type="text" name="country" placeholder="Pais" />
            <input type="text" name="state" placeholder="Estado" />
            <input type="text" name="cp" placeholder="Código postal" />
            <input type="tel" name="phone" placeholder="Teléfono" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {
          cart.map(item => (
            <div className="Information-item">
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Information;