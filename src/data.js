import Item1 from './assets/images/item1.png'
import Item2 from './assets/images/item2.png'
import Item3 from './assets/images/item3.png'
import Item4 from './assets/images/item4.png'
import Item5 from './assets/images/item5.png'
import Item6 from './assets/images/item6.png'
import Item7 from './assets/images/item7.png'
import Item8 from './assets/images/item8.png'


export const links =[
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
    name: 'Pages',
        child: [
            {
                name: 'Services',
                path: '/services'
            },
            {
                name: 'Quality',
                path: '/quality'
            },
            {
                name: 'Portfolio',
                path: '/portfolio'
            },
            {
                name: 'Our Team',
                path: '/our_team'
            },
            {
                name: 'Contact Us',
                path: '/contact'
            },
        ]
    },
    {
        name: 'Shop',
        path: '/shop'
    },
    {
        name: 'Projects',
        path: '/projects'
    },
    {
        name: 'News',
        path: '/news'
    },
]

export const items = [
    {
        id: '1',
        name: 'Calabrese Broccoli',
        real_price: '20',
        discount_price: '13',
        star_number: '5',
        classify: 'Vegetable',
        img: Item1
    },
    {
        id: '2',
        name: 'Fresh Banana Fruites',
        real_price: '20',
        discount_price: '14',
        star_number: '5',
        classify: 'Fresh',
        img: Item2
    },
    {
        id: '3',
        name: 'White Nuts',
        real_price: '20',
        discount_price: '15',
        star_number: '5',
        classify: 'Millets',
        img: Item3
    },
    {
        id: '4',
        name: 'Vegan Red Tomato',
        real_price: '20',
        discount_price: '17',
        star_number: '5',
        classify: 'Vegetable',
        img: Item4
    },
    {
        id: '5',
        name: 'Mung Bean',
        real_price: '20',
        discount_price: '11',
        star_number: '5',
        classify: 'Health',
        img: Item5
    },
    {
        id: '6',
        name: 'Brown Hazelnut',
        real_price: '20',
        discount_price: '12',
        star_number: '5',
        classify: 'Nuts',
        img: Item6
    },
    {
        id: '7',
        name: 'Eggs',
        real_price: '20',
        discount_price: '17',
        star_number: '5',
        classify: 'Fresh',
        img: Item7
    },
    {
        id: '8',
        name: 'Zelco Suji Elaichi Rusk',
        real_price: '20',
        discount_price: '15',
        star_number: '5',
        classify: 'Fresh',
        img: Item8
    },
]