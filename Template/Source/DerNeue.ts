namespace Template {
  export async function DerNeue(): ƒS.SceneReturn {
    console.log("FudgeStory Scene starting");





    let text = {
      Ylva: {
        T0001: "Du bist also der Neue. Riaz richtig? Dein ´Willkommen´ bei den Raccoons musst du dir erst mal noch verdienen!",
        T0002: "Ylva – nicht, dass dus dir merken musst. Du bist sowieso nicht lange hier. Ich bin hier die rechte Hand. Der Boss will dass ich dich zu unserer nächsten Mission mitnehme. Du stellst dich besser gut an.",
        T0003: "Die Details erfährst du auf dem Weg und jetzt komm, wir müssen los!"
      },
      Riaz: {
        T0001: "Hi ähm ja Riaz. Du bist?",
        T0002: "Ich stehle nicht zum ersten Mal, ich kann das schon! Um was geht es denn in der Mission?"

      }
    };
    ƒS.Sound.fade(sound.AFool, 0.1, 2, true);
    ƒS.Sound.setMasterVolume(0.1);
    await ƒS.Location.show(locations.shelter);
    await ƒS.update(transitions.time.duration, transitions.time.alpha, transitions.time.edge);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.normal, ƒS.positionPercent(3, 100));
    await ƒS.update(1);
    document.getElementById("speechBox").setAttribute("style", "display: block;");
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.greeting, ƒS.positionPercent(100, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0001);
    await ƒS.Character.hide(characters.ylva);
    await ƒS.Character.show(characters.ylva, characters.ylva.pose.handup, ƒS.positionPercent(3, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0002);
    await ƒS.Character.hide(characters.riaz);
    await ƒS.Character.show(characters.riaz, characters.riaz.pose.sad, ƒS.positionPercent(100, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.riaz, text.Riaz.T0002);
    await ƒS.Speech.tell(characters.ylva, text.Ylva.T0003);

    ƒS.Speech.hide();
    ƒS.Character.hide(characters.ylva);
    ƒS.Character.hide(characters.riaz);
    await ƒS.update(1);

    return DieErsteMission();
  }

}