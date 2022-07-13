namespace Template {
  export async function Boss(): ƒS.SceneReturn {
    console.log("FudgeStory Scene starting");


    let text = {
      Ylva: {
        T0001: "Natürlich Boss, ich enttäusche dich doch nie",

      },
      Riaz: {
        T0001: "Vielen Dank Sir."


      },
      Maddox: {
        T0001: "Ihr wart also erfolgreich.",
        T0002: "Sehr gut.",
        T0003: "Von dir habe ich auch nichts anderes erwartet Ylva.",
        T0004: "Riaz du darfst vorerst noch bleiben.",
        T0005: "Ylva lernt dich ein, sie ist die Beste.",
        T0006: "Ihr dürft gehn."



      }
    };
    ƒS.Sound.fade(sound.Sinister, 0.1, 2, true);
    ƒS.Sound.play(sound.Door, 1, false);
    await ƒS.Location.show(locations.office);
    await ƒS.update(transitions.normal.duration, transitions.normal.alpha, transitions.normal.edge);
    await ƒS.update();
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.normal, ƒS.positionPercent(50, 100));
    await ƒS.update();
    document.getElementById("speechBox").setAttribute("style", "display: block;");
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0001);
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0002);
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.laugh, ƒS.positionPercent(50, 100));
    ƒS.Sound.play(sound.Laugh, 1, false);
    await ƒS.update(1);
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.normal, ƒS.positionPercent(50, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0003);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.hips, ƒS.positionPercent(3, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
    await ƒS.update();
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0004);
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.laugh, ƒS.positionPercent(50, 100));
    ƒS.Sound.play(sound.Laugh, 1, false);
    await ƒS.update(1);
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.normal, ƒS.positionPercent(50, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0005);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.normal, ƒS.positionPercent(100, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0001);
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.go, ƒS.positionPercent(50, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0006);
    ƒS.Speech.hide();
    ƒS.Character.hide(characters.ylva);
    ƒS.Character.hide(characters.riaz);
    await ƒS.update(2);
    ƒS.Character.hide(characters.maddox);
    ƒS.Sound.fade(sound.Sinister, 0, 1);
    await ƒS.update();

    return Lagebesprechung();

  }
}