import Header from "../components/Header";
import Footer from "../components/Footer";

const Form = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="flex flex-col items-center">
        <img
          src={require("../img/form.png")}
          alt="form pic"
          className="mx-auto mt-7"
        />
        <div className="mx-auto my-6">
          <label
            htmlFor="inputFile"
            className="bg-[#C8C8C8]  border-[#C8C8C8] border-y-[10px] border-x-[27px] rounded-lg cursor-pointer"
          >
            Pilih File
          </label>
          <input type="file" id="inputFile" className="hidden" />
        </div>
        <input
          type="text"
          placeholder="nama mahasiswa"
          className="border-[1px] border-[#616161] w-[300px] md:w-[500px] h-[52px] py-4 pl-4 my-2 rounded-md mt-8"
        />
        <input
          type="number"
          placeholder="ipk"
          className="border-[1px] border-[#616161] w-[300px] md:w-[500px] h-[52px] py-4 pl-4 my-2 rounded-md"
        />
        <textarea
          name="biodata"
          id=""
          cols="30"
          rows="10"
          placeholder="biodata"
          className="border-[1px] border-[#616161] w-[300px] md:w-[500px] py-4 pl-4 my-2 rounded-md"
        ></textarea>
        <input
          type="submit"
          className="bg-[#004681]  border-[#004681] border-y-[18px] border-x-[91px] rounded-lg text-white mt-10 cursor-pointer"
          value="SIMPAN"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Form;
