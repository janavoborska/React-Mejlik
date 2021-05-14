import React from 'react';
import './style.css';

const Inbox = (props) => (
  <div className="container">
    <p className="email"> {props.account}</p>
    <p className="pocet">
      {props.messages === 0 ? (
        <div
          className="pocet"
          style={{
            color: 'red',
          }}
        >
          zadne zpravy
        </div>
      ) : (
        <div>Neprectenych zprav: {props.messages}</div>
      )}
    </p>
  </div>
);

export default Inbox;

{
  /*
Použijte atribut style k tomu, abyste text o nepřečtených zprávách zobrazili červeně, pokud nemáme žádné nepřečtené zprávy.

*/
}
