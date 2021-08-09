import React from 'react';

import '../styles/components/Success.css';

export default function Success() {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias por tu compra!</h2>
        <span>El pedido llegara en 3 dias a tu direccion</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
}
