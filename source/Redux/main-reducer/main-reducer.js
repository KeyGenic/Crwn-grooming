const INITIAL_STATE =  {
    sections: [
        {
            title: 'Shampoos',
            img: 'https://manilla.lt/img/cms/hair%20shampoo.jpg',
            id:1,
            linkurl : 'shop/Shampoos'
        },
        {
            title: 'Shower Gels',
            img: "https://static5.depositphotos.com/1001001/469/i/600/depositphotos_4696043-stock-photo-bath-amenities.jpg",
            id:2,
            linkurl: 'shop/ShowerGels'
        },
        {
            title: 'Deaodorants',
            img: "https://img.mensxp.com/media/content/2018/Apr/roll-on-deodorants-thatll-ensure-you-never-smell-bad-1400x653-1523615135.jpg",
            id:3,
            linkurl : 'shop/DEAODORANTS'
        },
        {
            title: 'Body Powders',
            img:"https://blog.fendrihan.com/wp-content/uploads/2017/01/Lifestyle2-4.jpg",
            id:4,
            linkurl : 'shop/BodyPowders'
        },
        {
            title: 'Face Scrubs',
            img:"https://www.apetogentleman.com/wp-content/uploads/2020/05/best-face-scrubs.jpg",
            id:5,
            linkurl : 'shop/FaceScrubs'
        },
        {
            title: 'Bar Soaps',
            img:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1579902150-bar-soap-for-men-10-1579902145.jpg",
            id:6,
            linkurl : 'shop/BarSoaps'
        }
    ]
}

const mainReducer = (state = INITIAL_STATE,action) => {
    if(action.type){
        return state
    }
}

export default mainReducer