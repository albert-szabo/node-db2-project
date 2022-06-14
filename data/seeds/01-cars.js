// STRETCH

const initialCars = [
    {
        vin: '2C3CCACG5CH278240',
        make: 'Chrysler',
        model: '300',
        mileage: 12407,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '1GNKVGED5CJ196120',
        make: 'Chevrolet',
        model: 'Traverse',
        mileage: 20391,
        transmission: 'automatic'
    },
    {
        vin: '1C3CDZBG8DN504146',
        make: 'Dodge',
        model: 'Avenger',
        mileage: 79261,
        title: 'salvage'
    },
    {
        vin: '1ZVBP8AM0D5265429',
        make: 'Ford',
        model: 'Mustang',
        mileage: 5917,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: 'JF1GPAD60D1803590',
        make: 'Subaru',
        model: 'Impreza',
        mileage: 45314
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate();
    await knex('cars').insert(initialCars);
};
