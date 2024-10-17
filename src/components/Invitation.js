import React from 'react';
import logo from '../images/boff.png'; // Importera logotypen
import './Invitation.css'; // Använd en separat CSS-fil för styling

const Invitation = () => {
  return (
    <div className="invitation">
      {/* Lägg till logotypen ovanför rubriken */}
      <img src={logo} alt="Boo FF Logotyp" className="logo" />
      
      <h1>Inbjudan till matchcamp</h1>
      
      <p>Hej,</p>
      <p>
        Vi vill varmt välkomna er till vår fotbollscamp den 27/10, där vi kommer att arrangera en dag fylld med roliga och spännande 5-mannamatcher! Dagen erbjuder en fantastisk möjlighet för era spelare att träffa andra lag och spela flera matcher under dagen.
      </p>
      <p><strong>Plats:</strong> Boovallen, Nacka Saltsjö Boo</p>
      <p><strong>Tid:</strong> Matcherna startar ca kl. 10:00 och vi beräknar att avsluta runt kl. 16:00.</p>
      
      <h2>Matcher</h2>
      <p>Vi kommer att ha 4 planer igång samtidigt, med totalt 10 inbjudna lag inkl oss själva. Varje lag spelar 5 matcher.</p>
      <p>Varje match spelas 1 x 25 min.</p>
      
      <h2>Foodtruck och försäljning</h2>
      <p>Vi är glada att meddela att vi kommer ha en foodtruck på plats under dagen, och dessutom kommer vi att sälja fika och smörgåsar. Det finns alltså goda möjligheter att köpa mat och dryck under dagen.</p>
      
      <h2>Avgift</h2>
      <p>För att täcka kostnader för plan och domare tillkommer en symbolisk summa på 100 kr per lag.</p>
      
      <h2>Cafeteria</h2>
      <p>
      Boo FF:s Cafeteria kommer vara öppen!
      </p>
      
      <p>Vänliga hälsningar,<br/>Boo FF P2016:12</p>
    </div>
  );
};

export default Invitation;
