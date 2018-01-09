import React from 'react';
import styles from '../static/css/components/footer.scss'


export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className={styles.socialLinks}>
                                <a href="https://www.instagram.com/kruiscx/?hl=en" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="https://www.facebook.com/KruisCX/" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}