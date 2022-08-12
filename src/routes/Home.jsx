import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Students } from "../data/Students";
import { useState } from "react";
import Modal from "../components/Modal";

const Home = () => {
  const [modalContent, setModalContent] = useState([]);
  const [modalToggle, setModalToggle] = useState(false);
  const changeContent = (e) => {
    setModalContent([e]);
    setModalToggle(!modalToggle);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <main className="flex flex-row flex-wrap px-10 mx-auto">
        <div className="basis-full">
          <input
            type="text"
            placeholder="cari nama"
            className="md:w-[500px] h-[52px] border-[1px] rounded-md p-4 my-6 lg:my-12 border-gray-500"
          />
        </div>
        {Students.map((e, i) => {
          return (
            <Card
              key={i}
              id={e.id}
              ipk={e.ipk}
              firstName={e.firstName}
              lastName={e.lastName}
              desc={e.desc}
              changeContent={changeContent}
              e={e}
            />
          );
        })}
        {modalToggle && (
          <Modal 
          changeContent={changeContent}
          modalContent={modalContent}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
