import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const delay = parseInt(form.elements["delay"].value);

    // Отримуємо обране значення радіокнопки state
    const state = form.elements["state"].value;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
          resolve(delay);
        } else if (state === "rejected") {
          reject(delay);
        }
        }, delay)
    }).then(delay => {
        iziToast.success({
          
          message: `Fulfilled promise in ${delay}ms`,
          position: 'topRight'
        });
    }).catch(delay => {
          iziToast.error({
          
          message: `Rejected promise in ${delay}ms`,
          position: 'topRight'
        })})
})