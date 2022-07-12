namespace Tutorial_SS22 {
  export async function HowToMakeChoices2(): ƒS.SceneReturn {
    console.log("Let's make some choices!");

    let text = {
      Aisaka: {
        T0000: "Heute wird sich alles um Auswahlmöglichkeiten drehen.",
        T0001: "Schön, dass du dabei warst!"
      }
    };


    // ƒS.Sound.fade(sound.nightclub, 1, 2, true);
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.bedroomAtNight);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    // await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update();
    // ƒS.Character.hide(characters.aisaka);
    // ƒS.Character.hideAll();
    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0000);
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    await ƒS.update(1.5);




    let firstDialogueElementAnswers = {
      iSayOk: "Okay.",
      iSayYes: "Ja.",
      iSayNo: "Nein.",
      iSayBla: "Bla"
    };


    do {
      let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "choicesCSSclass");

      switch (firstDialogueElement) {
        case firstDialogueElementAnswers.iSayOk:
          // continue path here
          console.log(dataForSave.aisakaScore);
          await ƒS.Speech.tell(characters.aisaka, "Okay");
          ƒS.Speech.clear();
          break;
        case firstDialogueElementAnswers.iSayYes:
          // continue path here
          await ƒS.Speech.tell(characters.aisaka, "Ja");
          ƒS.Character.hide(characters.aisaka);
          break;
        case firstDialogueElementAnswers.iSayNo:
          // continue path here
          await ƒS.Speech.tell(characters.aisaka, "Nein");
          ƒS.Speech.clear();
          break;
        case firstDialogueElementAnswers.iSayBla:
          // continue path here
          dataForSave.pickedChoice = true;
          await ƒS.Speech.tell(characters.aisaka, "Bla");
          ƒS.Speech.clear();
          break;
      }
    } while (!dataForSave.pickedChoice);

    if (dataForSave.pickedChoice) {
      return "Good Ending";
    }
  }

}
