import React from 'react';
import styles from '../static/css/components/contact.scss'


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {result: ''}
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/form-submit', {
            method: 'POST',
            contentType: "application/json; charset=utf-8",
            body: JSON.stringify({
                name: data.get("name"),
                email: data.get("email"),
                message: data.get("message"),
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
          .then((res) => {
            if (res.status == 200) {
              this.setState({result: 'Thanks for contacting us! 🚴‍'})
            }
            else this.setState({result: 'Something went wrong 🚫'})
          })
          .catch((error) => {
            console.error(error);
          });
    }

    render() {
        return (
            <div id="contact" className={styles.contact}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            <div className={styles.contentSection}>
                                <h2>Contact</h2>
                                <div className={styles.contactFormContainer}>
                                    <form onSubmit={this.handleSubmit} method="post">
                                        <div className="form-row">
                                          <div className={`col-md-6 ${styles.formColLeft}`}>
                                              <input name="name" type="text" className={`form-control ${styles.contactInput}`} required placeholder="Name" />
                                          </div>
                                          <div className={`col-md-6 ${styles.formColRight}`}>
                                              <input name="email" type="text" className={`form-control ${styles.contactInput}`} required placeholder="Email" />
                                          </div>
                                          <div className={`col-md-12 ${styles.formCol}`}>
                                              <textarea name="message" className={`form-control ${styles.contactInput}`} required id="exampleFormControlTextarea1"
                                                        placeholder="Message" rows="3" />
                                          </div>
                                        </div>
                                        <button type="submit" className={`btn ${styles.submitButton}`}>Say Hi</button>
                                        <div className={styles.result}>{ this.state.result }</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
