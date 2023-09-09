import React from 'react'
import { Link } from 'react-router-dom'

const SocialNav = () => {
    return (
        <div>
            <div className="socialNav">
                <Link to="https://www.instagram.com/" target="_blank">
                    <img className="socialImage" src="https://toppng.com/uploads/preview/instagram-logo-circle-11549679754rhbcorxntv.png" alt='instagramImage' />
                </Link>
                <Link to="http://facebook.com" target="_blank">
                    <img className="socialImage" src="https://www.freeiconspng.com/thumbs/facebook-icon-png/facebook-icon--basic-round-social-iconset--s-icons-7.png" alt="fbImage" />
                </Link>
                <Link to="https://www.doordash.com/" target="_blank">
                    <img className="socialImage" src="https://play-lh.googleusercontent.com/GW8STXgI-XEkNhvs69KeNSBzmBzz3GGwvE1o3W8gNJUxVGySDz0JqBuWaKzskUsKFNg" alt='doordashImage' />
                </Link>
                <Link to="https://www.grubhub.com/" target="_blank">
                    <img className="socialImage" src="https://e7.pngegg.com/pngimages/696/964/png-clipart-doordash-round-logo-tech-companies-thumbnail.png" alt='grubhubImage' />
                </Link>
                <Link to="https://www.yelp.com/biz/bagel-and-more-brooklyn" target="_blank">
                    <img className="socialImage" src="https://icons.iconarchive.com/icons/martz90/circle-addon1/256/yelp-icon.png" alt='yelpImage' />
                </Link>
            </div>
        </div>
    )
}

export default SocialNav
