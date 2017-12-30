const readings = {
    unitOne: {
        primary: {
            category: {
                beginner: [{
                    author: 'Homer',
                    date: '850BCE-800BCE',
                    title: 'The Odyssey (Ian Johnston)',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                }],
                intermediate: [{
                    author: 'Homer',
                    date: '850BCE-800BCE',
                    title: 'The Odyssey',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                }],
                advanced: [{
                    author: 'Ovid',
                    date: '43BCE-17/18CE',
                    title: 'Metamorphases',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Ted Hughes',
                    date: '1930-1998',
                    title: 'Tales from Ovid',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                }]
            }
            
        },
        further:{
            category: {
                poems: [{
                    author: 'W. H. Auden',
                    date: '1907-1973',
                    title: 'The Unknown Citizen',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'W. H. Auden',
                    date: '1907-1973',
                    title: 'The Fall of Rome',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Marin Sorescu',
                    date: '1936-1996',
                    title: 'Prometheus',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'D. H. Lawrence',
                    date: '1885-1930',
                    title: 'Leda',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Charles Simic',
                    date: '1938-',
                    title: 'Charon’s Cosmology',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Margaret Atwood',
                    date: '1939-',
                    title: 'Eurydice',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Margaret Atwood',
                    date: '1939-',
                    title: 'Siren Song',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Percy Bysshe Shelley',
                    date: '1792-1822 ',
                    title: 'from Prometheus Bound',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Lord Alfred Tennyson',
                    date: '1809-1892',
                    title: 'Ulysses',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Robinson Jeffers',
                    date: '1887-1962',
                    title: 'Shine, Perishing Republic',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Muriel Rukeyser',
                    date: '1913-1980',
                    title: 'Myth',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Aeschylus',
                    date: '525BCE-426BCE',
                    title: 'Sacrifice of Iphigenia',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'William Shakespeare',
                    date: '1564-1616',
                    title: 'Orpheus',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Howard Moss',
                    date: '1922-1987',
                    title: 'King Midas',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Robert Herrick',
                    date: '1591-1674',
                    title: 'A Hymn to Bacchus',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Alexander Pope',
                    date: '1688-1744',
                    title: 'Chorus of Athenians',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'William Blake',
                    date: '1757-1827',
                    title: 'Why Was Cupid A Boy',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'John Howard Payne',
                    date: '1791-1852',
                    title: 'Sibyl',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Edna St. Vincent Millay',
                    date: '1892-1950',
                    title: 'Daphne',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Louise Bogan',
                    date: '1897-1970',
                    title: 'Medusa',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Dorothy Parker',
                    date: '1893-1967',
                    title: 'Penelope',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Robert Hayden',
                    date: '1913-1980',
                    title: 'Perseus',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'William Butler Yeats',
                    date: '1865-1939',
                    title: 'Leda and the Swan',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Robert Browning',
                    date: '1812-1889',
                    title: 'Eurydice to Orpheus',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Hilda Doolittle',
                    date: '1886-1961',
                    title: 'Leda',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Denise Levertov',
                    date: '1923-1997',
                    title: 'Eros',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Archibald MacLeish',
                    date: '1892-1982',
                    title: 'The Rock in the Sea',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                },
                {
                    author: 'Jorge Luis Borges',
                    date: '1899-1986',
                    title: 'The Labryinth',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est'
                }],

                essays: [{
                    author: 'Marco Roth',
                    date: '18 April 2012',
                    title: 'Myths We Don’t Outgrow',
                    source: 'The New Yorker',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est',
                    link: 'http://google.com'
                },{
                    author: '',
                    date: '',
                    title: 'Hegel’s Dialectics',
                    source: 'The Stanford Encyclopedia',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est',
                    link: 'http://google.com'
                },{
                    author: 'Roland Barthes',
                    date: '',
                    title: 'Myth Today',
                    source: 'from Mythologies',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est',
                    link: 'http://google.com'
                },{
                    author: 'Mark C. Taylor',
                    date: '28 June 1992',
                    title: 'Ye Shall Be as Goddesses',
                    source: 'NY Times',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est',
                    link: 'http://google.com'
                },{
                    author: 'Robert J. Zimmer',
                    date: '1 March 2013',
                    title: 'The Myth of the Successful College Dropout',
                    source: 'The Atlantic',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est',
                    link: 'http://google.com'
                },{
                    author: 'Frank Furedi',
                    date: '6 Nov 2015',
                    title: 'Books Are Dangerous',
                    source: 'Aeon',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nostrum mollitia. Eligendi, distinctio. Fugiat accusantium, sint ipsa excepturi cupiditate ullam quam earum officiis voluptate corporis voluptatum aut explicabo reiciendis est',
                    link: 'http://google.com'
                }]
            }
        }
    }
}


export default readings;