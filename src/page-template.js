
const generateTeamMembers = teamDataArr => {
    return `
    <section class="row card-holder">
    ${teamDataArr.filter(({ role }) => role = 'Manager')
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

    ${teamDataArr.filter(({ role }) => role = 'Engineer')
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

    ${teamDataArr.filter(({ role }) => role = 'Intern')
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


module.exports = templateData => {
    // destructure data


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

        // <section class="row card-holder">
        //     <div class="card col-12 col-md-6 col-lg-4 col-xl-3">
        //         <h3 class="card-title">Manager</h3>
        //         <p>Buddy Bell</p>
        //         <p>Employee Id: 14</p>
        //         <p>email: billyb@royals.com</p>
        //         <p>Office Number: 1</p>
        //     </div>
        //     <div class="card col-12 col-md-6 col-lg-4 col-xl-3">
        //         <h3 class="card-title">Manager</h3>
        //         <p>Buddy Bell</p>
        //         <p>Employee Id: 14</p>
        //         <p>email: billyb@royals.com</p>
        //         <p>Office Number: 1</p>
        //     </div>
        //     <div class="card col-12 col-md-6 col-lg-4 col-xl-3">
        //         <h3 class="card-title">Manager</h3>
        //         <p>Buddy Bell</p>
        //         <p>Employee Id: 14</p>
        //         <p>email: billyb@royals.com</p>
        //         <p>Office Number: 1</p>
        //     </div>
        //     <div class="card col-12 col-md-6 col-lg-4 col-xl-3">
        //         <h3 class="card-title">Manager</h3>
        //         <p>Buddy Bell</p>
        //         <p>Employee Id: 14</p>
        //         <p>email: billyb@royals.com</p>
        //         <p>Office Number: 1</p>
        //     </div>
        //     <div class="card col-12 col-md-6 col-lg-4 col-xl-3">
        //         <h3 class="card-title">Manager</h3>
        //         <p>Buddy Bell</p>
        //         <p>Employee Id: 14</p>
        //         <p>email: billyb@royals.com</p>
        //         <p>Office Number: 1</p>
        //     </div>
        //     <div class="card col-12 col-md-6 col-lg-4 col-xl-3">
        //         <h3 class="card-title">Manager</h3>
        //         <p>Buddy Bell</p>
        //         <p>Employee Id: 14</p>
        //         <p>email: billyb@royals.com</p>
        //         <p>Office Number: 1</p>
        //     </div>
        // </section>
    </main>
    
</body>
</html>
    `
}