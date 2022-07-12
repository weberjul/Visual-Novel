namespace Template {
  export async function DieErsteMission(): ƒS.SceneReturn {
    console.log("FudgeStory Scene starting");




    let text = {
      Ylva: {
        T0001: "Das dritte Haus von rechts ist unser Zielobjekt. Im 1. Stock befindet sich  laut den Informanten das Bargeld des Hausherren.",
        T0002: "Ein Neunmalkluger. Aber immerhin zeigst du, dass du doch ein bisschen Ahnung hast.",
        T0003: "Punkt für dich.",
        T0004: "Ich beschattete das Haus die letzten Tage, aktuell ist nur jemand im Erdgeschoss, und die Person schläft. Sollte also kein Problem sein.",
        T0005: "Für uns gibt es zwei mögliche Eingänge.",
        T0006: "Durch den Hintereingang, da landen wir in der Küche",
        T0007: "oder durch die Dachluke, dort enden wir im Schlafzimmer."

      },
      Riaz: {
        T0001: "Wurde das Haus schon beschattet? Wie viel Menschen wohnen dort? Wie sind deren Tagesabläufe? Wie viele Eingänge gibt es? Irgenswelche Fluchtmöglichkeiten?",
        T0002: "Soweit ich das von hier aus beurteilen kann, haben wir bei beiden Optionen gute Fluchtmöglichkeiten.",
        T0003: "Du bist die Expertin: Hintereingang oder Dachluke?"
      }
    };

    await ƒS.Location.show(locations.missionone);
    ƒS.Sound.play(sound.Wind, 1, true);
    ƒS.Sound.play(sound.Car, 2, true);
    ƒS.Sound.play(sound.Birds, 10, true);
    await ƒS.update(transitions.normal.duration, transitions.normal.alpha, transitions.normal.edge);
    await ƒS.update();
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.pointing, ƒS.positionPercent(0, 93.5));
    await ƒS.update(1);
    document.getElementById("speechBox").setAttribute("style", "display: block;");
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.normal, ƒS.positionPercent(100, 93.5));
    await ƒS.update(1);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.normal, ƒS.positionPercent(0, 93.5));
    await ƒS.update();
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0001);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0002);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.hips, ƒS.positionPercent(0, 93.5));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0003);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0004);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.normal, ƒS.positionPercent(0, 93.5));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0005);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0006);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0007);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0002);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0003);
    await ƒS.update();

    let missionOneAnswer = {
      iSayDachluke: "Dachluke",
      iSayHintereingang: "Hintereingang"
    };

    let missionOne = await ƒS.Menu.getInput(missionOneAnswer, "choices");

    switch (missionOne) {
      case missionOneAnswer.iSayDachluke:
        await ƒS.Speech.tell(characters.ylva, "Lass uns durch die Dachluke rein. Wir sind eh schon auf den Dächern.");
        await ƒS.Speech.tell(characters.riaz, "Na dann, auf geht´s.");
        ƒS.Character.hide(characters.ylva);
        await ƒS.update(1);
        ƒS.Speech.clear();
        await ƒS.Speech.tell(characters.riaz, "Hey warte auf mich!");
        ƒS.Speech.hide();
        ƒS.Character.hide(characters.riaz);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.Birds, 0, 0);
        ƒS.Sound.fade(sound.Car, 0, 0);
        ƒS.Sound.fade(sound.Wind, 0, 0);
        ƒS.Sound.fade(sound.AFool, 0, 0);
        return ImSchlafzimmer();

        break;
      case missionOneAnswer.iSayHintereingang:
        await ƒS.Speech.tell(characters.ylva, "Lass uns durch den Hintereingang gehen.");
        ƒS.Character.hide(characters.ylva);
        await ƒS.update(1);
        ƒS.Speech.clear();
        await ƒS.Speech.tell(characters.riaz, "Hey warte auf mich!");
        ƒS.Speech.hide();
        ƒS.Character.hide(characters.riaz);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.Birds, 0, 0);
        ƒS.Sound.fade(sound.Car, 0, 0);
        ƒS.Sound.fade(sound.Wind, 0, 0);
        ƒS.Sound.fade(sound.AFool, 0, 0);
        return InDerKüche();

        break;
    }
  }
}