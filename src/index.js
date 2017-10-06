import videofile from './video';

export const canAutoplay = () => new Promise((resolve, reject) => {
  let supportsAutoplay;
    
  const cleanUp = video => document.body.removeChild(video);
    
  const successPlay = video => () => {
    cleanUp(video);
    resolve(true);        
  };

  const failPlay = video => () => {
    cleanUp(video);
    resolve(false);
  };
    
  try {
    let video = document.createElement('video');
    video.autoplay = true;
    video.inline = true;
    video.src = videofile;
    video.load();
    video.style.display = 'none';
    video.playing = false;
    video.volume = 0.001;
    video.controls = true;

    document.body.appendChild(video);

    video.play()
      .then(successPlay(video))
      .catch(failPlay(video));
  } catch (err) {
    console.log('opps, something went wrong');
    reject(false);
  }
 });

//canAutoplay().then(supported => {
//  console.log('Can it autoplay?', supported);  
//})
