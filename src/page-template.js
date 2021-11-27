// const mockData = [
//     {
//        name: 'Buddy Bell',
//        id: '14',
//        email: 'buddyb@royals',
//        role: 'Manager',
//        officeNumber: '1'
//     },
//     {
//         name: 'Tony Pena',
//         id: '15',
//         email: 'tonyp@royals',
//         role: 'Engineer',
//         gitHub: 'tonypositive03'
//      },
//      {
//         name: 'Ned Yost',
//         id: '18',
//         email: 'nedy@royals',
//         role: 'Engineer',
//         gitHub: 'wontheseries15'
//      },
//      {
//         name: 'Dick Houser',
//         id: '8',
//         email: 'dickh@royals',
//         role: 'Engineer',
//         gitHub: '85royalsteam'
//      },
//      {
//         name: 'Trey Hillman',
//         id: '16',
//         email: 'treyh@royals',
//         role: 'Intern',
//         school: 'Hard Knocks'
//      },
//      {
//         name: 'Tony Muser',
//         id: '13',
//         email: 'tonym@royals',
//         role: 'Intern',
//         school: 'Sweeny'
//      },
// ]




const generateTeamMembers = teamDataArr => {
    return `
    <section class="row card-holder">
    ${teamDataArr.filter(({ role }) => role === 'Manager')
                .map(({name, id, email, role, officeNumber}) => {
        return `
            <div class="card col-12 col-md-6 col-lg-4 col-xl-3">
                <h3 class="card-title">${role}</h3>
                <p>${name}</p>
                <p>Employee Id: ${id}</p>
                <p>email: ${email}</p>
                <p>Office Number: ${officeNumber}</p>
            </div>
    `
    })
    .join('')}

    ${teamDataArr.filter(({ role }) => role === 'Engineer')
                .map(({name, id, email, role, gitHub}) => {
        return `
            <div class="card col-12 col-md-6 col-lg-4 col-xl-3">
                <h3 class="card-title">${role}</h3>
                <p>${name}</p>
                <p>Employee Id: ${id}</p>
                <p>email: ${email}</p>
                <p>Office Number: ${gitHub}</p>
            </div>
    `
    })
    .join('')}

    ${teamDataArr.filter(({ role }) => role === 'Intern')
                .map(({name, id, email, role, school}) => {
        return `
            <div class="card col-12 col-md-6 col-lg-4 col-xl-3">
                <h3 class="card-title">${role}</h3>
                <p>${name}</p>
                <p>Employee Id: ${id}</p>
                <p>email: ${email}</p>
                <p>Office Number: ${school}</p>
            </div>
    `
    })
    .join('')}
    </section>   
    `
};


module.exports = (templateData) => {
    // destructure data
console.log(templateData);

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css" />
    <title>Buddy's Team</title>
</head>
<body>
    <header>
        <h1 class="page-title">Buddy's Team</h1>
    </header>
    <main class="container">
        ${generateTeamMembers(templateData)}
        
    </main>
    
</body>
</html>
    `
}

