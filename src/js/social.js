import React from 'react';
import styles from '../css/sections/social.scss'


export default class Social extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instaData: [],
            imgList: [],
        };
    }

    componentDidMount() {
        fetch("https://api.instagram.com/v1/users/507139550/media/recent/?access_token=507139550.8b9e29b.787e198bb41649829b5f37586b65fc4d&count=4")
         .then(data => {
            return data.json()
         })
         .then(json => {
            let listOfUrls = []
            const responseData = json.data

            responseData.map(data => {
                listOfUrls.push(data.link)
            })
            return listOfUrls
         })
         .then(listOfUrls => {
            return Promise.all(listOfUrls.map(url => {
                return fetch('https://api.instagram.com/oembed?url=' + url)
                    .then(data => {
                        return data.json()
                    })
                }
            ))
         })
         .then(json => {
            this.setState({imgList: json})
          })
    }

    componentWillMount () {
        const script = document.createElement("script");
        script.src = "https://platform.instagram.com/en_US/embeds.js";
        script.async = true;

        document.body.appendChild(script);

        function instagramEmbbedCheck() {
            if (typeof window.instgrm === 'undefined')
                setTimeout(instagramEmbbedCheck, 2000);
            else
                window.instgrm.Embeds.process();
        }
        instagramEmbbedCheck();
    }

    render() {
        if (!this.state.instaData) return <p>loading</p>
        let pictures = this.state.imgList.map((img) => {
            return (
            <div className={styles.imageContainer}>
                 <div className={styles.subFlex} dangerouslySetInnerHTML={{__html: img.html}} />
             </div>
            )
        })

        return (
            <div className={styles.social}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className={styles.whiteTextSection}>
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
