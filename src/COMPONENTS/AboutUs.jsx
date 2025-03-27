import React, { memo } from 'react';
import UseAboutUs from './UseComponents/UseAboutUs';

const AboutUs = memo(({
    name = 'About Us',
    location = 'Default Location',
    contact = 'Default Contact',
    description = "Default DescriptionDefault DescriptionDefault DescriptionDefault DescriptionDefault DescriptionDefault DescriptionDefault DescriptionDefault DescriptionDefault DescriptionDefault Description",
    image = 'https://picsum.photos/id/250/1080/',
    socialMedia = {
        facebook: 'www.facebook.com',
        instagram: 'www.instagram.com',
        tiktok: 'www.tiktok.com',
    }
}) => {
    return (
        <div>
            <UseAboutUs
                name={name}
                location={location}
                contact={contact}
                description={description}
                image={image}
                socialMedia={socialMedia}
            />
        </div>
    );
});

export default AboutUs;
