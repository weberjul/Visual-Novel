namespace Template {
    export async function UnsereZukunft(): ƒS.SceneReturn {
        console.log("FudgeStory Scene starting");




        let text = {
            Ylva: {
                T0001: "Was ist?",
                T0002: "Was?",
                T0003: "Aber Riaz, das hier ist mein Leben. Ich kann doch nicht einfach alles hinter mir lassen. Selbst wenn, ich schulde Maddox noch so viel, er wird ich nicht einfach so gehen lassen. ",

            },
            Riaz: {
                T0001: "...",
                T0002: "Ich will fort mit dir!",
                T0003: "Hör zu. Ich liebe dich, du bist der wichtigste Mensch in meinem Leben. Ich würde alles für dich tun. Ich will ein Leben mit dir gemeinsam. Aber nicht hier. Nicht in Abhängigkeit von den Raccoons. Ohne diese Heimlichtuerei.",
                T0004: "Lass uns fort gehen. Irgendwohin, weg von hier. Lass uns gemeinsam von vorne anfangen. ",
                T0005: "Und du bist mein Leben. Wir gehören zusammen. Wir können doch nicht bis in alle Ewigkeit Raubzüge durchziehen. Lass uns mit Maddox reden. Wir finden schon eine Lösung. Ich bin immer an deiner Seite. Du kannst auf mich zählen."

            }
        };




        ƒS.Sound.fade(sound.Glass, 0.1, 2, true);
        ƒS.Sound.setMasterVolume(0.1);
        ƒS.Sound.play(sound.Birds, 10, true);
        ƒS.Sound.play(sound.Water, 10, true);

        await ƒS.Location.show(locations.place);
        await ƒS.update(transitions.normal.duration, transitions.normal.alpha, transitions.normal.edge);
        await ƒS.Character.show(characters.riaz, characters.riaz.pose.sittwo, ƒS.positionPercent(80, 92));
        await ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0001);
        await ƒS.Character.show(characters.ylva, characters.ylva.pose.sittwo, ƒS.positionPercent(38, 89));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
        ƒS.Sound.play(sound.Woodpecker, 10, false);
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0002);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0002);
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0003);
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0004);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0003);
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0004);
        ƒS.Sound.play(sound.Woodpecker, 10, false);

        let zukunftAnswer = {
            iSaySelbstständig: "Wie sollen wir uns denn selbstständig machen ohne Raubzüge?",
            iSayPreis: "Der Preis für unsere Freiheit wird sehr hoch sein."
        };

        let zukunft = await ƒS.Menu.getInput(zukunftAnswer, "answers");

        switch (zukunft) {
            case zukunftAnswer.iSaySelbstständig:
                await ƒS.Speech.tell(characters.ylva, "Wie sollen wir uns denn selbstständig machen ohne Raubzüge?");
                await ƒS.Speech.tell(characters.riaz, "Wir finden schon ehrliche Arbeit. Ich glaube fest an uns.");
                ƒS.Speech.clear();


                break;
            case zukunftAnswer.iSayPreis:
                await ƒS.Speech.tell(characters.ylva, "Der Preis für unsere Freiheit wird sehr hoch sein.");
                await ƒS.Speech.tell(characters.riaz, "Egal wie hoch er sein wird, wir schaffen das. Gemeinsam.");
                ƒS.Speech.clear();

                break;
        }
        let zukunftzweiAnswer = {
            iSayOK: "Okay, lass es uns versuchen.",
            iSayLove: "Ich liebe dich."
        };
        let zukunftzwei = await ƒS.Menu.getInput(zukunftzweiAnswer, "answers");

        switch (zukunftzwei) {
            case zukunftzweiAnswer.iSayOK:
                await ƒS.Speech.tell(characters.ylva, "Okay, lass es uns versuchen.");
                ƒS.Speech.clear();


                break;
            case zukunftzweiAnswer.iSayLove:
                await ƒS.Speech.tell(characters.ylva, "Ich liebe dich.");
                await ƒS.Speech.tell(characters.riaz, "Ich liebe dich auch.");
                ƒS.Speech.clear();

                break;
        }





        ƒS.Speech.hide();
        await ƒS.Character.hide(characters.ylva);
        await ƒS.Character.hide(characters.riaz);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.Glass, 0, 1);
        ƒS.Sound.fade(sound.Birds, 0, 0);
        ƒS.Sound.fade(sound.Water, 0, 1);
        ƒS.Sound.fade(sound.Glass, 0, 1);
        await ƒS.update();

        return DerPreis();
    }

}