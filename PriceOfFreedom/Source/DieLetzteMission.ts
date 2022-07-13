namespace Template {
    export async function DieLetzteMission(): ƒS.SceneReturn {
        console.log("FudgeStory Scene starting");





        let text = {
            Ylva: {
                T0001: "Das kannst du getrost vergessen. Ich werde gehen! Dabei bringe ich dich ganz sicher nicht in Gefahr. Schließlich sind das meine Schulden, die bezahlt werden müssen!",

            },
            Riaz: {
                T0001: "Die Mission ist viel zu gefährlich für dich. Ich hab das ganze angezettelt. Ich gehe und zwar allein!",
                T0002: "Spinnst du? Wir stehen das zusammen durch. Dann gehen wir beide!"

            }
        };
        ƒS.Sound.fade(sound.Mission, 0.1, 2, true);
        ƒS.Sound.setMasterVolume(0.1);
        await ƒS.Location.show(locations.shelter);
        await ƒS.update(transitions.fail.duration, transitions.fail.alpha, transitions.fail.edge);
        await ƒS.Character.show(characters.riaz, characters.riaz.pose.normal, ƒS.positionPercent(100, 100));
        await ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0001);
        await ƒS.Character.show(characters.ylva, characters.ylva.pose.idiot, ƒS.positionPercent(3, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ylva, text.Ylva.T0001);
        await ƒS.Speech.tell(characters.riaz, text.Riaz.T0002);

        let lastMissionAnswer = {
            iSayYlva: "Ylva",
            iSayRiaz: "Riaz",
            iSayBeide: "Beide"
        };

        let lastMission = await ƒS.Menu.getInput(lastMissionAnswer, "choices");
        switch (lastMission) {
            case lastMissionAnswer.iSayYlva:
                await ƒS.Character.hide(characters.ylva);
                await ƒS.Character.show(characters.ylva, characters.ylva.pose.normal, ƒS.positionPercent(3, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.ylva, "Ich gehe!");
                ƒS.Character.hide(characters.ylva);
                await ƒS.update(1);


                ƒS.Speech.clear();
                ƒS.Speech.hide();
                await ƒS.update();
                ƒS.Sound.fade(sound.Mission, 0, 1);
                ƒS.Character.hide(characters.riaz);
                return Ylva();

                break;
            case lastMissionAnswer.iSayRiaz:
                await ƒS.Character.hide(characters.ylva);
                await ƒS.Character.show(characters.ylva, characters.ylva.pose.normal, ƒS.positionPercent(3, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.ylva, "Okay du gehst, aber pass auf dich auf!");
                ƒS.Character.hide(characters.riaz);
                await ƒS.update(1);
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                await ƒS.update();
                ƒS.Sound.fade(sound.Mission, 0, 1);
                ƒS.Character.hide(characters.ylva);
                return Riaz();

                break;
            case lastMissionAnswer.iSayBeide:
                await ƒS.Character.hide(characters.ylva);
                await ƒS.Character.show(characters.ylva, characters.ylva.pose.normal, ƒS.positionPercent(3, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.ylva, "Wir gehen zusammen!");
                ƒS.Character.hide(characters.riaz);
                ƒS.Character.hide(characters.ylva);
                await ƒS.update(1);
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                ƒS.Sound.fade(sound.Mission, 0, 1);
                await ƒS.update();
                return Dead();
        }

    }






}

