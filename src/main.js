import "reveal.js/dist/reveal.css";
import "reveal.js/dist/reset.css";
import "reveal.js/dist/theme/moon.css";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

// let deck = new Reveal({
//   plugins: [Markdown],
// });
// deck.initialize();
const slider = document.getElementById("slider-group");
console.log(slider);
const baseUrl = "https://picsum.photos/v2/list";
getImagesForSlideShow();
async function getImagesForSlideShow() {
  try {
    const result = await fetch(baseUrl);
    console.log(result);
    console.log("coming here");
    if (!result.ok) {
      throw new Error("Error in fetching data" + result.status);
    }
    const images = await result.json();
    processImages(images);
  } catch (error) {
    console.log("Error occurred" + error);
  }
}
function processImages(images) {
  console.log(images);
  images.forEach((image) => {
    const section1 = document.createElement("section");
    const imageDoc = document.createElement("img");
    imageDoc.src = image.download_url;
    imageDoc.style.width = "70vw"; // 60% of viewport width
    imageDoc.style.height = "70vh";
    section1.append(imageDoc);
    slider.append(section1);
  });
  Reveal.initialize({
    plugins: [Markdown],
  });
}
