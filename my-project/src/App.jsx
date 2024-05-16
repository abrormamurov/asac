function App() {
  return (
    <div className="mockup-phone justify-center ">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <span className="countdown pb-72 font-mono text-2xl">
            <span style={{ "--value": 1 }}></span>:
            <span style={{ "--value": 14 }}></span>
          </span>
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Mashini bosin opam 👈🏼
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Salom opam!</h3>
              <p className="py-4">
                <b>Tug'ilgan kuniz bn</b> 👨‍👩‍👦‍👦 bahtiga sog bolin yaxshi 🤴🏻
                uchrasin nima niyat qilgan bolsez 👩🏻‍🔬👩🏻‍💼👩🏻‍💻👩🏻‍🏫👩🏻‍🍳👩🏻‍🌾👩🏻‍⚕️🕵🏻🧕🏻👮🏻👷🏻‍♀️👩🏻‍⚖️
                amalga oshsin xayotda ishlariz doino 👍🤚 bolsin 🕋 safarlariga
                borish nasib qilsin. Doimo soq omon bulin 🎉🎂
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <img src="./assets/photo_2024-05-16_23-44-33.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
