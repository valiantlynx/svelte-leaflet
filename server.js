const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const roles = require('./config/roles_list.js');
const allowedOrigins = require('./config/allowedOrigins.js');

const app = express();

app.use(cors({
    origin: allowedOrigins,
    optionsSuccessStatus: 200
}));
// parse application/json
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/animevariantDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    keepMeLoggedIn: { type: Boolean, default: false },
    keepMeUpdated: { type: Boolean, default: false },
    role: { type: Array, default: [roles.User] },
    quote: { type: String },

});

const companySchema = new mongoose.Schema({

    organisasjonsnummer: { type: String, required: true, unique: true },
    description: { type: String },
    image: { type: String, required: true },
    navn: { type: String, required: true },

    organisasjonsform: {
        kode: { type: String, required: true },
        beskrivelse: { type: String },
        links: [{ type: String }]
    },
    postadresse: {
        land: { type: String },
        landkode: { type: String },
        postnummer: { type: String },
        poststed: { type: String },
        adresse: [{ type: String }],
        kommune: { type: String },
        kommunenummer: { type: String },
    },
    registreringsdatoEnhetsregisteret: { type: Date },
    registrertIMvaregisteret: { type: Boolean },
    naeringskode1: {
        beskrivelse: { type: String },
        kode: { type: String }
    },
    naeringskode2: {
        beskrivelse: { type: String },
        kode: { type: String }
    },
    naeringskode3: {
        beskrivelse: { type: String },
        kode: { type: String }
    },
    antallAnsatte: { type: Number },
    forretningsadresse: {
        land: { type: String },
        landkode: { type: String },
        postnummer: { type: String },
        poststed: { type: String },
        adresse: [{ type: String }],
        kommune: { type: String },
        kommunenummer: { type: String },
    },
    stiftelsesdato: { type: Date },
    institusjonellSektorkode: {
        kode: { type: String, required: true },
        beskrivelse: { type: String }
    },
    registrertIForetaksregisteret: { type: Boolean },
    registrertIStiftelsesregisteret: { type: Boolean },
    registrertIFrivillighetsregisteret: { type: Boolean },
    sisteInnsendteAarsregnskap: { type: String },
    konkurs: { type: Boolean },
    underAvvikling: { type: Boolean },
    underTvangsavviklingEllerTvangsopplosning: { type: Boolean },
    maalform: { type: String },
    links: [{ type: String }]
});

// userSchema.methods.validatePassword = function (password) {
//     return this.password === password;
// };

const User = mongoose.model('User', userSchema);
const Company = mongoose.model('Company', companySchema);


//console.log(roles)

app.route('/').get(function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.route('/api/users').get(function (req, res) {
    //console.log(req);
    User.find((err, items) => {
        if (err) {
            res.send(err);
        } else {
            res.json(items);
        }
    });
});

app.post('/api/users', async function (req, res) {
    console.log('Received POST request to /api/users', req.body);

    try {
        if (req.body) {
            await User.updateOne({ _id: req.body._id }, { $set: { role: req.body.role } }); //put the stuff that should be updated here
            return res.json({ status: 'success', message: 'User data updated successfully.' });
        } else {
            return res.json({ status: 'error', message: 'no data recieved' });
        }

    } catch (error) {
        console.log(error)
        return res.json({ status: 'error', message: 'Invalid token, check if you are logged in.' });

    }
});


app.post('/api/registerUser', function (req, res) {
    console.log('Received POST request to /api/users');
    User.findOne({ email: req.body.email }, async function (err, existingUser) {
        try {


            if (existingUser) {
                console.log('Existing user');
                res.json({ message: 'Email address already in use.' });
            } else {
                const newPassword = await bcrypt.hash(req.body.password, 10);
                console.log('New user');
                console.log(req.body);
                const user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: newPassword //req.body.password hashed


                });
                user.save();
                res.json({ status: "success", message: 'Successfully registered, Please login' });
            }
        } catch (error) {
            return res.status(400).json({ message: err.message });
        }
    });
});

function addAdmin() {
    const admin = new User({
        name: 'Gormery',
        email: 'gormerykombo@gmail.com',
        password: '$2a$10$jESDtM8g7GV5rv62UCEJv.VCFrjXTDY0AD7.VpgP2.gI0H1Wbl0E2',
        keepMeLoggedIn: false,
        keepMeUpdated: false,
        role: [2007, 5673, 1903],
    });

    admin.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Admin added successfully!");
        }
    });
}



