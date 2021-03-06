export const detectLanguage = function () {
    let language = (navigator.language || navigator.userLanguage).split('-')[0]
    let available = ['en', 'fr'] // When adding value here, add the correct import in Address.vue
    return available.includes(language) ? language : 'en'
}

export const translations = {
    en: {
        address: {
            building: 'Building',
            flat: 'Flat',
            floor: 'Floor',
            intercom: 'Intercom',
            label: {
                door: 'Door',
                gate: 'Gate',
                portal: 'Portal'
            },
            staircase: 'Staircase'
        },
        alternative: {
            appstore: 'Download on the App Store'
        },
        head: {
            title: 'Padlok, door codes manager',
            description: 'In front of your friend’s door, looking for the codes? Not anymore! Get all the info with Padlok!'
        },
        footer: {
            copyright: 'Padlok© by Thomas Durand {year} - All Right Reserved',
            privacy: 'Privacy policy',
            support: 'Support',
            terms: 'Terms of service'
        },
        loading: 'Loading…',
        not_found: {
            title: 'Not found!',
            explain: 'The information could not be found.',
            details: 'The link is either incorrect, or have been deleted by the sender.',
            tip: 'You may request your sender for a new valid link.'
        },
        url: {
            marketing: 'https://padlok.app',
            privacy: 'https://padlok.app/privacy/',
            support: 'https://padlok.app/support/',
            terms: 'https://padlok.app/terms/'
        }
    },
    fr: {
        address: {
            building: 'Bâtiment',
            flat: 'Appartement',
            floor: 'Étage',
            intercom: 'Interphone',
            label: {
                door: 'Porte',
                gate: 'Grille',
                portal: 'Portail'
            },
            staircase: 'Escalier'
        },
        alternative: {
            appstore: 'Télécharger dans l’App Store'
        },
        head: {
            title: 'Padlok, le gestionnaire de digicodes',
            description: 'Face à la porte d’immeuble de vos amis, à la recherche des codes ? Plus jamais ! Obtenez toutes les infos avec Padlok !'
        },
        footer: {
            copyright: 'Padlok© par Thomas Durand {year} - Tous droits réservés',
            privacy: 'Politique de confidentialité',
            support: 'Assistance',
            terms: 'Conditions d’utilisation'
        },
        loading: 'Chargement…',
        not_found: {
            title: 'Introuvable !',
            explain: 'Les informations n’ont pas été trouvées.',
            details: 'Le lien est peut-être incorrect, ou a été supprimé par l’expéditeur.',
            tip: 'Vous pouvez demander à l’expéditeur un nouveau lien valide.'
        },
        url: {
            marketing: 'https://padlok.app/fr',
            privacy: 'https://padlok.app/fr/confidentialite/',
            support: 'https://padlok.app/fr/assistance/',
            terms: 'https://padlok.app/fr/conditions/'
        }
    }
}
