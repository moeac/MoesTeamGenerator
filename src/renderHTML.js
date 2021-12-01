function managerCard(manager) {
    return `
    <div class="card restraint m-4 p-4">
        <div class="card-image">
            <figure class="image">
                <img src="images/projectmanagersq.jpg" alt="Manager">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left p-2">
                    <span class="icon is-large fas fa-2x">
                        <i class="fas fa-crown"></i>
                    </span>
                </div>
                <div class="media-content">
                    <p class="title is-4">Manager #${manager.id}</p>
                    <p class="subtitle is-6">${manager.name}</p>
                </div> 
            </div>
            <div class="content has-text-left">
                <a href="mailto:${manager.email}"><span class="icon"><i class="fas fa-envelope"></i></span>${manager.email}</a><br>
                <a href="tel:${manager.officeNumber}"><span class="icon"><i class="fas fa-phone"></i></span>${manager.officeNumber}</a>
            </div>
        </div>
    </div>
    `;
}

function engineerCard(engineer) {
    return `
    <div class="card restraint m-4 p-4">
        <div class="card-image">
            <figure class="image">
                <img src="images/developer3.jpg" alt="Developer">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left p-2">
                    <span class="icon is-large fas fa-2x">
                        <i class="fas fa-tools"></i>
                    </span>
                </div>
                <div class="media-content">
                    <p class="title is-4">Engineer #${engineer.id}</p>
                    <p class="subtitle is-6">${engineer.name}</p>
                </div> 
            </div>
            <div class="content has-text-left">
                <a href="mailto:${engineer.email}"><span class="icon"><i class="fas fa-envelope"></i></span>${engineer.email}</a><br>
                <a href="https://github.com/${engineer.gitHub}"><span class="icon"><i class="fab fa-github"></i></span>${engineer.gitHub}</a>
            </div>
        </div>
    </div>
    `;
}

function internCard(intern) {
    return `
    <div class="card restraint m-4 p-4">
        <div class="card-image">
            <figure class="image">
                <img src="images/slave.png" alt="Intern">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left p-2">
                    <span class="icon is-large fas fa-2x">
                        <i class="fas fa-dog"></i>
                    </span>
                </div>
                <div class="media-content">
                    <p class="title is-4">Intern #${intern.id}</p>
                    <p class="subtitle is-6">${intern.name}</p>
                </div> 
            </div>
            <div class="content has-text-left">
                <a href="mailto:${intern.email}"><span class="icon"><i class="fas fa-envelope"></i></span>${intern.email}</a><br>
                <a href="https://github.com/${intern.school}"><span class="icon"><i class="fas fa-graduation-cap"></i></span>${intern.school}</a>
            </div>
        </div>
    </div>
    `;
}

function employeePage(employees) {
    return  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Big Team Tings</title>
        <link rel="shortcut icon" href="./images/wholesomebabyorangutan.jpg" type="image/x-icon">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"/>
        <link rel="stylesheet" href="./assets/style.css"/>
        <script src="https://kit.fontawesome.com/8c6fbba865.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&display=swap" rel="stylesheet">
    </head>
    
    <body>
        <nav class="level has-background-black">
            <p class="level-item orange has-text-weight-bold is-size-3 p-2"> The H-Team </p>
        </nav>

        <div class="container">

            ${employees}

        </div>
    </body>
    </html>
    `
}