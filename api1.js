const url1 = 'https://hp-api.herokuapp.com/api/characters/house/gryffindor';
fetch(url1,{
    method: 'GET'
}).then((response)=> {

    return response.json()
}).then((data)=> {
    console.log(data)
    for(var i=0;i<47;i++)
     {
         if(data[i].hogwartsStaff) {
        var board = document.createElement('div');
        board.className = "col-lg-3 col-md-6 col-sm-6";
        board.innerHTML = `
        <div class="hover" class="card" style="width: 10rem;">
        <img src=${data[i].image} class="card-img-top" alt="Image Not Available">
            <div class="card-body">
                <h5 class="card-title">Name : ${data[i].name}</h5>
                <p>DOB : ${data[i].dateOfBirth}</p>
                <p>Ancestry : ${data[i].ancestry}</p>
            </div>
        </div>
        `;
        let you = document.getElementById("Professor1");
        you.appendChild(board);    
    }
    else if(data[i].hogwartsStudent) {
        var board = document.createElement('div');
        board.className = "col-lg-3 col-md-6 col-sm-12";
        board.innerHTML = `
        <div class="hover" class="card" style="width: 14rem;">
        <img src=${data[i].image} class="card-img-top" alt="Image Not Available">
            <div class="card-body">
                <h5 class="card-title">Name : ${data[i].name}</h5>
                <p>DOB : ${data[i].dateOfBirth}</p>
                <p>Ancestry : ${data[i].ancestry}</p>
            </div>
        </div>
        `;
        let you = document.getElementById("student1");
        you.appendChild(board);
    }
}
})


// ----------------------------------------------

const url2 = 'https://hp-api.herokuapp.com/api/characters/house/hufflepuff';
fetch(url2,{
    method: 'GET'
}).then((response)=> {

    return response.json()
}).then((data)=> {
    console.log(data)
    for(var i=0;i<47;i++)
     {
         if(data[i].hogwartsStaff) {
        var board = document.createElement('div');
        board.className = "col-lg-3 col-md-6 col-sm-6";
        board.innerHTML = `
        <div class="hover" class="card" style="width: 10rem;">
        <img src=${data[i].image} class="card-img-top" alt="Image Not Available">
            <div class="card-body">
                <h5 class="card-title">Name : ${data[i].name}</h5>
                <p>DOB : ${data[i].dateOfBirth}</p>
                <p>Ancestry : ${data[i].ancestry}</p>
            </div>
        </div>
        `;
        let you = document.getElementById("Professor2");
        you.appendChild(board);    
    }
    else if(data[i].hogwartsStudent) {
        var board = document.createElement('div');
        board.className = "col-lg-3 col-md-6 col-sm-12";
        board.innerHTML = `
        <div class="hover" class="card" style="width: 14rem;">
        <img src=${data[i].image} class="card-img-top" alt="Image Not Available">
            <div class="card-body">
                <h5 class="card-title">Name : ${data[i].name}</h5>
                <p>DOB : ${data[i].dateOfBirth}</p>
                <p>Ancestry : ${data[i].ancestry}</p>
            </div>
        </div>
        `;
        let you = document.getElementById("student2");
        you.appendChild(board);
    }
}
})


// ---------------------------------------------------------------

const url3 = 'https://hp-api.herokuapp.com/api/characters/house/ravenclaw';
fetch(url3,{
    method: 'GET'
}).then((response)=> {

    return response.json()
}).then((data)=> {
    console.log(data)
    for(var i=0;i<47;i++)
     {
         if(data[i].hogwartsStaff) {
        var board = document.createElement('div');
        board.className = "col-lg-3 col-md-6 col-sm-6";
        board.innerHTML = `
        <div class="hover" class="card" style="width: 10rem;">
        <img src=${data[i].image} class="card-img-top" alt="Image Not Available">
            <div class="card-body">
                <h5 class="card-title">Name : ${data[i].name}</h5>
                <p>DOB : ${data[i].dateOfBirth}</p>
                <p>Ancestry : ${data[i].ancestry}</p>
            </div>
        </div>
        `;
        let you = document.getElementById("Professor3");
        you.appendChild(board);    
    }
    else if(data[i].hogwartsStudent) {
        var board = document.createElement('div');
        board.className = "col-lg-3 col-md-6 col-sm-12";
        board.innerHTML = `
        <div class="hover" class="card" style="width: 14rem;">
        <img src=${data[i].image} class="card-img-top" alt="Image Not Available">
            <div class="card-body">
                <h5 class="card-title">Name : ${data[i].name}</h5>
                <p>DOB : ${data[i].dateOfBirth}</p>
                <p>Ancestry : ${data[i].ancestry}</p>
            </div>
        </div>
        `;
        let you = document.getElementById("student3");
        you.appendChild(board);
    }
}
})

// -----------------------------------------------------------------

const url4 = 'https://hp-api.herokuapp.com/api/characters/house/slytherin';
fetch(url4,{
    method: 'GET'
}).then((response)=> {

    return response.json()
}).then((data)=> {
    console.log(data)
    for(var i=0;i<47;i++)
     {
         if(data[i].hogwartsStaff) {
        var board = document.createElement('div');
        board.className = "col-lg-3 col-md-6 col-sm-6";
        board.innerHTML = `
        <div class="hover" class="card" style="width: 10rem;">
        <img src=${data[i].image} class="card-img-top" alt="Image Not Available">
            <div class="card-body">
                <h5 class="card-title">Name : ${data[i].name}</h5>
                <p>DOB : ${data[i].dateOfBirth}</p>
                <p>Ancestry : ${data[i].ancestry}</p>
            </div>
        </div>
        `;
        let you = document.getElementById("Professor4");
        you.appendChild(board);    
    }
    else if(data[i].hogwartsStudent) {
        var board = document.createElement('div');
        board.className = "col-lg-3 col-md-6 col-sm-12";
        board.innerHTML = `
        <div class="hover" class="card" style="width: 14rem;">
        <img src=${data[i].image} class="card-img-top" alt="Image Not Available">
            <div class="card-body">
                <h5 class="card-title">Name : ${data[i].name}</h5>
                <p>DOB : ${data[i].dateOfBirth}</p>
                <p>Ancestry : ${data[i].ancestry}</p>
            </div>
        </div>
        `;
        let you = document.getElementById("student4");
        you.appendChild(board);
    }
}
})

  
// -----------------------------------------------------------------------





