import appStoreBadge from './storeBadge/app-store-badge.svg';

export const imagePaths = {
    icon:{
        light: require('./icon/icon-light.png'),
        dark: require('./icon/icon-dark.png'),
    }, 
    logo: {
        light: require('./logo/logo-light.png'),
        dark: require('./logo/logo-dark.png'),
    },
    features: {
        search: require('./features/search.png'),
        details: require('./features/details.png'),
        home: require('./features/home.png'),
        profile: require('./features/profile.png'),
    },
    storeBadge: {
        googlePlay: require('./storeBadge/google-play-badge.png'),
        appStore: appStoreBadge,
    },
    video: require('./hero-video.mp4'),
    me: require('./me.jpg')
}