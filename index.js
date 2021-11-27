const { promptManager } = require('./src/prompts');


promptManager();

const mockData = [
    {
       name: 'Buddy Bell',
       id: '14',
       email: 'buddyb@royals',
       role: 'Manager',
       officeNumber: '1'
    },
    {
        name: 'Tony Pena',
        id: '15',
        email: 'tonyp@royals',
        role: 'Engineer',
        gitHub: 'tonypositive03'
     },
     {
        name: 'Ned Yost',
        id: '18',
        email: 'nedy@royals',
        role: 'Engineer',
        gitHub: 'wontheseries15'
     },
     {
        name: 'Dick Houser',
        id: '8',
        email: 'dickh@royals',
        role: 'Engineer',
        gitHub: '85royalsteam'
     },
     {
        name: 'Trey Hillman',
        id: '16',
        email: 'treyh@royals',
        role: 'Intern',
        school: 'Hard Knocks'
     },
     {
        name: 'Tony Muser',
        id: '13',
        email: 'tonym@royals',
        role: 'Intern',
        school: 'Sweeny'
     },
]