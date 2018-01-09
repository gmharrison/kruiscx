import React from 'react';
import styles from '../static/css/components/contact.scss'


export default class Contact extends React.Component {
    render() {
        return (
            <div className={styles.contact}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            <div className={styles.contentSection}>
                                <h2>Contact</h2>
                                <div className={styles.contactFormContainer}>
                                    <form>
                                        <div className="form-row">
                                          <div className={`col-md-6 ${styles.formColLeft}`}>
                                              <input type="text" className={`form-control ${styles.contactInput}`} placeholder="Name" />
                                          </div>
                                          <div className={`col-md-6 ${styles.formColRight}`}>
                                              <input type="text" className={`form-control ${styles.contactInput}`} placeholder="Email" />
                                          </div>
                                          <div className={`col-md-12 ${styles.formCol}`}>
                                              <textarea className={`form-control ${styles.contactInput}`} id="exampleFormControlTextarea1"
                                                        placeholder="Message" rows="3" />
                                          </div>
                                        </div>
                                        <button type="submit" className={`btn ${styles.submitButton}`}>Say Hi</button>
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