namespace Template {
    export async function Items(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene starting");
        document.getElementById("speechBox").setAttribute("style", "display: block;");


        let text = {
            Ylva: {
                T0001: "Hier bitte. Ist das genug?",
                T0002: "Mein einziger Privatbesitz. Sind wir jetzt frei?",
            },

            Maddox: {
                T0001: "Wo hast du diese Stücke her?",
                T0002: "Geht. Geht mir aus den Augen und kommt nie wieder zurück!"


            }
        };
        ƒS.Sound.fade(sound.Sinister, 0.1, 2, true);
        await ƒS.Location.show(locations.office);
        await ƒS.Character.show(characters.maddox, characters.maddox.pose.thinking, ƒS.positionPercent(50, 100));
        await ƒS.Character.show(characters.riaz, characters.riaz.pose.normal, ƒS.positionPercent(100, 100));
        await ƒS.Character.show(characters.ylva, characters.ylva.pose.nails, ƒS.positionPercent(3, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
        await ƒS.Speech.tell(characters.maddox, text.Maddox.T0001);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0002);
        await ƒS.Character.hide(characters.maddox);
        await ƒS.Character.show(characters.maddox, characters.maddox.pose.go, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.maddox, text.Maddox.T0002);

        ƒS.Speech.hide();
        ƒS.Character.hide(characters.ylva);
        ƒS.Character.hide(characters.riaz);
        await ƒS.update(2);
        ƒS.Character.hide(characters.maddox);
        ƒS.Sound.fade(sound.Sinister, 0, 1);
        await ƒS.update();
        return HappyEnd();


    }
}