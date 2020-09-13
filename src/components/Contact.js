import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    //construktor je metod koji se automatski poziva pri pravljenju objekta klase, koristi se za postavljanje trenutnih stanja propertija
    super(props); //super metoda poziva construktor roditeljske klase koji je u ovom slučaju React.component
    this.state = {
      //inicijalna stanja
      name: "",
      email: "",
      message: "",
    };
  }
  componentDidMount() {
    //ova metoda se poziva kada su svi elementi renderovani. ovaj metod je savršeno mesto  gde možemo pozvati setState metodu da promeni stanje nekog elementa.
    var datum = new Date().getDate();
    var mesec = new Date().getMonth() + 1;
    var godina = new Date().getFullYear();
    var sat = new Date().getHours();
    var minut = new Date().getMinutes();
    this.setState({
      // ne može this.state ovde jer nije constructor . setstate postavlja state na željene vrednosti
      datum: datum + "/" + mesec + "/" + godina + " " + sat + ":" + minut,
    });
  }
  handleFormSubmit(event) {
    if (!this.state.name) {
      //ako state name nije promenjen, izbacuje alert
      alert("Please type your name");
      event.preventDefault(); //da se spreči refresh stranice ili prolazak forme
    } else if (!this.state.email) {
      alert("Please type your email");
      event.preventDefault();
    } else if (!this.state.message) {
      alert("Please type your message");
      event.preventDefault();
    } // eslint-disable-next-line
    else {
      alert(
        "Thanks " +
          this.state.name +
          " for contacting me!" +
          " " +
          "Email: " +
          " " +
          this.state.email +
          " " +
          "Message:  " +
          this.state.message +
          "    " +
          "Datum: " +
          " " +
          this.state.datum
      );
    }
  }
  render() {
    return (
      <div className="formdiv">
        <center>
          <h3> Contact me</h3>
          <form className="form" onSubmit={this.handleFormSubmit}>
            {" "}
            {/* poziv funkcije kada se klikne na submitdugme  OVO JE VIŠAK*/}
            <label>
              {" "}
              {/*Your name: */}<br />
              <input
                type="text"
                name="name"
                value={this.state.name} // postavlja value na vrednost state name
                onChange={(e) => this.setState({ name: e.target.value })} // e je parametar, i pri promeni se postavlja uneta vrednost u property name
                placeholder="Type your name"
              />
            </label>
            <br />
            <label>
              {" "}
              {/*Your email: */}<br />
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Type your email"
              />
            </label>
            <br />
            <label>
              {" "}
              {/*Message you would like to send me:*/}
              <br />
              <textarea
                name="message"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
                placeholder="Type your message. I'm looking forward to read it!"
              />
            </label>
            <br />
            <input
              type="submit"
              value="Submit"
              onClick={(e) => this.handleFormSubmit(e)}
            />{" "}
            {/*arrow funkcija za pozivanje funckije*/}
          </form>
        </center>
      </div>
    );
  }
}
export default Contact;
