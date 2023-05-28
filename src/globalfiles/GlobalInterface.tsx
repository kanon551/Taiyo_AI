

export interface CountryData {
    updated: number;
    country: string;
    countryInfo: {
        _id: number;
        iso2: string;
        iso3: string;
        lat: number;
        long: number;
        flag: string;
    };
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    continent: string;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
}

export interface CovidOverAllData {
    cases: Record<string, number>;
    deaths: Record<string, number>;
    recovered: Record<string, number>;
}

export interface ContactProps {
    id: number;
    firstName: string;
    lastName: string;
    status: string;
}

export interface CardProps {
    object: ContactProps;
    deleteUser: () => void;
    toggleModal: (choice: boolean) => void;
}

export interface ModalProps {
    toggleModal: (choice: boolean) => void;
    modalData: ContactProps;
    modalStatus: string;
}

export interface RootState {
    users: ContactProps[];
}



export const userContactInitialData = [
    {
        firstName: 'Ethan',
        lastName: 'Smith',
        status: 'Inactive',
        id: 0,
    },
    {
        firstName: 'Ava',
        lastName: 'Johnson',
        status: 'Inactive',
        id: 1,
    },
    {
        firstName: 'Noah',
        lastName: 'Williams',
        status: 'Active',
        id: 2,
    },
    {
        firstName: 'Sophia',
        lastName: 'Jones',
        status: 'Active',
        id: 3,
    },
    {
        firstName: 'Liam',
        lastName: 'Brown',
        status: 'Active',
        id: 4,
    }
    , {
        firstName: 'Isabella',
        lastName: 'Davis',
        status: 'Inactive',
        id: 5,
    }
    , {
        firstName: 'Jackson',
        lastName: 'Miller',
        status: 'Inactive',
        id: 6,
    }
    , {
        firstName: 'Mia',
        lastName: 'Wilson',
        status: 'Active',
        id: 7,
    }, {
        firstName: 'Aiden',
        lastName: 'Moore',
        status: 'Inactive',
        id: 8,
    },
    {
        firstName: 'Charlotte',
        lastName: 'Taylor',
        status: 'Active',
        id: 9,
    }
]