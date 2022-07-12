namespace Template {
  export async function JemandBrauchtHilfe(): ƒS.SceneReturn {
    console.log("FudgeStory Scene starting");





    let text = {
      Ylva: {
        T0000: "Wir sind gemeinsam eben ein unschlagbares Team.",
        T0001: "Wobei ich ohne Zweifel auch alleine erfolgreich gewesen wäre.",
        T0002: "Muss ich mir das jetzt ein Leben lang anhören? Mir ist nur einmal ein Fehler unterlaufen! ",
        T0003: "Und du warst der Grund warum ich abgelenkt war.",
        T0004: "Ja du, du musstest ja schließlich deine Maddox Imitation zum besten geben...",
        T0005: "Ja da schreit jemand um Hilfe!"
      },
      Riaz: {
        T0001: "Schon wieder ein Auftrag erfolgreich erledigt. Tja das wäre dann der 5. diese Woche.",
        T0002: "Hm ja ist klar.",
        T0003: "Und wer gibt dir dann Rückendeckung, wenn du mal wieder vergisst die Kellerräume zu checken?",
        T0004: "Denk an den Vorfall mit dem Krokodil!",
        T0005: "Ich?",
        T0006: "Und die war zum schießen. Das weißt du ganz genau!",
        T0007: "Hey sag mal, hörst du das?",

      }
    };
    ƒS.Sound.fade(sound.CosmicDrift, 0.1, 2, true);
    ƒS.Sound.setMasterVolume(0.1);
    ƒS.Sound.play(sound.Wind, 1, true);
    ƒS.Sound.play(sound.Car, 2, true);
    ƒS.Sound.play(sound.Birds, 10, true);
    await ƒS.Location.show(locations.street);
    await ƒS.update(transitions.normal.duration, transitions.normal.alpha, transitions.normal.edge);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.normal, ƒS.positionPercent(100, 100));
    await ƒS.update(1);
    document.getElementById("speechBox").setAttribute("style", "display: block;");
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0001);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.hips, ƒS.positionPercent(3, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0000);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.handup, ƒS.positionPercent(3, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0002);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0003);
    await ƒS.Character.hide(characters.riaz);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.laugh, ƒS.positionPercent(100, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0004);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.idiot, ƒS.positionPercent(3, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0002);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0003);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0005);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.laugh, ƒS.positionPercent(3, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0004);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0006);
    await ƒS.Character.hide(characters.riaz);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.normal, ƒS.positionPercent(100, 100));
    await ƒS.update();
    ƒS.Sound.play(sound.Hilfe, 0.1, false);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0007);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.normal, ƒS.positionPercent(3, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0005);


    let getHelpAnswer = {
      iSayHelfen: "helfen",
      iSaynichtHelfen: "nicht helfen"
    };

    let getHelp = await ƒS.Menu.getInput(getHelpAnswer, "choices");
    switch (getHelp) {
      case getHelpAnswer.iSayHelfen:
        await ƒS.Speech.tell(characters.ylva, "Lass uns mal nachsehen.");
        ƒS.Character.hide(characters.ylva);
        ƒS.Character.hide(characters.riaz);
        await ƒS.update(1);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(sound.CosmicDrift, 0, 1);
        ƒS.Sound.fade(sound.Birds, 0, 0);
        ƒS.Sound.fade(sound.Car, 0, 0);
        ƒS.Sound.fade(sound.Wind, 0, 0);
        await ƒS.update();
        return DieKatze();

        break;
      case getHelpAnswer.iSaynichtHelfen:
        await ƒS.Speech.tell(characters.ylva, "Komm wir gehen weiter, da ist bestimmt nichts.");
        ƒS.Character.hide(characters.ylva);
        ƒS.Character.hide(characters.riaz);
        await ƒS.update(1);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(sound.CosmicDrift, 0, 1);
        ƒS.Sound.fade(sound.Birds, 0, 0);
        ƒS.Sound.fade(sound.Car, 0, 0);
        ƒS.Sound.fade(sound.Wind, 0, 0);
        await ƒS.update();
        return UnsereZukunft();

        break;
    }
    return DieErsteMission();
  }

}