namespace Template {
  export async function DerPreis(): ƒS.SceneReturn {
    console.log("FudgeStory starting");


    let text = {
      Ylva: {
        T0001: "Es ist kein Scherz Maddox.",
        T0002: "Es fällt mir wirklich auch schwer. Aber es wird Zeit, dass ich mir was eigenes aufbaue.",
        T0003: "Zusammen mit Riaz.",
        T0004: "Ich muss das tun!",
        T0005: "Ich weiß. Nenne mir den Preis und ich werde ihn bezahlen. "

      },
      Riaz: {
        T0001: "Wir möchten die Raccoons verlassen. Sir."

      },
      Maddox: {
        T0001: "Was gibt´s denn?",
        T0002: "Guter Scherz.",
        T0003: "Also was gibt´s denn wirklich?",
        T0004: "Gar nichts musst du!",
        T0005: "Das einzige was ein Mensch irgendwann mal muss, ist sterben. ",
        T0006: "Soso, so dankst du mir also all die Jahre meiner Aufopferung für dich. Deine Verpflegung. Deine Ausbildung. Du schuldest mir sehr viel.",
        T0007: "Ich glaube kaum, dass du genug hast, um dir deine Freiheit zu erkaufen. Aber ich hätte da eine Idee!",
        T0008: "Es gibt da ein Gerücht um einen sehr gewagten aber sehr vielversprechenden Raubüberfall.",
        T0009: "Er sei waghalsig und grenzt an lebensmüde.",
        T0010: "Aber es dürfte genug für uns alle rausspringen. Und du kannst die Raccoons verlassen. "



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
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.laugh, ƒS.positionPercent(50, 100));
    ƒS.Sound.play(sound.Laugh, 1, false);
    await ƒS.update(1);
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.normal, ƒS.positionPercent(50, 100));
    await ƒS.update();
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.normal, ƒS.positionPercent(100, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0001);
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0002);
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.laugh, ƒS.positionPercent(50, 100));
    ƒS.Sound.play(sound.Laugh, 1, false);
    await ƒS.update(1);
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.normal, ƒS.positionPercent(50, 100));
    await ƒS.update();
    await ƒS.Character.hide(characters.riaz);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.sad, ƒS.positionPercent(100, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0003);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.nails, ƒS.positionPercent(3, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0002);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0003);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0004);
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.angry, ƒS.positionPercent(50, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0004);
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0005);
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0006);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0005);
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.thinking, ƒS.positionPercent(50, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0007);
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0008);
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0009);
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.laugh, ƒS.positionPercent(50, 100));
    ƒS.Sound.play(sound.Laugh, 1, false);
    await ƒS.update(1);
    await ƒS.Character.hide(characters.maddox);
    await ƒS.Character.show(characters.maddox, characters.maddox.pose.thinking, ƒS.positionPercent(50, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.maddox, text.Maddox.T0010);

    if (ƒS.Inventory.getAmount(items.schatulle) && ƒS.Inventory.getAmount(items.armband) && ƒS.Inventory.getAmount(items.haarklammer)) {

      ƒS.Speech.hide();
      ƒS.Character.hide(characters.ylva);
      ƒS.Character.hide(characters.riaz);
      ƒS.Character.hide(characters.maddox);


      ƒS.Sound.fade(sound.Sinister, 0, 1);
      await ƒS.update();
      return Items();
    }
    else {
        ƒS.Text.setClass("novelPage"); 
        ƒS.Text.print("Du hast nicht genug Items um dich frei zu kaufen");
      await ƒS.Speech.tell(characters.ylva, "Ich besitze nicht genug Wertgegenstände...");
      ƒS.Character.hide(characters.ylva);
      ƒS.Character.hide(characters.riaz);
      ƒS.Character.hide(characters.maddox);
      ƒS.Speech.hide();
      ƒS.Sound.fade(sound.Sinister, 0, 1);
      await ƒS.update();

      return DieLetzteMission();
    }





  }
}