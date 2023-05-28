import React from 'react'

interface CardProps {
    firstName: string;
    lastName : string;
    status: string
}

const Card = ({ firstName, lastName, status }: CardProps) => {
    let backgroundColorClass = '';

    if (status === 'Inactive') {
        backgroundColorClass = 'bg-red-500';
    } else if (status === 'Active') {
        backgroundColorClass = 'bg-green-500';
    } else {
        backgroundColorClass = 'bg-blue-500';
    }
    
    return(
        <div className="relative flex items-center justify-center rounded bg-white h-28">
            <div className="text-1xl font-cursive text-gray-400 dark:text-gray-500" style={{color:'orange'}}>
                {firstName} {lastName} 
                <h2 className={`text-sm ${backgroundColorClass} font-normal text-center absolute top-0 left-0 z-1 px-2 py-1 text-white`} style={{ borderTopRightRadius: '50%', borderBottomRightRadius:'50%' }}>
                {status}
                </h2>
            </div>
        </div>
      );
}




const Contacts = () => {

    


    const generateRandomData = () => {
        const firstNames = ['John', 'Jane', 'Mike', 'Emily'];
        const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown'];
        const statuses = ['Active', 'Inactive'];
        
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        return {
          firstName: randomFirstName,
          lastName: randomLastName,
          status: randomStatus
        };
      };


      const cards = Array.from({ length: 8 }, (_, index) => generateRandomData());



  return (
    <>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center justify-center h-24 rounded bg-white">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-white">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-white">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-white">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center justify-center rounded bg-white h-28">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-white h-28">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-white h-28">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-white h-28">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-white">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center justify-center rounded bg-white h-28">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-white h-28">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-white h-28">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-white h-28">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
            </div>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
    </>
            
  )
}

export default Contacts
