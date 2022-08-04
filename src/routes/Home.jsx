import Card from "../components/Card"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = () => {
    const students = [
        {id: 1, firstName: "B.A.", lastName: "Baracus", ipk: 3.5, desc: "Lorem epsum blablab abalbla abalbalbalablsbalsbdla adblabdlasb..."},
        {id: 2, firstName: "Theodore", lastName: "Calvin", ipk: 3.2, desc: "Lorem epsum blablab abalbla abalbalbalablsbalsbdla adblabdlasb..."},
        {id: 3, firstName: "Sledge", lastName: "Hammer", ipk: 3.01, desc: "Lorem epsum blablab abalbla abalbalbalablsbalsbdla adblabdlasb..."},
        {id: 4, firstName: "Peter", lastName: "Thornton", ipk: 3.1, desc: "Lorem epsum blablab abalbla abalbalbalablsbalsbdla adblabdlasb..."},
        {id: 5, firstName: "Lynn", lastName: "Tanner", ipk: 2.9, desc: "Lorem epsum blablab abalbla abalbalbalablsbalsbdla adblabdlasb..."},
        {id: 6, firstName: "April", lastName: "Curtis", ipk: 3.32, desc: "Lorem epsum blablab abalbla abalbalbalablsbalsbdla adblabdlasb..."},
        {id: 7, firstName: "Angela", lastName: "Bower", ipk: 3.92, desc: "Lorem epsum blablab abalbla abalbalbalablsbalsbdla adblabdlasb..."},
        {id: 8, firstName: "Jonathan", lastName: "Higgins", ipk: 2.7, desc: "Lorem epsum blablab abalbla abalbalbalablsbalsbdla adblabdlasb..."},
    ]

    return(
        <div className="container mx-auto">
            <Header/>
            <main className='flex flex-row flex-wrap px-10 mx-auto'>
                <div className="basis-full">
                <input type="text"
                placeholder='cari nama'
                className='md:w-[500px] h-[52px] border-[1px] rounded-md p-4 my-6 lg:my-12 border-gray-500'/>
                </div>
                {students.map((e,i) => {
                return (
                    <Card key={i}
                    id={e.id}
                    ipk={e.ipk}
                    firstName={e.firstName}
                    lastName={e.lastName}
                    desc={e.desc}
                    ></Card>
                )
                })}
            </main>
            <Footer/>
        </div>
    )
}

export default Home