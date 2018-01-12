import React from 'react';
import styles from '../static/css/components/team.scss'


export default class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instaData: [],
            linkList: [],
            pic2: []
        };

    }

    componentDidMount() {
        // 1. Outer Fetch call initiated here
        fetch("https://api.instagram.com/v1/users/507139550/media/recent/?access_token=507139550.8b9e29b.787e198bb41649829b5f37586b65fc4d&count=6")
         .then(d => {
            return d.json()
         })
         .then(json => {
            // 2. array for storing url's retrieved from response
            var urlArray = []

            for (var i=0; i < json.data.length; i++) {
                // 3. Push url inside urlArray
                urlArray.push(json.data[i].link)
            }
            // 4. an array of urls
            return urlArray
         })
         .then(urlArray => {
            // Return an promise which will return "JSON response" array for all URLs.
            return Promise.all(urlArray.map(url => {
                // Take url fetch response, return JSON response
                return fetch('https://api.instagram.com/oembed?url=' + url)
                    .then(f => { return f.json() })
            }
            ))
         })
         .then(f => {
            // Store all objects into array for later use
            var objArr = f;
            var newArray = [];
            for (var i=0; i < objArr.length; i++) {
                var html = objArr[i]
                newArray.push(html)
            }
            this.setState({linkList: newArray})
          })
    }

    componentWillMount () {
        const script = document.createElement("script");
        script.src = "http://platform.instagram.com/en_US/embeds.js";
        script.async = true;

        document.body.appendChild(script);

        function instagramEmbbedCheck() {
            if (typeof window.instgrm === 'undefined')
                setTimeout(instagramEmbbedCheck, 1000);
            else
                window.instgrm.Embeds.process();
        }
        instagramEmbbedCheck();
    }

    render() {
        if (!this.state.instaData) return <p>loading</p>
        let pictures = this.state.linkList.map((pic) => {
            return (
            <div className={styles.imageContainer}>
                 <div dangerouslySetInnerHTML={{__html: pic.html}} />
             </div>
            )
        })

        return (
            <div className={styles.team}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            <div className={styles.contentSection}>
                                <h2>Team</h2>
                                <div className={styles.galleryContainer}>
                                    {pictures}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}