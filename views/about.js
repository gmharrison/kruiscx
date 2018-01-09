import React from 'react';
import styles from '../static/css/components/about.scss'


export default class About extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            <div className={styles.contentSection}>
                                <h2>About</h2>
                                <div className={styles.graySectionText}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                    vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
                                    qui blandit praesent luptatum.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}