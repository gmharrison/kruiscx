import React from 'react';
import styles from '../static/css/components/team.scss'

const teamImages = [
    {
        id: 1,
        path: "andrew_b",
        name: "Andrew Bennett"
    }, {
        id: 2,
        path: "brian_s",
        name: "Brian Stan"
    }, {
        id: 3,
        path: "chriska_w",
        name: "Chriska Wong"
    }, {
        id: 4,
        path: "evan_b",
        name: "Evan Bauer"
    }, {
        id: 5,
        path: "gabriel_h",
        name: "Gabriel Harris"
    }, {
        id: 6,
        path: "josh_r",
        name: "Joshua Renick"
    }, {
        id: 7,
        path: "butter_man",
        name: "Joshua Thiel"
    }, {
        id: 8,
        path: "bae",
        name: "Kevin Hsieh"
    }, {
        id: 9,
        path: "kimmy_o",
        name: "Kimmy O'Conner"
    }, {
        id: 10,
        path: "lisa_h",
        name: "Lisa Hom"
    }, {
        id: 11,
        path: "lloyd_b",
        name: "Lloyd Bradbury"
    }, {
        id: 12,
        path: "matt_h",
        name: "Matt Hartsough"
    }, {
        id: 13,
        path: "matt_s",
        name: "Matt Story"
    }, {
        id: 14,
        path: "phil_s",
        name: "Phil Sturgeon"
    }, {
        id: 16,
        path: "tun_k",
        name: "Tun Khine"
    }, {
        id: 17,
        path: "rod",
        name: "Rod Millott"
    }, {
        id: 18,
        path: "vlad_r",
        name: "Vladimir Rabinovich"
    }, {
        id: 19,
        path: "sjoert_v",
        name: "Sjoert Van Velzen"
    }, {
        id: 20,
        path: "chris_b",
        name: "Chris Barbieri"
    }, {
        id: 21,
        path: "elizabeth_t",
        name: "Elizabeth Tobey"
    }, {
        id: 22,
        path: "pablo_r",
        name: "Pablo Rivera"
    }, {
        id: 23,
        path: "peleg_r",
        name: "Peleg Rosenthal"
    }
]

export default class TeamGallery extends React.Component {
    render (){
        let profileBlock = teamImages.map((profile) => {
            return (
                <div key={profile.id} className={styles.teamMember}>
                    <div key={profile.id} className={styles.circle}>
                        <img key={profile.id} src={require(`../static/img/${profile.path}.png`)} />
                    </div>
                    <p>{profile.name}</p>
                </div>
            )
        })
        return (
            <div id="team" className={styles.team}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            <div className={styles.contentSection}>
                                <h2>Team</h2>
                                <div className={styles.teamContainer}>
                                    {profileBlock}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
