require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require("./db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { email: username } });
      const compare = user && user.compare(password)
      if (!user || !password || !compare) {
        // return an error is email or password doesn't exist, or if password does
        // not match the password in our db
        return done(null, false, 'Username or password incorrect');
      }
      return done(null, {
        id: user.id,
        username: user.username,
        email: user.email,
      });

    } catch (error) {
      return done(err);
    }
  }
));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ where: { id } });
    done(null, user);
  } catch (error) {
    done(null, error);
  }
});


function isAuthenticated(req, res, next) {
  // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
  if (req.user)
    return next();

  // IF A USER ISN'T LOGGED IN.
  const data = {
    user: null,
    authorized: false,
    message: "Unauthorized",
    error: null,
  }
  return res.json(data).end()
}

function authenticateToken(req, res, next) {
  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401) // if there isn't any token

  jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next() // pass the execution off to whatever request the client intended
  })
};

// username is in the form { username: "my cool username" }
// ^^the above object structure is completely arbitrary
function generateAccessToken(user) {
  // expires after half and hour (1800 seconds = 30 minutes)
  // Create a new token with the username in the payload
  // and which expires 300 seconds after issue
  const token = jwt.sign(user, JWT_SECRET_KEY, {
    expiresIn: '1800s',
  })
  return token;
}

module.exports = {
  authenticateToken,
  generateAccessToken,
  passport,
  isAuthenticated,
}