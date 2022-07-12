namespace Template {
    export async function ZeitVergeht(): ƒS.SceneReturn {
        console.log("FudgeStory Scene starting");




        let text = {
            Narrator: {
                T0001: "Riaz beweist sich weiterhin bei mehreren Missionen zusammen mit Ylva.",
                T0002: "Die beiden schließen einen Raubzug nach dem anderen erfolgreich ab. ",
                T0003: "In der Zeit lernen sie sich besser kennen und bauen Vertrauen zueinander auf.",
                T0004: "Einige Zeit sind sie Freunde, doch beiden wird irgendwann klar, dass sie Gefühle füreinander entwickelt haben.",
                T0005: "Vorerst halten sie das vor den anderen Bandenmitgliedern aber geheim. ",
            }
        };

        ƒS.Sound.fade(sound.Love, 1, 4, true);
        await ƒS.Location.show(locations.nothing);
        await ƒS.update(transitions.time.duration, transitions.time.alpha, transitions.time.edge);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await ƒS.Character.show(characters.riaz, characters.riaz.pose.stand, ƒS.positionPercent(100, 70));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
        await ƒS.Character.show(characters.ylva, characters.ylva.pose.stand, ƒS.positionPercent(3, 70));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
        await ƒS.Character.hide(characters.riaz);
        await ƒS.Character.show(characters.riaz, characters.riaz.pose.happy, ƒS.positionPercent(100, 70));
        await ƒS.Character.hide(characters.ylva);
        await ƒS.Character.show(characters.ylva, characters.ylva.pose.happy, ƒS.positionPercent(3, 70));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
        await ƒS.Character.hide(characters.riaz);
        await ƒS.Character.show(characters.riaz, characters.riaz.pose.hand, ƒS.positionPercent(100, 70));
        await ƒS.Character.hide(characters.ylva);
        await ƒS.Character.show(characters.ylva, characters.ylva.pose.hand, ƒS.positionPercent(3, 70));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
        await ƒS.Character.hide(characters.riaz);
        await ƒS.Character.show(characters.riaz, characters.riaz.pose.hand, ƒS.positionPercent(77.3, 70));
        await ƒS.Character.hide(characters.ylva);
        await ƒS.Character.show(characters.ylva, characters.ylva.pose.hand, ƒS.positionPercent(22.5, 70));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);





        ƒS.Character.hide(characters.ylva);
        ƒS.Character.hide(characters.riaz);
        ƒS.Sound.fade(sound.Love, 0, 1);
        ƒS.Speech.hide();
        await ƒS.update(2);

        return JemandBrauchtHilfe();




    }
}

