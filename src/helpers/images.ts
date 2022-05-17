export const getImagePath = (productName: string ) => {
    const imageName = buildImageName(productName);
    const imageIndex = getImageIndex(imageName);
    const imagePath = images[imageIndex].path;

    return imagePath;
}

const buildImageName = (productName: string) => {
    let imageName = productName.toLocaleLowerCase();
    imageName = imageName.split(" ").join("-");

    return imageName;
}

const getImageIndex = (imageName: string) => {
    return images.findIndex(image => image.name === imageName);

}

const images = [
    {
        name: 'aa-9-coruscant-freighter',
        path: require('../assets/images/aa-9-coruscant-freighter.png'),
    },
    {
        name: 'arc-170',
        path: require('../assets/images/arc-170.png'),
    },
    {
        name: 'a-wing',
        path: require('../assets/images/a-wing.png'),
    },
    {
        name: 'banking-clan-frigte',
        path: require('../assets/images/banking-clan-frigte.png'),
    },
    {
        name: 'belbullab-22-starfighter',
        path: require('../assets/images/belbullab-22-starfighter.png'),
    },
    {
        name: 'b-wing',
        path: require('../assets/images/b-wing.png'),
    },
    {
        name: 'calamari-cruiser',
        path: require('../assets/images/calamari-cruiser.png'),
    },
    {
        name: 'cr90-corvette',
        path: require('../assets/images/cr90-corvette.png'),
    },
    {
        name: 'death-star',
        path: require('../assets/images/death-star.png'),
    },
    {
        name: 'droid-control-ship',
        path: require('../assets/images/droid-control-ship.png'),
    },
    {
        name: 'ef76-nebulon-b-escort-frigate',
        path: require('../assets/images/ef76-nebulon-b-escort-frigate.png'),
    },
    {
        name: 'executor',
        path: require('../assets/images/executor.png'),
    },
    {
        name: 'h-type-nubian-yacht',
        path: require('../assets/images/h-type-nubian-yacht.png'),
    },
    {
        name: 'imperial-shuttle',
        path: require('../assets/images/imperial-shuttle.png'),
    },
    {
        name: 'jedi-interceptor',
        path: require('../assets/images/jedi-interceptor.png'),
    },
    {
        name: 'jedi-starfighter',
        path: require('../assets/images/jedi-starfighter.png'),
    },
    {
        name: 'j-type-diplomatic-barge',
        path: require('../assets/images/j-type-diplomatic-barge.png'),
    },
    {
        name: 'millennium-falcon',
        path: require('../assets/images/millennium-falcon.png'),
    },
    {
        name: 'naboo-fighter',
        path: require('../assets/images/naboo-fighter.png'),
    },
    {
        name: 'naboo-royal-starship',
        path: require('../assets/images/naboo-royal-starship.png'),
    },
    {
        name: 'naboo-star-skiff',
        path: require('../assets/images/naboo-star-skiff.png'),
    },
    {
        name: 'rebel-transport',
        path: require('../assets/images/rebel-transport.png'),
    },
    {
        name: 'republic-assault-ship',
        path: require('../assets/images/republic-assault-ship.png'),
    },
    {
        name: 'republic-attack-cruiser',
        path: require('../assets/images/republic-attack-cruiser.png'),
    },
    {
        name: 'republic-cruiser',
        path: require('../assets/images/republic-cruiser.png'),
    },
    {
        name: 'scimitar',
        path: require('../assets/images/scimitar.png'),
    },
    {
        name: 'sentinel-class-landing-craft',
        path: require('../assets/images/sentinel-class-landing-craft.png'),
    },
    {
        name: 'slave-1',
        path: require('../assets/images/slave-1.png'),
    },
    {
        name: 'solar-sailer',
        path: require('../assets/images/solar-sailer.png'),
    },
    {
        name: 'star-destroyer',
        path: require('../assets/images/star-destroyer.png'),
    },
    {
        name: 'theta-class-t-2c-shuttle',
        path: require('../assets/images/theta-class-t-2c-shuttle.png'),
    },
    {
        name: 'tie-advanced-x1',
        path: require('../assets/images/tie-advanced-x1.png'),
    },
    {
        name: 'trade-federation-cruiser',
        path: require('../assets/images/trade-federation-cruiser.png'),
    },
    {
        name: 'v-wing',
        path: require('../assets/images/v-wing.png'),
    },
    {
        name: 'x-wing',
        path: require('../assets/images/x-wing.png'),
    },
    {
        name: 'y-wing',
        path: require('../assets/images/y-wing.png'),
    }
]

