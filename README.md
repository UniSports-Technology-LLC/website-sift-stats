# Purpose

The SiftStats website is designed to provide a holistic and professional presence for the SiftStats app. It serves as a promotional platform to inform potential users about the app, its features, and benefits. The website links to the app on the App Store and Play Store, offering a seamless way for visitors to download the app. Additionally, it hosts a promotional video and detailed background information about SiftStats.

# Hosting

The website is hosted on Firebase Hosting under the domains:

- [www.siftstats.com](http://www.siftstats.com/)
- siftstats.com

The domain and DNS records are managed through [Squarespace](https://www.squarespace.com/).

# Pages

- Home
    - Features
    - Highlights
    - FAQ
- About Us
- Terms of Service
    - Website
    - App
- Privacy Policy
    - Website
    - App
- Delete Account

# Key Features

- **Responsive Design**: The website is designed to be fully responsive, ensuring optimal viewing across various devices, including desktops, tablets, and mobile phones.
    - See code
        
        ```tsx
        // sx allows to specify different values for different screen sizes
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
        ```
        
- **User-Friendly Navigation**: Intuitive navigation menus help users easily find the information they need.
- **Professional Aesthetic**: The MUI Landing Page template provides a polished and modern look, enhancing the professional image of SiftStats.
- **Theming**: Light and dark mode are offered and made accessible throughout the app using React’s context hook.

# Conclusion

The SiftStats website is a crucial component of our digital strategy, providing a professional and informative platform to promote the SiftStats app. By leveraging Firebase Hosting, Squarespace, and Material-UI, we ensure that our website is not only visually appealing but also fast, secure, and scalable. Whether visitors are looking to learn more about the app, read about our team, delete their account, or download SiftStats, our website offers a seamless and engaging experience.
