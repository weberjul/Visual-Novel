namespace Template {
  export async function Dead(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");



    await ƒS.Location.show(locations.grave);
    await ƒS.update(transitions.dead.duration, transitions.dead.alpha, transitions.dead.edge);
    await ƒS.update();
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.grave, ƒS.positionPercent(50, 100));
    await ƒS.update();
    ƒS.Sound.fade(sound.NeverSurrender, 1, 2, false);





  }
}