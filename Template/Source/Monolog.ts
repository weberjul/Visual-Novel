namespace Template {
    export async function Monolog(): ƒS.SceneReturn {
        console.log("FudgeStory Scene starting");





        let text = {
            Ylva: {
                T0000: "Riaz.",
                T0001: "Hm ich weiß noch nicht so recht, was ich von ihm halten soll. Ich glaube ich hab zu vorschnell geurteilt. Er scheint gar nicht so schlecht zu sein in dem was er tut. Und irgendwie ist er auch ganz attraktiv. Vor allem diese grünen Augen...",
                T0002: "Halt Stopp. Nein.",
                T0003: "Ich muss mich auf mich selbst konzentrieren. Ich kann es mir nicht leisten abgelenkt zu werden. Maddox erwartet das Beste von mir.",
                T0004: "Ausschließlich das Beste!",
                T0005: "Er soll stolz auf mich sein. Wie immer. Da darf mir kein Riaz oder sonst wer einen Strich durch die Rechnung machen.",
                T0006: "...ob er wohl auch eine Vaterfigur in seinem Leben hat? Oder hat er vielleicht noch seine leiblichen Eltern? Aber was macht er dann hier? ",
                T0007: "Seit er hier ist, lässt er mich kaum aus den Augen, selbst bei der Mission hat er mich keine Sekunde alleine gelassen. Als wäre ich ein zerbrechliches Püppchen. Hah dem zeig ich wer hier das Püppchen ist!",
                T0008: "Idiot!",
                T0009: "Oh, da hat jemand wohl ein Armband verloren. Hm, Glück für mich, Pech für sie."

            }
        };




        ƒS.Sound.fade(sound.Glass, 0.1, 2, true);
        ƒS.Sound.setMasterVolume(0.1);
        ƒS.Sound.play(sound.Birds, 10, true);
        ƒS.Sound.play(sound.Water, 10, true);

        await ƒS.Location.show(locations.place);
        await ƒS.update(transitions.correct.duration, transitions.correct.alpha, transitions.correct.edge);
        await ƒS.Character.show(characters.ylva, characters.ylva.pose.sit, ƒS.positionPercent(27, 81));
        await ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0000);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
        ƒS.Sound.play(sound.Woodpecker, 10, false);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0002);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0003);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0004);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0005);
        ƒS.Sound.play(sound.Woodpecker, 10, false);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0006);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0007);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0008);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0009);
        ƒS.Inventory.add(items.armband);



        ƒS.Speech.hide();
        await ƒS.update();
        await ƒS.Character.hide(characters.ylva); 
        await ƒS.update(1);
        ƒS.Sound.fade(sound.Glass, 0, 1);
        ƒS.Sound.fade(sound.Birds, 0, 0);
        ƒS.Sound.fade(sound.Water, 0, 1);
        ƒS.Sound.fade(sound.Woodpecker, 0, 1);
        await ƒS.update();
        
        return ZeitVergeht();
    }

}