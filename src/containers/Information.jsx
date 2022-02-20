import React from 'react';
import '../styles/components/Information.css';

function Information() {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
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
          <button type="button" className="Information-back">
            Regresar
          </button>
          <button type='button' className="Information-next">
            Pagar
          </button>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information;