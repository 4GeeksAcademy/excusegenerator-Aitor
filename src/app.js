/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generatorexcuse();
  });
  console.log("Hello Rigo from the console! ");
};

let generatorexcuse = () => {
  let pronoun = ["Mi"];
  let subject = ["amigo ", "hija", "perro", "gato", "novia"];
  let action = ["cogió", "tiró mi", "me robó", "destruyó", "se comió"];
  let possetion = ["mis deberes", "el proyecto", "el coche", "la zapatilla"];
  let where = ["en mi casa", "en el bus", "en la cola de la pastelería"];

  let pronIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let posIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronIndex] +
    " " +
    subject[subjIndex] +
    " " +
    action[actIndex] +
    " " +
    possetion[posIndex] +
    " " +
    where[whereIndex] +
    " "
  );
};
