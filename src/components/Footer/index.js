import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements';



const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo > Taura Store</SocialLogo>
                        <SocialIcons >
                            <SocialIconLink href="https://www.facebook.com/profile.php?id=100010166224422" target="_blank"
                            aria-label="Facebook" >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//www.instagram.com/taura_equipamiento/?hl=es' target="_blank">
                               <FaInstagram  />
                            </SocialIconLink>
                            <SocialIconLink aref="/" target="_blank"
                            aria-label="Whatsapp" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UClmGff7sRJczeG4IAlnwDuA" target="_blank"
                            aria-label="Youtube" rel="noopener noreferrer">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
