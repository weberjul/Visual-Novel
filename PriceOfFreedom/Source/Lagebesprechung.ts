namespace Template {
  export async function Lagebesprechung(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");




    let text = {
      Ylva: {
        T0001: "Du hast dich gar nicht so dumm angestellt, wie du aussiehst.",
        T0002: "Wie dem auch sei...",
        T0003: "Wie das ganze hier so läuft, hab ich dir ja bereits erklärt.",
        T0004: "Hast du denn noch irgendwelche Fragen?",
        T0005: "Das geht dich überhaupt einen Scheißdreck an!",
        T0006: "Schon gut. Es ist nur...naja ich rede nie darüber.",
        T0007: "Maddox hat mich als Kind von der Straße aufgelesen. Ich hatte nichts. Ich schulde ihm mein Leben. ",
        T0008: "Raus hier!",
        T0009: "Hihi, Idiot.",
        T0010: "Geh ich jetzt gleich ins Bett oder besuche noch ich meinen Lieblingsplatz um 	meine Gedanken zu ordnen?"

      },
      Riaz: {
        T0001: "Na vielen Dank auch.",
        T0002: "Und du hast ein ganz schön großes Mundwerk für so wenig Mensch.",
        T0003: "Hm ja. Wie bist du hier eigentlich gelandet? Der Boss hat mich ja vom anderen Clan abgeworben, aber du? ",
        T0004: "Du scheinst hier einen ganz besonderen Stellenwert zu haben. ",
        T0005: "Tut mir leid ich wollte dir nicht zu nahe treten. Ich...",
        T0006: "Hm achso. Ich dachte schon, er wäre dein Vater.",
        T0007: "Hab mich schon gefragt, wie aus sowas wie ihm sowas hübsches wie du entstehen kann. "

      }
    };

    await ƒS.Location.show(locations.shelter);
    ƒS.Sound.fade(sound.CosmicDrift, 0.1, 2, true);
    await ƒS.update(transitions.normal.duration, transitions.normal.alpha, transitions.normal.edge);
    await ƒS.update();
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.handup, ƒS.positionPercent(3, 100));
    await ƒS.update(1);
    document.getElementById("speechBox").setAttribute("style", "display: block;");
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.sad, ƒS.positionPercent(100, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0001);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0002);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.hips, ƒS.positionPercent(3, 100));
    await ƒS.update();

    let lagebesprechungAnswer = {
      iSayHaue: "Vorsicht Freundchen. Gleich gibt’s Haue.",
      iSayOk: "Da heute dein erster Tag ist, lass ichs dir mal durchgehen."
    };

    let lagebesprechung = await ƒS.Menu.getInput(lagebesprechungAnswer, "answers");

    switch (lagebesprechung) {
      case lagebesprechungAnswer.iSayHaue:
        await ƒS.Speech.tell(characters.ylva, "Vorsicht Freundchen. Gleich gibt’s Haue.");
        await ƒS.Character.hide(characters.riaz);
        await ƒS.Character.show(characters.riaz, characters.riaz.pose.laugh, ƒS.positionPercent(100, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.riaz, "Ich glaube das riskiere ich gerne.");
        ƒS.Speech.clear();


        break;
      case lagebesprechungAnswer.iSayOk:
        await ƒS.Speech.tell(characters.ylva, "Da heute dein erster Tag ist, lass ichs dir mal durchgehen.");
        await ƒS.Character.hide(characters.riaz);
        await ƒS.Character.show(characters.riaz, characters.riaz.pose.laugh, ƒS.positionPercent(100, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.riaz, "Du hast angefangen!");
        ƒS.Speech.clear();





        break;
    }

    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.handup, ƒS.positionPercent(3, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0002);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0003);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0004);
    await ƒS.Character.hide(characters.riaz);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.normal, ƒS.positionPercent(100, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0003);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0004);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.hips, ƒS.positionPercent(3, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0005);
    await ƒS.Character.hide(characters.riaz);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.sad, ƒS.positionPercent(100, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0005);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.normal, ƒS.positionPercent(3, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0006);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0007);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0006);
    await ƒS.Character.hide(characters.riaz);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.laugh, ƒS.positionPercent(100, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0007);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.idiot, ƒS.positionPercent(3, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0008);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0009);
    await ƒS.Character.hide(characters.riaz);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0010);




    let monologAnswer = {
      iSayNachdenken: "Nachdenken",
      iSayBett: "Bett"
    };
    let monolog = await ƒS.Menu.getInput(monologAnswer, "choices");

    switch (monolog) {
      case monologAnswer.iSayNachdenken:
        await ƒS.Speech.tell(characters.ylva, "Ich glaube, ich brauche noch etwas frische Luft!");

        ƒS.Speech.hide();
        ƒS.Character.hide(characters.ylva);

        await ƒS.update(1);
        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.CosmicDrift, 0, 1);
        await ƒS.update();
        await ƒS.Character.hide(characters.ylva);
        await ƒS.update(1);
        ƒS.Speech.hide();

        return Monolog();

        break;
      case monologAnswer.iSayBett:
        await ƒS.Speech.tell(characters.ylva, "Ich bin Hundemüde, ich sollte ins Bett!");
        ƒS.Character.hide(characters.ylva);
        ƒS.Sound.fade(sound.CosmicDrift, 0, 1);
        await ƒS.update(1);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        return ZeitVergeht();



        break;
    }

    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.CosmicDrift, 0, 1);
    await ƒS.update();
    await ƒS.Character.hide(characters.ylva);
    await ƒS.update(1);

  }
}