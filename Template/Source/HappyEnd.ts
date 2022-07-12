namespace Template {
    export async function HappyEnd(): ƒS.SceneReturn {
        console.log("FudgeStory Scene starting");




        let text = {
            Ylva: {
                T0001: "Gemeinsam.",
                T0002: "Hah in dem Fall sind wir jetzt wohl schon zu dritt.",
                T0003: "Hm wie wärs mit...?",

            },
            Riaz: {
                T0001: "Jetzt schlagen wir ein neues Kapitel auf.",
                T0002: "Gemeinsam.",
                T0003: "Oh, die Katze, die du gerettet hast. Was macht die denn hier?.",
                T0004: "Scheint so. Dachte nicht, dass das so schnell geht.",
                T0005: "Sie braucht noch einen Namen.",
                T0006: "Der ist super."

            },
            Katze: {
                T0001: "Miau",
                T0002: "Miauuu",
            }
        };




        ƒS.Sound.fade(sound.Love, 0.1, 2, true);
        ƒS.Sound.setMasterVolume(0.1);
        ƒS.Sound.play(sound.Birds, 10, true);


        await ƒS.Location.show(locations.future);
        await ƒS.update(transitions.correct.duration, transitions.correct.alpha, transitions.correct.edge);
        await ƒS.Character.show(characters.riaz, characters.riaz.pose.normal, ƒS.positionPercent(100, 100));
        await ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0001);
        await ƒS.Character.show(characters.ylva, characters.ylva.pose.normal, ƒS.positionPercent(3, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
        ƒS.Sound.play(sound.Woodpecker, 10, false);
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0002);

        await ƒS.Character.show(characters.cat, characters.cat.pose.normal, ƒS.positionPercent(45, 75));
        await ƒS.update(1);
        ƒS.Sound.play(sound.Miau, 5, false);
        await ƒS.Speech.tell(characters.cat, text.Katze.T0001);
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0003);
        await ƒS.Character.hide(characters.ylva);
        await ƒS.Character.show(characters.ylva, characters.ylva.pose.laugh, ƒS.positionPercent(3, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0002);
        ƒS.Sound.play(sound.Purr, 5, false);
        await ƒS.Character.hide(characters.riaz);
        await ƒS.Character.show(characters.riaz, characters.riaz.pose.laugh, ƒS.positionPercent(100, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0004);
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0005);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0003);

        await ƒS.Speech.tell(null, "Wie soll die Katze heißen?");
        dataForSave.Katze.name = await ƒS.Speech.getInput();
        console.log(dataForSave.Katze.name);
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0006);
        ƒS.Sound.play(sound.Miau, 2, false);
        await ƒS.Speech.tell(dataForSave.Katze, text.Katze.T0002);
        ƒS.Sound.play(sound.Woodpecker, 10, false);






        ƒS.Speech.hide();
        await ƒS.Character.hide(characters.ylva);
        await ƒS.Character.hide(characters.riaz);
        await ƒS.Character.hide(characters.cat);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.Love, 0, 1);
        ƒS.Sound.fade(sound.Birds, 0, 0);
        await ƒS.update();

        return LastScene();
    }

}