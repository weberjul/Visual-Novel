namespace Template {
    export async function LastScene(): ƒS.SceneReturn {
        console.log("FudgeStory Scene starting");




        ƒS.Sound.fade(sound.WakeUp, 0.1, 2, true);
        ƒS.Sound.setMasterVolume(0.1);



        await ƒS.Location.show(locations.future);
        await ƒS.update(transitions.correct.duration, transitions.correct.alpha, transitions.correct.edge);
        await ƒS.Character.show(characters.riaz, characters.riaz.pose.last, ƒS.positionPercent(60, 95));
        await ƒS.Character.show(characters.ylva, characters.ylva.pose.last, ƒS.positionPercent(15, 95));
        await ƒS.Character.show(characters.cat, characters.cat.pose.last, ƒS.positionPercent(40, 80));
        await ƒS.update(1);








    }

}