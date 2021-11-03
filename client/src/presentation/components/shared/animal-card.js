import getAnimalPrincipalPicture from "../../../business-logic/get-animal-principal-picture.js";
import { b64toBlob } from "../../../business-logic/base-to-blob.js";

export const animalCard = (animal) => {
  const { type, breed, gender, character, dateBirth, pictures, location } =
    animal;
  // create card
  const card = document.createElement("div");
  card.className = "animal-card";
  // create photo div
  const photo = document.createElement("div");
  photo.className = "card-photo";
  const img = document.createElement("img");
  // looks for principal picture
  const picture = getAnimalPrincipalPicture(pictures);
  const blob = b64toBlob(picture.picture.data, picture.picture.contentType);
  const url = URL.createObjectURL(blob);
  img.src = url;
  photo.appendChild(img);
  // create info div
  const info = document.createElement("div");
  info.className = "card-info";
  info.innerHTML = `
  Name: <span> ${animal.name} </span> <br>
  Type: <span> ${type} </span> <br>
  Breed: <span> ${breed} </span> <br>
  Gender: <span> ${gender}</span><br>
  Character: <span>${character}</span><br>
  Date of Birth: <span> ${dateBirth} </span><br>
  Location: <span> ${location}</span> <br>
  `;
  // append div
  card.appendChild(photo);
  card.appendChild(info);
  return card;
};
