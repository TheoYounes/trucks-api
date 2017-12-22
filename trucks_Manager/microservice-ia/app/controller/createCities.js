const {City} = require('../models/city');
const {Stock} = require ('../models/stocks');

const cities = [
    {
        "name"
            :
            "Paris",
        "position"
            :
            {
                "latitude"
                    :
                    "48.8645862",
                "longitude"
                    :
                    "2.3732896",
            }
        ,
        "ressources"
            :
            200,
    },

    {
        "name"
            :
            "Lyon",
        "position"
            :
            {
                "latitude"
                    :
                    "45.764043",
                "longitude"
                    :
                    "4.835659",
            }
        ,
        "ressources"
            :
            200,
    },

    {
        "name"
            :
            "Nantes",
        "position"
            :
            {
                "latitude"
                    :
                    "47.218371",
                "longitude"
                    :
                    "-1.553621",
            }
        ,
        "ressources"
            :
            200,
    },

    {
        "name"
            :
            "Lille",
        "position"
            :
            {
                "latitude"
                    :
                    "50.62925",
                "longitude"
                    :
                    "3.057256",
            }
        ,
        "ressources"
            :
            200,
    },

    {
        "name"
            :
            "Toulouse",
        "position"
            :
            {
                "latitude"
                    :
                    "43.6096866",
                "longitude"
                    :
                    "1.4463958",
            }
        ,
        "ressources"
            :
            200,
    },


    {
        "name"
            :
            "Cannes",
        "position"
            :
            {
                "latitude"
                    :
                    "43.552847",
                "longitude"
                    :
                    "7.017369",
            }
        ,
        "ressources"
            :
            200,
    },

    {
        "name"
            :
            "Nice",
        "position"
            :
            {
                "latitude"
                    :
                    "43.7101728",
                "longitude"
                    :
                    "7.261953200000001",
            }
        ,
        "ressources"
            :
            200,
    },


    {
        "name"
            :
            "Montpellier",
        "position"
            :
            {
                "latitude"
                    :
                    "43.610769",
                "longitude"
                    :
                    "3.876716",
            }
        ,
        "ressources"
            :
            200,
    },

    {
        "name"
            :
            "Ivry-sur-seine",
        "position"
            :
            {
                "latitude"
                    :
                    "48.813055",
                "longitude"
                    :
                    "2.38822",
            }
        ,
        "ressources"
            :
            200,
    },


    {
        "name"
            :
            "Amiens",
        "position"
            :
            {
                "latitude"
                    :
                    "49.894067",
                "longitude"
                    :
                    "2.295753",
            }
        ,
        "ressources"
            :
            200,
    },

    {
        "name"
            :
            "Rennes",
        "position"
            :
            {
                "latitude"
                    :
                    "48.117266",
                "longitude"
                    :
                    "-1.6777926",
            }
        ,
        "ressources"
            :
            200,
    },


    {
        "name"
            :
            "Troyes",
        "position"
            :
            {
                "latitude"
                    :
                    "48.2973451",
                "longitude"
                    :
                    "4.0744009",
            }
        ,
        "ressources"
            :
            200,
    },

    {
        "name"
            :
            "Vichy",
        "position"
            :
            {
                "latitude"
                    :
                    "46.1290139",
                "longitude"
                    :
                    "3.4260595",
            }
        ,
        "ressources"
            :
            200,
    }
];
const createCities = () => {
    Stock.find({})
        .then(stocks => {
            const x = Math.floor((Math.random() * stocks.length) + 1);
            console.log(x);
            cities.map((city) => {
                return new City({
                    name: city.name,
                    position: city.position,
                    ressources: stocks[x].value
                }).save();
            });
        });
};

module.exports = {createCities};
