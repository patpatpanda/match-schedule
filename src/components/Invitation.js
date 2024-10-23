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
      <p><strong>Matcher:</strong> Vi kommer att ha 4 planer igång samtidigt, med totalt 10 inbjudna lag inkl oss själva. Varje lag spelar minst 5 matcher under dagen.</p>
      <p><strong>Foodtruck och försäljning:</strong> Vi är glada att meddela att vi kommer ha en foodtruck på plats under dagen, och dessutom kommer vi att sälja fika och smörgåsar. Det finns alltså goda möjligheter att köpa mat och dryck under dagen. Cafeterian kommer vara öppen hela dagen.</p>
      <p><strong>Avgift:</strong> För att täcka kostnader för plan och domare tillkommer en symbolisk summa på 100 kr per lag.</p>
      <p><strong>Anmälan:</strong> För att anmäla ert lag, vänligen bekräfta deltagandet senast [datum] genom att mejla Andreas Karlsson på <a href="mailto:andreas.karlsson@artslogistics.se">andreas.karlsson@artslogistics.se</a> eller skicka ett sms till +46734477577. Vi ser fram emot er medverkan och hoppas på en fantastisk dag tillsammans!</p>
      <p>Vänliga hälsningar,<br/>Boo FF P2016:12</p>
    </div>
  );
};

export default Invitation;
