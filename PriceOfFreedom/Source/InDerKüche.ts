namespace Template {
  export async function InDerKüche(): ƒS.SceneReturn {
    console.log("FudgeStory Scene starting");


    let text = {
      Ylva: {
        T0001: "Psst, quatsch nicht so viel.",
        T0002: "An die Arbeit!"

      },
      Riaz: {
        T0001: "Super wir sind drin, das war ja einfach."


      }
    };
    ƒS.Sound.fade(sound.Mission, 0.1, 2, true);
    ƒS.Sound.play(sound.Door, 1, false);
    await ƒS.Location.show(locations.kitchen);
    await ƒS.update(transitions.normal.duration, transitions.normal.alpha, transitions.normal.edge);
    await ƒS.update();
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.normal, ƒS.positionPercent(100, 100));
    await ƒS.update(1);
    document.getElementById("speechBox").setAttribute("style", "display: block;");
    ƒS.Sound.play(sound.Psst, 1, false);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0001);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.psst, ƒS.positionPercent(3, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.pointing, ƒS.positionPercent(3, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0002);


    ƒS.Speech.hide();
    ƒS.Character.hide(characters.ylva);
    ƒS.Character.hide(characters.riaz);
    await ƒS.update(1);
    ƒS.Sound.fade(sound.Mission, 0, 1);
    await ƒS.update();

    return Boss();


  }
}