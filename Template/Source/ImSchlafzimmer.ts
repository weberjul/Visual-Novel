namespace Template {
  export async function ImSchlafzimmer(): ƒS.SceneReturn {
    console.log("FudgeStory Scene starting");


    let text = {
      Ylva: {
        T0001: "Ja was denkst du denn. Die einzige hier anwesende Person schläft im Erdgeschoss. Wir sind durch die Dachluke geklettert, ergo sind wir im obersten Stock du Genie.",
        T0002: "Wir sollten uns auch hier ein bisschen umsehen, man weiß nie was sonst noch so für Schätze rumliegen.",
        T0003: "Oh sehr schön, ein Schmuckkästchen."

      },
      Riaz: {
        T0001: "Super wir sind drin, das war ja einfach.",
        T0002: "...",
        T0003: "Klingt gut, schau mal da hinten, da glitzert was. "



      }
    };
    ƒS.Sound.fade(sound.Mission, 0.1, 2, true);
    ƒS.Sound.play(sound.Window, 1, false);
    await ƒS.Location.show(locations.bedroom);
    await ƒS.update(transitions.correct.duration, transitions.correct.alpha, transitions.correct.edge);
    await ƒS.update();
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.normal, ƒS.positionPercent(100, 100));
    await ƒS.update(1);
    document.getElementById("speechBox").setAttribute("style", "display: block;");
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0001);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.hips, ƒS.positionPercent(3, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
    await ƒS.Character.hide(characters.riaz);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.sad, ƒS.positionPercent(100, 100));
    await ƒS.update();
    await ƒS.Speech.clear()
    await ƒS.update(3);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0002);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.handup, ƒS.positionPercent(3, 100));
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