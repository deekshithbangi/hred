import React from 'react'

const loginh = () => { 
    return ( 
      <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SignUp Form - MongoDB</title>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <div className="container">
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6 main">
        <form action="/sign_up" method="POST">
          <input
            type="text"
            className="box"
            id="name"
            name="name"
            placeholder="Name"
            required=""
          />
          <br />
          <input
            type="text"
            className="box"
            id="email"
            name="email"
            placeholder="Email"
            required=""
          />
          <br />
          <input
            type="text"
            className="box"
            id="phno"
            name="phno"
            placeholder="Mobile"
            required=""
          />
          <br />
          <input
            type="text"
            className="box"
            id="password"
            name="password"
            placeholder="Password"
            required=""
          />
          <br />
          <input type="submit" defaultValue="Submit" id="submit" />
        </form>
      </div>
      <div className="col-md-3"></div>
    </div>
  </div>
  <h2>SignUp Form</h2>

      </div>
    )
  }
  
  export default loginh;


