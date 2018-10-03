import React from 'react'

import madeincanada from '../img/clients/madeincanada-white.png'
import blackcat from '../img/clients/blackcat-white.png'
import baaramewe from '../img/clients/baaramewe-white.png'
import berroco from '../img/clients/berroco-white.png'
import malabrigo from '../img/clients/malabrigo-white.png'
import sirdar from '../img/clients/sirdar-white.png'

const Clients = () => (
  <section class="clients-2 bg-primary">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-sm-4">
          <img alt="Client Logo" src={madeincanada} />
        </div>

        <div class="col-md-2 col-sm-4">
          <img alt="Client Logo" src={baaramewe} />
        </div>

        <div class="col-md-2 col-sm-4">
          <img alt="Client Logo" src={sirdar} />
        </div>

        <div class="col-md-2 col-sm-4">
          <img alt="Client Logo" src={berroco} />
        </div>

        <div class="col-md-2 col-sm-4">
          <img alt="Client Logo" src={malabrigo} />
        </div>

        <div class="col-md-2 col-sm-4">
          <img alt="Client Logo" src={blackcat} />
        </div>
      </div>
    </div>
  </section>
)

export default Clients