app.post('/api/login', async function (req, res) {
    console.log('Received POST request to /api/login');
    //console.log(req.body); 
    addAdmin();
    User.findOne({ email: req.body.email }, async function (err, user) {
        try {

            if (user) {
                const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
                // if (!user.validatePassword(req.body.password)) {
                //     return res.status(400).json({ message: 'Incorrect email or password' });
                // }

                if (isPasswordValid) {
                    const token = jwt.sign({
                        name: user.name,
                        email: user.email,
                        role: user.role,

                    }, 'Hii_ni_siri_yetu', { expiresIn: '1h' })

                    return res.json({ status: "success", message: 'Login successful', user: token });

                } else {
                    return res.json({ status: "failed", message: 'Incorrect password' });
                }
            }
            else if (!user) {

                return res.json({ status: "failed", message: 'Incorrect email, user does not exist, try registering' });
            }
        } catch (error) {
            res.status(400).json({ message: err.message });
        }
    });
});

app.post('/api/validateToken', function (req, res) {
    const token = req.body.token;
    //console.log(token);
    if (token) {
        jwt.verify(token, 'Hii_ni_siri_yetu', function (err, decodedToken) {
            //console.log(decodedToken);

            if (err) {
                res.status(401).json({ message: 'Invalid token' });
            } else {
                // Token is valid, so return the user data associated with the token
                User.findOne({ email: decodedToken.email }, function (err, user) {
                    console.log(user);
                    if (err) {
                        res.status(500).json({ message: err.message });
                        console.log(err.message);
                    } else if (!user) {
                        res.status(404).json({ message: 'User not found' });
                        console.log('User not found');
                    } else {
                        console.log({
                            name: user.name,
                            email: user.email,
                            role: user.role
                        });
                        res.json({
                            name: user.name,
                            email: user.email,
                            role: user.role
                        });
                    }
                });
            }
        });
    } else {
        res.status(401).json({ message: 'Token not provided' });
    }
});

app.get('/api/quote', async function (req, res) {
    console.log('Received GET request to /api/quote');
    const token = req.headers['x-access-token'];
    //console.log(req.body);
    try {
        const decoded = jwt.verify(token, 'Hii_ni_siri_yetu');
        const email = decoded.email;

        const user = await User.findOne({ email: email });

        return res.json({ status: 'success', quote: user.quote });
    } catch (error) {
        console.log(error)
        res.json({ status: "error", error: 'Invalid token' });
    }

});

app.post('/api/quote', async function (req, res) {
    console.log('Received POST request to /api/login');
    const token = req.headers['x-access-token'];

    console.log(token);
    //console.log(req.body);
    try {

        const decoded = jwt.verify(token, 'Hii_ni_siri_yetu');
        const email = decoded.email;
        await User.updateOne({ email: email }, { $set: { quote: req.body.quote } });
        return res.json({ status: 'success' });

    } catch (error) {
        console.log(error)
        res.json({ status: "error", error: 'Invalid token, check if your logged in' });
    }
});

app.route('/api/companies').get(function (req, res) {
    Company.find({})
        .select('-_id -__v')
        .limit(10)
        .exec((err, companies) => {
            if (err) {
                res.send(err);
            } else {
                res.json({ status: "success", companies });
            }
        });
})

app.get('/api/:organisasjonsnummer', async (req, res) => {
    console.log('Received GET request to /api/:organisasjonsnummer');
    console.log(req.body);
    try {
        const { organisasjonsnummer } = req.params;
        const existingCompany = await Company.findOne({ organisasjonsnummer });

        if (existingCompany) {
            // If the company is already in the database, return it
            res.json(existingCompany);
        } else {
            // If the company is not in the database, fetch it from the API and save it to the database
            const apiUrl = `https://data.brreg.no/enhetsregisteret/api/enheter/${organisasjonsnummer}`;
            const apiResponse = await axios.get(apiUrl);

            if (apiResponse.status === 200) {
                const newCompany = new Company(apiResponse.data);
                await newCompany.save();
                res.json(newCompany);
            } else {
                res.status(404).send('Company not found');
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.post('/api/:organisasjonsnummer', async (req, res) => {
    console.log('Received POST request to /api/:organisasjonsnummer');
    console.log(req.body);
    try {
        const { organisasjonsnummer } = req.params;
        const updatedCompany = await Company.findOneAndUpdate(
            { organisasjonsnummer },
            { $set: req.body },
            { new: true }
        );
        res.json(updatedCompany);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


app.listen(3031, function () {
    console.log("server started on port 3031");
});