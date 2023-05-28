

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


  export const userContactInitialData = [
    {
        firstname: 'Ethan',
        lastName: 'Smith',
        status: 'Inactive',
    },
    {
        firstname: 'Ava',
        lastName: 'Johnson',
        status: 'Inactive',
    },
    {
        firstname: 'Noah',
        lastName: 'Williams',
        status: 'Active',
    },
    {
        firstname: 'Ethan',
        lastName: 'Smith',
        status: 'Inactive',
    },
    {
        firstname: 'Sophia',
        lastName: 'Jones',
        status: 'Active',
    },
    {
        firstname: 'Ethan',
        lastName: 'Smith',
        status: 'Active',
    },
    {
        firstname: 'Liam',
        lastName: 'Brown',
        status: 'Active',
    }
    ,{
        firstname: 'Isabella',
        lastName: 'Davis',
        status: 'Inactive',
    }
    ,{
        firstname: 'Jackson',
        lastName: 'Miller',
        status: 'Inactive',
    }
    ,{
        firstname: 'Mia',
        lastName: 'Wilson',
        status: 'Active',
    },{
        firstname: 'Aiden',
        lastName: 'Moore',
        status: 'Inactive',
    },
    {
        firstname: 'Charlotte',
        lastName: 'Taylor',
        status: 'Active',
    }
  ]