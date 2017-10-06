import { video as videofile } from './video';
import * as utils from './commonUtils';

export default canAutoplay;

const canAutoplay = () =>
  new Promise((resolve, reject) => {
    let supportsAutoplay;

    // const cleanUp = video => document.body.removeChild(video);

    const afterPlay = (resolution) => video => () => {
      utils.cleanUp(video);
      resolve(resolution);
    }

    const successPlay = afterPlay(true);
    const failPlay = afterPlay(false);

    try {
      let video = document.createElement("video");
      video.autoplay = true;
      video.inline = true;
      video.src = videofile;
      video.load();
      video.style.display = "none";
      video.playing = false;
      video.volume = 0.001;
      video.controls = true;

      document.body.appendChild(video);

      video
        .play()
        .then(successPlay(video))
        .catch(failPlay(video));
    } catch (err) {
      reject(false);
    }
  });

