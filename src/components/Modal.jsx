import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ modalContent, changeContent }) => {
  return (
    <div>
      {modalContent.map((e) => {
        return (
          // Modal Container
          <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-11">
            {/* Overlay */}
            <div
              className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-sky-500/[0.6]"
              onClick={changeContent}
            ></div>
            {/* Modal Content */}
            <div className="absolute left-0 right-0 m-auto top-[25%] w-[800px] bg-white rounded-lg flex-col p-8">
              <button
                className="absolute top-1 right-3"
                onClick={changeContent}
              >
                <FontAwesomeIcon icon={faX} />
              </button>
              <div className="flex">
                <img
                  src={require(`../img/${e.id}.png`)}
                  alt={`Person ${e.id}`}
                  className="mx-auto"
                />
                <div className="">
                  <div className="flex-col pl-8">
                    {/* NAMA */}
                    <h1 className="pb-4 text-5xl font-bold">
                      {e.firstName} {e.lastName}
                    </h1>
                    {/* IPK */}
                    <span className="border-8 border-[#004681] bg-[#004681] text-white rounded-md">
                      IPK {e.ipk}
                    </span>
                    {/* Deskripsi */}
                    <p className="pt-7">{e.desc}</p>
                  </div>
                </div>
              </div>
              <hr className="mt-8" />
              <div className="flex w-full text-center place-content-evenly">
                <div className="basis-1/2">
                  <button className="p-6 pb-0 font-semibold text-center text-[#FFC706] text-2xl">
                    Edit
                  </button>
                </div>
                <div className="basis-1/2">
                  <button className="p-6 pb-0 text-center text-[#ACACAC] text-2xl font-semibold">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Modal;
