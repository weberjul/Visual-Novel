namespace Template {
  export async function Prolog(): ƒS.SceneReturn {
    console.log("FudgeStory Scene starting");




    let text = {
      Narrator: {
        T0001: "Einsamkeit",
        T0002: "das erste Gefühl, das sie kannte.",
        T0003: "Von den Eltern ausgesetzt,",
        T0004: "von Pflegefamilie zu Pflegefamilie,",
        T0005: "von Heim zu Heim. ",
        T0006: "Trauer",
        T0007: "Wut",
        T0008: "Schmerz",
        T0009: "und Hoffnungslosigkeit folgten.",
        T0010: "Sie rannte.",
        T0011: "Rannte weg, von Menschen mit falschen Versprechungen.",
        T0012: "Ylva",
        T0013: "die fortan auf der Straße lebte, stahl und bettelte, um zu überleben.",
        T0014: "Heimlich beobachtet von Maddox, der Boss der Straßenbande Raccoons.",
        T0015: "Beeindruckt von ihrem Geschick und den Fähigkeiten als Diebin, nahm er sie bei sich auf. ",
        T0016: "Seither lebt sie bei den Raccoons.",
        T0017: "Maddox lehrte sie die Kampfkunst, lehrte sie alles was sie fürs Leben braucht.",
        T0018: "Lehrte sie eine Diebin zu sein.",
        T0019: "Die beste Diebin.",
        T0020: "Sie genoss Maddox Wertschätzung und das Ansehen der anderen Bandenmitglieder.",
        T0021: "Niemand konnte ihr ihren hart erarbeiteten Platz streitig machen.",
        T0022: "Es schien alles perfekt.",
        T0023: "Dann",
        T0024: "wurde ein neues Mitglied aufgenommen.",
        T0025: ""

      }
    };

    ƒS.Sound.fade(sound.NeverSurrender, 1, 4, false);

    await ƒS.Character.show(characters.little, characters.little.pose.alone, ƒS.positionPercent(50, 10));
    await ƒS.update();
    await ƒS.Character.animate(characters.little, characters.little.pose.alone, growAnimation());
    document.getElementById("speechBox").setAttribute("style", "display: block;");
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);






    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0025);


    ƒS.update();
    ƒS.Character.show(characters.ylva, characters.ylva.pose.normal, ƒS.positionPercent(0, 93.5));
    ƒS.update(1);
    ƒS.Speech.tell(characters.narrator, text.Narrator.T0025);
    ƒS.Character.hide(characters.ylva);
    ƒS.update(1);
    ƒS.Character.show(characters.ylva, characters.ylva.pose.pointing, ƒS.positionPercent(0, 93.5));
    ƒS.update(1);
    ƒS.Speech.tell(characters.narrator, text.Narrator.T0025);
    ƒS.Character.hide(characters.ylva);
    ƒS.update(1);
    ƒS.Character.show(characters.ylva, characters.ylva.pose.normal, ƒS.positionPercent(0, 93.5));
    ƒS.update(1);
    ƒS.Speech.tell(characters.narrator, text.Narrator.T0025);
    ƒS.Character.hide(characters.ylva);
    ƒS.update(1);
    ƒS.Character.show(characters.ylva, characters.ylva.pose.pointing, ƒS.positionPercent(0, 93.5));
    ƒS.update(1);
    ƒS.Speech.tell(characters.narrator, text.Narrator.T0025);
    ƒS.Character.hide(characters.ylva);
    ƒS.update(1);
    ƒS.Character.show(characters.ylva, characters.ylva.pose.normal, ƒS.positionPercent(0, 93.5));
    ƒS.update(1);
    ƒS.Speech.tell(characters.narrator, text.Narrator.T0025);
    ƒS.Character.hide(characters.ylva);
    ƒS.update(1);




    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);





    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0012);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0014);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0015);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0016);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0017);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0018);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0019);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0020);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0021);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0022);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0023);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0024);
    ƒS.Sound.fade(sound.NeverSurrender, 0, 1);
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update();

    return DerNeue();












  }
}