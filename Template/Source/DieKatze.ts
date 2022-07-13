namespace Template {
  export async function DieKatze(): ƒS.SceneReturn {
    console.log("FudgeStory Scene starting");




    let text = {
      Ylva: {
        T0001: "Da siehst du mal. Ich hab zwar ein verkümmertes Herz aber so verkümmert auch wieder nicht. ",
        T0002: "Ich schiebe nur gelegentlich 	Menschenhass.",
        T0003: "Nein. Noch mag ich dich, ruhe dich aber nicht darauf aus. Bemühen musst du dich trotzdem um mich. Irgendwie gefällt es mir, von dir erobert zu werden. ",
      },
      Riaz: {
        T0001: "Ich wusste gar nicht, dass du ein Herz für Tiere hast.",
        T0002: "Na dann hoffe ich mal, dass ich nicht in den Genuss deines Menschenhasses komme. ",
        T0003: "Du hast wohl das Herz der Katze erobert, nachdem du sie vom Baum gerettet hast. Und das Herz der alten Dame gleich mit. ",
        T0004: "Die Haarklammer, die sie dir als Dankeschön gegeben hat, ist wirklich wunderschön. ",

      }
    };




    ƒS.Sound.fade(sound.Glass, 0.1, 2, true);
    ƒS.Sound.setMasterVolume(0.1);
    ƒS.Sound.play(sound.Birds, 10, true);
    ƒS.Sound.play(sound.Water, 10, true);

    await ƒS.Location.show(locations.place);
    await ƒS.update(transitions.correct.duration, transitions.correct.alpha, transitions.correct.edge);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.sittwo, ƒS.positionPercent(80, 92));
    await ƒS.update(1);
    document.getElementById("speechBox").setAttribute("style", "display: block;");
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0001);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.sittwo, ƒS.positionPercent(38, 89));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.sittwotalk, ƒS.positionPercent(38, 89));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0002);
    ƒS.Sound.play(sound.Woodpecker, 10, false);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0002);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.sittwotalk, ƒS.positionPercent(38, 89));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0003);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0003);
    await ƒS.Character.hide(characters.riaz);
    await ƒS.Character.show(characters.Items, characters.Items.pose.Haarklammer, ƒS.positionPercent(57, 64));
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.sittwoitem, ƒS.positionPercent(80, 92));
    await ƒS.update();
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0004);
    ƒS.Inventory.add(items.haarklammer);
    await ƒS.Character.animate(characters.Items, characters.Items.pose.Haarklammer, moveHaarklammer());
    await ƒS.Character.hide(characters.Items);
    await ƒS.update();
    ƒS.Sound.play(sound.Woodpecker, 10, false);
    await ƒS.Character.hide(characters.riaz);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.sittwo, ƒS.positionPercent(80, 92));
    await ƒS.update();
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.sittwo, ƒS.positionPercent(38, 89));
    await ƒS.update();





    ƒS.Sound.fade(sound.Glass, 0, 1);
    ƒS.Sound.fade(sound.Birds, 0, 0);
    ƒS.Sound.fade(sound.Water, 0, 1);
    ƒS.Sound.fade(sound.Woodpecker, 0, 1);
    await ƒS.update();

    return UnsereZukunft();
  }

}