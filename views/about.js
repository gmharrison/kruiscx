import React from 'react';
import styles from '../static/css/components/about.scss'


export default class About extends React.Component {
    render() {
        return (
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            <div className={styles.contentSection}>
                                <h2>About</h2>
                                <div className={styles.graySectionText}>
                                    KruisCX was founded in 2013 so a group of close friends could race cyclocross together.
                                    Over the years, we have evolved into a team that races in nearly all disciplines,
                                    from road to cyclocross to mountain bike. Although members have come and gone, the
                                    core goal remains the same—to have fun with friends on bikes.
                                    <br /><br />
                                    Based in New York City, KruisCX targets a broad array of local road races, taking
                                    advantage of the proximity to training and racing in Prospect and Central Park.
                                    Cyclocross season sees team members traveling further afield to compete in the
                                    Mid-Atlantic, New Jersey, and Pennsylvania Cyclocross Series.
                                    <br /><br />
                                    The 2018 race season brings a host of new changes. Along with an expanded Men’s
                                    roster, KruisCX is doubling down on bringing more people of all backgrounds and
                                    identities into the sport by forming a Women’s team. We are grateful to be supported
                                    by Sid’s Bikes, one of our favorite bike shops in New York City, along with apparel
                                    suppliers VergeSport and Ridge Supply.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}