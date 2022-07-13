namespace Template {
  export async function Riaz(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");



    await ƒS.Location.show(locations.grave);
    await ƒS.update(transitions.dead.duration, transitions.dead.alpha, transitions.dead.edge);
    await ƒS.update();
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.cry, ƒS.positionPercent(27, 93));
    await ƒS.update();
    ƒS.Sound.fade(sound.Dead, 1, 2, false);





  }
}