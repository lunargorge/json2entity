export const personObj = {
    name: 'Rodric',
    surname: 'Brave',
    emailPrivate: {id: 1, value: 'rodric@gmail.com'},
    emailBusiness: {id: 2, value: 'brave@gmail.com'},
    phones: [
        {id: 1, prefix: '+55', value: '123123123'},
        {id: 2, prefix: '+56', value: '234234234'}
    ],
    addresses: [
        {
            id: 1,
            type: 1,
            city: {
                id: 2,
                value: 'Belfaxt'
            },
            street: {
                id: 1,
                value: 'Paradise Street'
            }
        },
        {
            id: 2,
            type: 2,
            city: {
                id: 4,
                value: 'Bristol'
            },
            street: {
                id: 3,
                value: 'Broad Street'
            }
        }
    ]
};

export const addressesObj = [
    {
        id: 1,
        type: 1,
        city: {
            id: 2,
            value: 'Chester'
        },
        street: {
            id: 1,
            value: 'Hurst Street'
        }
    },
    {
        id: 2,
        type: 2,
        city: {
            id: 4,
            value: 'Derby'
        },
        street: {
            id: 3,
            value: 'Edmund Street'
        }
    }
];

export const personJson = JSON.stringify(personObj);
export const addressesJson = JSON.stringify(addressesObj);