import appStoreBadge from './storeBadge/app-store-badge.svg';

export const imagePaths = {
    icon:{
        light: require('./icon-light.png'),
        dark: require('./icon-dark.png'),
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
    }
}