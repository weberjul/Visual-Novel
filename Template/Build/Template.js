"use strict";
var Template;
(function (Template) {
    async function Boss() {
        console.log("FudgeStory Scene starting");
        let text = {
            Ylva: {
                T0001: "Natürlich Boss, ich enttäusche dich doch nie",
            },
            Riaz: {
                T0001: "Vielen Dank Sir."
            },
            Maddox: {
                T0001: "Ihr wart also erfolgreich.",
                T0002: "Sehr gut.",
                T0003: "Von dir habe ich auch nichts anderes erwartet Ylva.",
                T0004: "Riaz du darfst vorerst noch bleiben.",
                T0005: "Ylva lernt dich ein, sie ist die Beste.",
                T0006: "Ihr dürft gehn."
            }
        };
        Template.ƒS.Sound.fade(Template.sound.Sinister, 0.1, 2, true);
        Template.ƒS.Sound.play(Template.sound.Door, 1, false);
        await Template.ƒS.Location.show(Template.locations.office);
        await Template.ƒS.update(Template.transitions.normal.duration, Template.transitions.normal.alpha, Template.transitions.normal.edge);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.normal, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0001);
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0002);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.laugh, Template.ƒS.positionPercent(50, 100));
        Template.ƒS.Sound.play(Template.sound.Laugh, 1, false);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.normal, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0003);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.hips, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0004);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.laugh, Template.ƒS.positionPercent(50, 100));
        Template.ƒS.Sound.play(Template.sound.Laugh, 1, false);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.normal, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0005);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.normal, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0001);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.go, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0006);
        Template.ƒS.Speech.hide();
        Template.ƒS.Character.hide(Template.characters.ylva);
        Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.update(2);
        Template.ƒS.Character.hide(Template.characters.maddox);
        Template.ƒS.Sound.fade(Template.sound.Sinister, 0, 1);
        await Template.ƒS.update();
        return Template.Lagebesprechung();
    }
    Template.Boss = Boss;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Dead() {
        console.log("FudgeStory Template Scene starting");
        await Template.ƒS.Location.show(Template.locations.grave);
        await Template.ƒS.update(Template.transitions.dead.duration, Template.transitions.dead.alpha, Template.transitions.dead.edge);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.grave, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        Template.ƒS.Sound.fade(Template.sound.NeverSurrender, 1, 2, false);
    }
    Template.Dead = Dead;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function DerNeue() {
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
        Template.ƒS.Sound.fade(Template.sound.AFool, 0.1, 2, true);
        Template.ƒS.Sound.setMasterVolume(0.1);
        await Template.ƒS.Location.show(Template.locations.shelter);
        await Template.ƒS.update(Template.transitions.time.duration, Template.transitions.time.alpha, Template.transitions.time.edge);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.normal, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.greeting, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0001);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.handup, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0002);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.sad, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0002);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0003);
        Template.ƒS.Speech.hide();
        Template.ƒS.Character.hide(Template.characters.ylva);
        Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.update(1);
        return Template.DieErsteMission();
    }
    Template.DerNeue = DerNeue;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function DerPreis() {
        console.log("FudgeStory starting");
        let text = {
            Ylva: {
                T0001: "Es ist kein Scherz Maddox.",
                T0002: "Es fällt mir wirklich auch schwer. Aber es wird Zeit, dass ich mir was eigenes aufbaue.",
                T0003: "Zusammen mit Riaz.",
                T0004: "Ich muss das tun!",
                T0005: "Ich weiß. Nenne mir den Preis und ich werde ihn bezahlen. "
            },
            Riaz: {
                T0001: "Wir möchten die Raccoons verlassen. Sir."
            },
            Maddox: {
                T0001: "Was gibt´s denn?",
                T0002: "Guter Scherz.",
                T0003: "Also was gibt´s denn wirklich?",
                T0004: "Gar nichts musst du!",
                T0005: "Das einzige was ein Mensch irgendwann mal muss, ist sterben. ",
                T0006: "Soso, so dankst du mir also all die Jahre meiner Aufopferung für dich. Deine Verpflegung. Deine Ausbildung. Du schuldest mir sehr viel.",
                T0007: "Ich glaube kaum, dass du genug hast, um dir deine Freiheit zu erkaufen. Aber ich hätte da eine Idee!",
                T0008: "Es gibt da ein Gerücht um einen sehr gewagten aber sehr vielversprechenden Raubüberfall.",
                T0009: "Er sei waghalsig und grenzt an lebensmüde.",
                T0010: "Aber es dürfte genug für uns alle rausspringen. Und du kannst die Raccoons verlassen. "
            }
        };
        Template.ƒS.Sound.fade(Template.sound.Sinister, 0.1, 2, true);
        Template.ƒS.Sound.play(Template.sound.Door, 1, false);
        await Template.ƒS.Location.show(Template.locations.office);
        await Template.ƒS.update(Template.transitions.normal.duration, Template.transitions.normal.alpha, Template.transitions.normal.edge);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.normal, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0001);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.laugh, Template.ƒS.positionPercent(50, 100));
        Template.ƒS.Sound.play(Template.sound.Laugh, 1, false);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.normal, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.normal, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0001);
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0002);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.laugh, Template.ƒS.positionPercent(50, 100));
        Template.ƒS.Sound.play(Template.sound.Laugh, 1, false);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.normal, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.sad, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0003);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.nails, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0002);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0003);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0004);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.angry, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0004);
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0005);
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0006);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0005);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.thinking, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0007);
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0008);
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0009);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.laugh, Template.ƒS.positionPercent(50, 100));
        Template.ƒS.Sound.play(Template.sound.Laugh, 1, false);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.thinking, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0010);
        if (Template.ƒS.Inventory.getAmount(Template.items.schatulle) && Template.ƒS.Inventory.getAmount(Template.items.armband) && Template.ƒS.Inventory.getAmount(Template.items.haarklammer)) {
            Template.ƒS.Speech.hide();
            Template.ƒS.Character.hide(Template.characters.ylva);
            Template.ƒS.Character.hide(Template.characters.riaz);
            Template.ƒS.Character.hide(Template.characters.maddox);
            Template.ƒS.Sound.fade(Template.sound.Sinister, 0, 1);
            await Template.ƒS.update();
            return Template.Items();
        }
        else {
            await Template.ƒS.Inventory.open();
            await Template.ƒS.Speech.tell(Template.characters.ylva, "Ich besitze nicht genug Wertgegenstände...");
            Template.ƒS.Character.hide(Template.characters.ylva);
            Template.ƒS.Character.hide(Template.characters.riaz);
            Template.ƒS.Character.hide(Template.characters.maddox);
            Template.ƒS.Speech.hide();
            Template.ƒS.Sound.fade(Template.sound.Sinister, 0, 1);
            await Template.ƒS.update();
            return Template.DieLetzteMission();
        }
    }
    Template.DerPreis = DerPreis;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function DieErsteMission() {
        console.log("FudgeStory Scene starting");
        let text = {
            Ylva: {
                T0001: "Das dritte Haus von rechts ist unser Zielobjekt. Im 1. Stock befindet sich  laut den Informanten das Bargeld des Hausherren.",
                T0002: "Ein Neunmalkluger. Aber immerhin zeigst du, dass du doch ein bisschen Ahnung hast.",
                T0003: "Punkt für dich.",
                T0004: "Ich beschattete das Haus die letzten Tage, aktuell ist nur jemand im Erdgeschoss, und die Person schläft. Sollte also kein Problem sein.",
                T0005: "Für uns gibt es zwei mögliche Eingänge.",
                T0006: "Durch den Hintereingang, da landen wir in der Küche",
                T0007: "oder durch die Dachluke, dort enden wir im Schlafzimmer."
            },
            Riaz: {
                T0001: "Wurde das Haus schon beschattet? Wie viel Menschen wohnen dort? Wie sind deren Tagesabläufe? Wie viele Eingänge gibt es? Irgenswelche Fluchtmöglichkeiten?",
                T0002: "Soweit ich das von hier aus beurteilen kann, haben wir bei beiden Optionen gute Fluchtmöglichkeiten.",
                T0003: "Du bist die Expertin: Hintereingang oder Dachluke?"
            }
        };
        await Template.ƒS.Location.show(Template.locations.missionone);
        Template.ƒS.Sound.play(Template.sound.Wind, 1, true);
        Template.ƒS.Sound.play(Template.sound.Car, 2, true);
        Template.ƒS.Sound.play(Template.sound.Birds, 10, true);
        await Template.ƒS.update(Template.transitions.normal.duration, Template.transitions.normal.alpha, Template.transitions.normal.edge);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.pointing, Template.ƒS.positionPercent(0, 93.5));
        await Template.ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.normal, Template.ƒS.positionPercent(100, 93.5));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.normal, Template.ƒS.positionPercent(0, 93.5));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0001);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0002);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.hips, Template.ƒS.positionPercent(0, 93.5));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0003);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0004);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.normal, Template.ƒS.positionPercent(0, 93.5));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0005);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0006);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0007);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0002);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0003);
        await Template.ƒS.update();
        let missionOneAnswer = {
            iSayDachluke: "Dachluke",
            iSayHintereingang: "Hintereingang"
        };
        let missionOne = await Template.ƒS.Menu.getInput(missionOneAnswer, "choices");
        switch (missionOne) {
            case missionOneAnswer.iSayDachluke:
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Lass uns durch die Dachluke rein. Wir sind eh schon auf den Dächern.");
                await Template.ƒS.Speech.tell(Template.characters.riaz, "Na dann, auf geht´s.");
                Template.ƒS.Character.hide(Template.characters.ylva);
                await Template.ƒS.update(1);
                Template.ƒS.Speech.clear();
                await Template.ƒS.Speech.tell(Template.characters.riaz, "Hey warte auf mich!");
                Template.ƒS.Speech.hide();
                Template.ƒS.Character.hide(Template.characters.riaz);
                await Template.ƒS.update(1);
                Template.ƒS.Sound.fade(Template.sound.Birds, 0, 0);
                Template.ƒS.Sound.fade(Template.sound.Car, 0, 0);
                Template.ƒS.Sound.fade(Template.sound.Wind, 0, 0);
                Template.ƒS.Sound.fade(Template.sound.AFool, 0, 0);
                return Template.ImSchlafzimmer();
                break;
            case missionOneAnswer.iSayHintereingang:
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Lass uns durch den Hintereingang gehen.");
                Template.ƒS.Character.hide(Template.characters.ylva);
                await Template.ƒS.update(1);
                Template.ƒS.Speech.clear();
                await Template.ƒS.Speech.tell(Template.characters.riaz, "Hey warte auf mich!");
                Template.ƒS.Speech.hide();
                Template.ƒS.Character.hide(Template.characters.riaz);
                await Template.ƒS.update(1);
                Template.ƒS.Sound.fade(Template.sound.Birds, 0, 0);
                Template.ƒS.Sound.fade(Template.sound.Car, 0, 0);
                Template.ƒS.Sound.fade(Template.sound.Wind, 0, 0);
                Template.ƒS.Sound.fade(Template.sound.AFool, 0, 0);
                return Template.InDerKüche();
                break;
        }
    }
    Template.DieErsteMission = DieErsteMission;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function DieKatze() {
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
        Template.ƒS.Sound.fade(Template.sound.Glass, 0.1, 2, true);
        Template.ƒS.Sound.setMasterVolume(0.1);
        Template.ƒS.Sound.play(Template.sound.Birds, 10, true);
        Template.ƒS.Sound.play(Template.sound.Water, 10, true);
        await Template.ƒS.Location.show(Template.locations.place);
        await Template.ƒS.update(Template.transitions.correct.duration, Template.transitions.correct.alpha, Template.transitions.correct.edge);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.sittwo, Template.ƒS.positionPercent(80, 92));
        await Template.ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0001);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.sittwo, Template.ƒS.positionPercent(38, 89));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.sittwotalk, Template.ƒS.positionPercent(38, 89));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0002);
        Template.ƒS.Sound.play(Template.sound.Woodpecker, 10, false);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0002);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.sittwotalk, Template.ƒS.positionPercent(38, 89));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0003);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0003);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.Items, Template.characters.Items.pose.Haarklammer, Template.ƒS.positionPercent(57, 64));
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.sittwoitem, Template.ƒS.positionPercent(80, 92));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0004);
        Template.ƒS.Inventory.add(Template.items.haarklammer);
        await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.Haarklammer, Template.moveHaarklammer());
        await Template.ƒS.Character.hide(Template.characters.Items);
        await Template.ƒS.update();
        Template.ƒS.Sound.play(Template.sound.Woodpecker, 10, false);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.sittwo, Template.ƒS.positionPercent(80, 92));
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.sittwo, Template.ƒS.positionPercent(38, 89));
        await Template.ƒS.update();
        Template.ƒS.Sound.fade(Template.sound.Glass, 0, 1);
        Template.ƒS.Sound.fade(Template.sound.Birds, 0, 0);
        Template.ƒS.Sound.fade(Template.sound.Water, 0, 1);
        Template.ƒS.Sound.fade(Template.sound.Woodpecker, 0, 1);
        await Template.ƒS.update();
        return Template.UnsereZukunft();
    }
    Template.DieKatze = DieKatze;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function DieLetzteMission() {
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
        Template.ƒS.Sound.fade(Template.sound.Mission, 0.1, 2, true);
        Template.ƒS.Sound.setMasterVolume(0.1);
        await Template.ƒS.Location.show(Template.locations.shelter);
        await Template.ƒS.update(Template.transitions.fail.duration, Template.transitions.fail.alpha, Template.transitions.fail.edge);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.normal, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0001);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.idiot, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0002);
        let lastMissionAnswer = {
            iSayYlva: "Ylva",
            iSayRiaz: "Riaz",
            iSayBeide: "Beide"
        };
        let lastMission = await Template.ƒS.Menu.getInput(lastMissionAnswer, "choices");
        switch (lastMission) {
            case lastMissionAnswer.iSayYlva:
                await Template.ƒS.Character.hide(Template.characters.ylva);
                await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.normal, Template.ƒS.positionPercent(3, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Ich gehe!");
                Template.ƒS.Character.hide(Template.characters.ylva);
                await Template.ƒS.update(1);
                Template.ƒS.Speech.clear();
                Template.ƒS.Speech.hide();
                await Template.ƒS.update();
                Template.ƒS.Sound.fade(Template.sound.Mission, 0, 1);
                Template.ƒS.Character.hide(Template.characters.riaz);
                return Template.Ylva();
                break;
            case lastMissionAnswer.iSayRiaz:
                await Template.ƒS.Character.hide(Template.characters.ylva);
                await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.normal, Template.ƒS.positionPercent(3, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Okay du gehst, aber pass auf dich auf!");
                Template.ƒS.Character.hide(Template.characters.riaz);
                await Template.ƒS.update(1);
                Template.ƒS.Speech.clear();
                Template.ƒS.Speech.hide();
                await Template.ƒS.update();
                Template.ƒS.Sound.fade(Template.sound.Mission, 0, 1);
                Template.ƒS.Character.hide(Template.characters.ylva);
                return Template.Riaz();
                break;
            case lastMissionAnswer.iSayBeide:
                await Template.ƒS.Character.hide(Template.characters.ylva);
                await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.normal, Template.ƒS.positionPercent(3, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Wir gehen zusammen!");
                Template.ƒS.Character.hide(Template.characters.riaz);
                Template.ƒS.Character.hide(Template.characters.ylva);
                await Template.ƒS.update(1);
                Template.ƒS.Speech.clear();
                Template.ƒS.Speech.hide();
                Template.ƒS.Sound.fade(Template.sound.Mission, 0, 1);
                await Template.ƒS.update();
                return Template.Dead();
        }
    }
    Template.DieLetzteMission = DieLetzteMission;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function HappyEnd() {
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
        Template.ƒS.Sound.fade(Template.sound.Love, 0.1, 2, true);
        Template.ƒS.Sound.setMasterVolume(0.1);
        Template.ƒS.Sound.play(Template.sound.Birds, 10, true);
        await Template.ƒS.Location.show(Template.locations.future);
        await Template.ƒS.update(Template.transitions.correct.duration, Template.transitions.correct.alpha, Template.transitions.correct.edge);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.normal, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0001);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.normal, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        Template.ƒS.Sound.play(Template.sound.Woodpecker, 10, false);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0002);
        await Template.ƒS.Character.show(Template.characters.cat, Template.characters.cat.pose.normal, Template.ƒS.positionPercent(45, 75));
        await Template.ƒS.update(1);
        Template.ƒS.Sound.play(Template.sound.Miau, 5, false);
        await Template.ƒS.Speech.tell(Template.characters.cat, text.Katze.T0001);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0003);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.laugh, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0002);
        Template.ƒS.Sound.play(Template.sound.Purr, 5, false);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.laugh, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0004);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0005);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0003);
        await Template.ƒS.Speech.tell(null, "Wie soll die Katze heißen?");
        Template.dataForSave.Katze.name = await Template.ƒS.Speech.getInput();
        console.log(Template.dataForSave.Katze.name);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0006);
        Template.ƒS.Sound.play(Template.sound.Miau, 2, false);
        await Template.ƒS.Speech.tell(Template.dataForSave.Katze, text.Katze.T0002);
        Template.ƒS.Sound.play(Template.sound.Woodpecker, 10, false);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.hide(Template.characters.cat);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.Love, 0, 1);
        Template.ƒS.Sound.fade(Template.sound.Birds, 0, 0);
        await Template.ƒS.update();
        return Template.LastScene();
    }
    Template.HappyEnd = HappyEnd;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function ImSchlafzimmer() {
        console.log("FudgeStory Scene starting");
        let text = {
            Ylva: {
                T0001: "Ja was denkst du denn. Die einzige hier anwesende Person schläft im Erdgeschoss. Wir sind durch die Dachluke geklettert, ergo sind wir im obersten Stock du Genie.",
                T0002: "Wir sollten uns auch hier ein bisschen umsehen, man weiß nie was sonst noch so für Schätze rumliegen.",
                T0003: "Oh sehr schön, ein Schmuckkästchen."
            },
            Riaz: {
                T0001: "Super wir sind drin, das war ja einfach.",
                T0002: "...",
                T0003: "Klingt gut, schau mal da hinten, da glitzert was. "
            }
        };
        Template.ƒS.Sound.fade(Template.sound.Mission, 0.1, 2, true);
        Template.ƒS.Sound.play(Template.sound.Window, 1, false);
        await Template.ƒS.Location.show(Template.locations.bedroom);
        await Template.ƒS.Character.show(Template.characters.Items, Template.characters.Items.pose.Schatulle, Template.ƒS.positionPercent(11, 62));
        await Template.ƒS.update(Template.transitions.correct.duration, Template.transitions.correct.alpha, Template.transitions.correct.edge);
        await Template.ƒS.update();
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.normal, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0001);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.hips, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.sad, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.clear();
        await Template.ƒS.update(3);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0002);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.handup, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0002);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0003);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0003);
        await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.Schatulle, Template.moveSchatulle());
        await Template.ƒS.Character.hide(Template.characters.Items);
        await Template.ƒS.update();
        Template.ƒS.Inventory.add(Template.items.schatulle);
        Template.ƒS.Speech.hide();
        Template.ƒS.Character.hide(Template.characters.ylva);
        Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.Mission, 0, 1);
        await Template.ƒS.update();
        return Template.Boss();
    }
    Template.ImSchlafzimmer = ImSchlafzimmer;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function InDerKüche() {
        console.log("FudgeStory Scene starting");
        let text = {
            Ylva: {
                T0001: "Psst, quatsch nicht so viel.",
                T0002: "An die Arbeit!"
            },
            Riaz: {
                T0001: "Super wir sind drin, das war ja einfach."
            }
        };
        Template.ƒS.Sound.fade(Template.sound.Mission, 0.1, 2, true);
        Template.ƒS.Sound.play(Template.sound.Door, 1, false);
        await Template.ƒS.Location.show(Template.locations.kitchen);
        await Template.ƒS.update(Template.transitions.normal.duration, Template.transitions.normal.alpha, Template.transitions.normal.edge);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.normal, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        Template.ƒS.Sound.play(Template.sound.Psst, 1, false);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0001);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.psst, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.pointing, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0002);
        Template.ƒS.Speech.hide();
        Template.ƒS.Character.hide(Template.characters.ylva);
        Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.Mission, 0, 1);
        await Template.ƒS.update();
        return Template.Boss();
    }
    Template.InDerKüche = InDerKüche;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Items() {
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
        Template.ƒS.Sound.fade(Template.sound.Sinister, 0.1, 2, true);
        await Template.ƒS.Location.show(Template.locations.office);
        await Template.ƒS.Inventory.open();
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.thinking, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.normal, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.nails, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0001);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0002);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.go, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.maddox, text.Maddox.T0002);
        Template.ƒS.Speech.hide();
        Template.ƒS.Character.hide(Template.characters.ylva);
        Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.update(2);
        Template.ƒS.Character.hide(Template.characters.maddox);
        Template.ƒS.Sound.fade(Template.sound.Sinister, 0, 1);
        await Template.ƒS.update();
        return Template.HappyEnd();
    }
    Template.Items = Items;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function JemandBrauchtHilfe() {
        console.log("FudgeStory Scene starting");
        let text = {
            Ylva: {
                T0000: "Wir sind gemeinsam eben ein unschlagbares Team.",
                T0001: "Wobei ich ohne Zweifel auch alleine erfolgreich gewesen wäre.",
                T0002: "Muss ich mir das jetzt ein Leben lang anhören? Mir ist nur einmal ein Fehler unterlaufen! ",
                T0003: "Und du warst der Grund warum ich abgelenkt war.",
                T0004: "Ja du, du musstest ja schließlich deine Maddox Imitation zum besten geben...",
                T0005: "Ja da schreit jemand um Hilfe!"
            },
            Riaz: {
                T0001: "Schon wieder ein Auftrag erfolgreich erledigt. Tja das wäre dann der 5. diese Woche.",
                T0002: "Hm ja ist klar.",
                T0003: "Und wer gibt dir dann Rückendeckung, wenn du mal wieder vergisst die Kellerräume zu checken?",
                T0004: "Denk an den Vorfall mit dem Krokodil!",
                T0005: "Ich?",
                T0006: "Und die war zum schießen. Das weißt du ganz genau!",
                T0007: "Hey sag mal, hörst du das?",
            }
        };
        Template.ƒS.Sound.fade(Template.sound.CosmicDrift, 0.1, 2, true);
        Template.ƒS.Sound.setMasterVolume(0.1);
        Template.ƒS.Sound.play(Template.sound.Wind, 1, true);
        Template.ƒS.Sound.play(Template.sound.Car, 2, true);
        Template.ƒS.Sound.play(Template.sound.Birds, 10, true);
        await Template.ƒS.Location.show(Template.locations.street);
        await Template.ƒS.update(Template.transitions.normal.duration, Template.transitions.normal.alpha, Template.transitions.normal.edge);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.normal, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0001);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.hips, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0000);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.handup, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0002);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0003);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.laugh, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0004);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.idiot, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0002);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0003);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0005);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.laugh, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0004);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0006);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.normal, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update();
        Template.ƒS.Sound.play(Template.sound.Hilfe, 0.1, false);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0007);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.normal, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0005);
        let getHelpAnswer = {
            iSayHelfen: "helfen",
            iSaynichtHelfen: "nicht helfen"
        };
        let getHelp = await Template.ƒS.Menu.getInput(getHelpAnswer, "choices");
        switch (getHelp) {
            case getHelpAnswer.iSayHelfen:
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Lass uns mal nachsehen.");
                Template.ƒS.Character.hide(Template.characters.ylva);
                Template.ƒS.Character.hide(Template.characters.riaz);
                await Template.ƒS.update(1);
                Template.ƒS.Speech.clear();
                Template.ƒS.Speech.hide();
                Template.ƒS.Sound.fade(Template.sound.CosmicDrift, 0, 1);
                Template.ƒS.Sound.fade(Template.sound.Birds, 0, 0);
                Template.ƒS.Sound.fade(Template.sound.Car, 0, 0);
                Template.ƒS.Sound.fade(Template.sound.Wind, 0, 0);
                await Template.ƒS.update();
                return Template.DieKatze();
                break;
            case getHelpAnswer.iSaynichtHelfen:
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Komm wir gehen weiter, da ist bestimmt nichts.");
                Template.ƒS.Character.hide(Template.characters.ylva);
                Template.ƒS.Character.hide(Template.characters.riaz);
                await Template.ƒS.update(1);
                Template.ƒS.Speech.clear();
                Template.ƒS.Speech.hide();
                Template.ƒS.Sound.fade(Template.sound.CosmicDrift, 0, 1);
                Template.ƒS.Sound.fade(Template.sound.Birds, 0, 0);
                Template.ƒS.Sound.fade(Template.sound.Car, 0, 0);
                Template.ƒS.Sound.fade(Template.sound.Wind, 0, 0);
                await Template.ƒS.update();
                return Template.UnsereZukunft();
                break;
        }
        return Template.DieErsteMission();
    }
    Template.JemandBrauchtHilfe = JemandBrauchtHilfe;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Lagebesprechung() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Ylva: {
                T0001: "Du hast dich gar nicht so dumm angestellt, wie du aussiehst.",
                T0002: "Wie dem auch sei...",
                T0003: "Wie das ganze hier so läuft, hab ich dir ja bereits erklärt.",
                T0004: "Hast du denn noch irgendwelche Fragen?",
                T0005: "Das geht dich überhaupt einen Scheißdreck an!",
                T0006: "Schon gut. Es ist nur...naja ich rede nie darüber.",
                T0007: "Maddox hat mich als Kind von der Straße aufgelesen. Ich hatte nichts. Ich schulde ihm mein Leben. ",
                T0008: "Raus hier!",
                T0009: "Hihi, Idiot.",
                T0010: "Geh ich jetzt gleich ins Bett oder besuche noch ich meinen Lieblingsplatz um 	meine Gedanken zu ordnen?"
            },
            Riaz: {
                T0001: "Na vielen Dank auch.",
                T0002: "Und du hast ein ganz schön großes Mundwerk für so wenig Mensch.",
                T0003: "Hm ja. Wie bist du hier eigentlich gelandet? Der Boss hat mich ja vom anderen Clan abgeworben, aber du? ",
                T0004: "Du scheinst hier einen ganz besonderen Stellenwert zu haben. ",
                T0005: "Tut mir leid ich wollte dir nicht zu nahe treten. Ich...",
                T0006: "Hm achso. Ich dachte schon, er wäre dein Vater.",
                T0007: "Hab mich schon gefragt, wie aus sowas wie ihm sowas hübsches wie du entstehen kann. "
            }
        };
        await Template.ƒS.Location.show(Template.locations.shelter);
        Template.ƒS.Sound.fade(Template.sound.CosmicDrift, 0.1, 2, true);
        await Template.ƒS.update(Template.transitions.normal.duration, Template.transitions.normal.alpha, Template.transitions.normal.edge);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.handup, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.sad, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0001);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0002);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.hips, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        let lagebesprechungAnswer = {
            iSayHaue: "Vorsicht Freundchen. Gleich gibt’s Haue.",
            iSayOk: "Da heute dein erster Tag ist, lass ichs dir mal durchgehen."
        };
        let lagebesprechung = await Template.ƒS.Menu.getInput(lagebesprechungAnswer, "answers");
        switch (lagebesprechung) {
            case lagebesprechungAnswer.iSayHaue:
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Vorsicht Freundchen. Gleich gibt’s Haue.");
                await Template.ƒS.Character.hide(Template.characters.riaz);
                await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.laugh, Template.ƒS.positionPercent(100, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.riaz, "Ich glaube das riskiere ich gerne.");
                Template.ƒS.Speech.clear();
                break;
            case lagebesprechungAnswer.iSayOk:
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Da heute dein erster Tag ist, lass ichs dir mal durchgehen.");
                await Template.ƒS.Character.hide(Template.characters.riaz);
                await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.laugh, Template.ƒS.positionPercent(100, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.riaz, "Du hast angefangen!");
                Template.ƒS.Speech.clear();
                break;
        }
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.handup, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0002);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0003);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0004);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.normal, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0003);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0004);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.hips, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0005);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.sad, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0005);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.normal, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0006);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0007);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0006);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.laugh, Template.ƒS.positionPercent(100, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0007);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.idiot, Template.ƒS.positionPercent(3, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0008);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0009);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0010);
        let monologAnswer = {
            iSayNachdenken: "Nachdenken",
            iSayBett: "Bett"
        };
        let monolog = await Template.ƒS.Menu.getInput(monologAnswer, "choices");
        switch (monolog) {
            case monologAnswer.iSayNachdenken:
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Ich glaube, ich brauche noch etwas frische Luft!");
                Template.ƒS.Speech.hide();
                Template.ƒS.Character.hide(Template.characters.ylva);
                await Template.ƒS.update(1);
                Template.ƒS.Speech.clear();
                Template.ƒS.Sound.fade(Template.sound.CosmicDrift, 0, 1);
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.ylva);
                await Template.ƒS.update(1);
                Template.ƒS.Speech.hide();
                return Template.Monolog();
                break;
            case monologAnswer.iSayBett:
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Ich bin Hundemüde, ich sollte ins Bett!");
                Template.ƒS.Character.hide(Template.characters.ylva);
                await Template.ƒS.update(1);
                Template.ƒS.Speech.clear();
                Template.ƒS.Speech.hide();
                return Template.ZeitVergeht();
                break;
        }
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.CosmicDrift, 0, 1);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.update(1);
    }
    Template.Lagebesprechung = Lagebesprechung;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function LastScene() {
        console.log("FudgeStory Scene starting");
        Template.ƒS.Sound.fade(Template.sound.WakeUp, 0.1, 2, true);
        Template.ƒS.Sound.setMasterVolume(0.1);
        await Template.ƒS.Location.show(Template.locations.future);
        await Template.ƒS.update(Template.transitions.correct.duration, Template.transitions.correct.alpha, Template.transitions.correct.edge);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.last, Template.ƒS.positionPercent(60, 95));
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.last, Template.ƒS.positionPercent(15, 95));
        await Template.ƒS.Character.show(Template.characters.cat, Template.characters.cat.pose.last, Template.ƒS.positionPercent(40, 80));
        await Template.ƒS.update(1);
    }
    Template.LastScene = LastScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory Price of Freedom starting");
    //define transitions
    Template.transitions = {
        time: {
            duration: 3,
            alpha: "/Transitions/008.jpg",
            edge: 1
        },
        normal: {
            duration: 2,
            alpha: "/Transitions/005.jpg",
            edge: 1
        },
        correct: {
            duration: 2,
            alpha: "/Transitions/012.jpg",
            edge: 1
        },
        dead: {
            duration: 2,
            alpha: "/Transitions/21.jpg",
            edge: 1
        },
        fail: {
            duration: 2,
            alpha: "/Transitions/019.png",
            edge: 1
        }
    };
    Template.sound = {
        //themes
        NeverSurrender: "/Sounds/Musik/NeverSurrender.mp3",
        AFool: "/Sounds/Musik/AFool.mp3",
        Mission: "/Sounds/Musik/Mission.mp3",
        Dead: "/Sounds/Musik/TakeMeBack.mp3",
        Sinister: "/Sounds/Musik/Sinister.mp3",
        CosmicDrift: "/Sounds/Musik/CosmicDrift.mp3",
        Glass: "/Sounds/Musik/Glass.mp3",
        Love: "/Sounds/Musik/Love.mp3",
        WakeUp: "/Sounds/Musik/WakeUp.mp3",
        //SFX
        Wind: "/Sounds/SFX/Wind.mp3",
        Car: "/Sounds/SFX/Car.mp3",
        Birds: "/Sounds/SFX/Birds.mp3",
        Door: "/Sounds/SFX/Door.mp3",
        Window: "/Sounds/SFX/Window.mp3",
        Laugh: "/Sounds/SFX/Laugh.mp3",
        Woodpecker: "/Sounds/SFX/Woodpecker.mp3",
        Water: "/Sounds/SFX/Water.mp3",
        Psst: "/Sounds/SFX/psst.mp3",
        Hilfe: "/Sounds/SFX/hilfe.mp3",
        Miau: "/Sounds/SFX/miau.mp3",
        Purr: "/Sounds/SFX/purr.mp3"
    };
    Template.locations = {
        office: {
            name: "office",
            background: "/Images/Places/office1.jpeg"
        },
        shelter: {
            name: "shelter",
            background: "/Images/Places/shelter1.jpeg"
        },
        missionone: {
            name: "missionone",
            background: "/Images/Places/mission1.jpeg"
        },
        kitchen: {
            name: "kitchen",
            background: "/Images/Places/kitchen.jpeg"
        },
        bedroom: {
            name: "bedroom",
            background: "/Images/Places/bedroomv.jpeg"
        },
        place: {
            name: "place",
            background: "/Images/Places/place1.jpeg"
        },
        nothing: {
            name: "nothing",
            background: "/Images/Places/nothing.jpg"
        },
        street: {
            name: "street",
            background: "/Images/Places/wayhome1.jpeg"
        },
        future: {
            name: "future",
            background: "/Images/Places/future.jpeg"
        },
        grave: {
            name: "grave",
            background: "/Images/Places/grave.jpeg"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        ylva: {
            name: "Ylva",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "/Images/Charakter/Ylva/normal.png",
                idiot: "/Images/Charakter/Ylva/idiot.png",
                handup: "/Images/Charakter/Ylva/handup.png",
                hips: "/Images/Charakter/Ylva/hips.png",
                pointing: "/Images/Charakter/Ylva/pointing.png",
                psst: "/Images/Charakter/Ylva/psst.png",
                cry: "/Images/Charakter/Ylva/cry.png",
                laugh: "/Images/Charakter/Ylva/laugh.png",
                sit: "/Images/Charakter/Ylva/sit.png",
                sittwo: "/Images/Charakter/Ylva/sittwo.png",
                sittwotalk: "/Images/Charakter/Ylva/sittwotalk.png",
                nails: "/Images/Charakter/Ylva/nails.png",
                last: "/Images/Charakter/Ylva/last.png",
                //NarratorScene
                happy: "/Images/Charakter/Ylva/narrator/happy.png",
                stand: "/Images/Charakter/Ylva/narrator/stand.png",
                hand: "/Images/Charakter/Ylva/narrator/hand.png"
            }
        },
        riaz: {
            name: "Riaz",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                greeting: "/Images/Charakter/Riaz/greeting.png",
                sad: "/Images/Charakter/Riaz/sad.png",
                normal: "/Images/Charakter/Riaz/normal.png",
                cry: "/Images/Charakter/Riaz/cry.png",
                laugh: "/Images/Charakter/Riaz/laugh.png",
                sittwo: "/Images/Charakter/Riaz/sittwo.png",
                sittwoitem: "/Images/Charakter/Riaz/sittwoitem.png",
                last: "/Images/Charakter/Riaz/last.png",
                //NarratorScene
                happy: "/Images/Charakter/Riaz/narrator/happy.png",
                hand: "/Images/Charakter/Riaz/narrator/hand.png",
                stand: "/Images/Charakter/Riaz/narrator/stand.png"
            }
        },
        maddox: {
            name: "Maddox",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "/Images/Charakter/Maddox/normal.png",
                angry: "/Images/Charakter/Maddox/angry.png",
                go: "/Images/Charakter/Maddox/go.png",
                laugh: "/Images/Charakter/Maddox/laugh.png",
                thinking: "/Images/Charakter/Maddox/thinking.png",
                grave: "/Images/Charakter/Maddox/grave1.png",
                ylvabegin: "/Images/Charakter/Maddox/ylva.png"
            }
        },
        cat: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "/Images/Charakter/Cat/cat.png",
                last: "/Images/Charakter/Cat/last.png"
            }
        },
        little: {
            name: "Little",
            origin: Template.ƒS.ORIGIN.TOPCENTER,
            pose: {
                alone: "/Images/Charakter/Little/alone.png",
                trauer: "/Images/Charakter/Little/trauer.png",
                wut: "/Images/Charakter/Little/wut.png",
                schmerz: "/Images/Charakter/Little/schmerz.png",
                hoffnungslosigkeit: "/Images/Charakter/Little/hoffnungslosigkeit.png",
                betteln: "/Images/Charakter/Little/betteln.png",
                help: "/Images/Charakter/Little/help.png",
                maddoxbegin: "/Images/Charakter/Little/maddox.png",
                run1: "/Images/Charakter/Little/run1.png",
                run2: "/Images/Charakter/Little/run2.png",
                run3: "/Images/Charakter/Little/run3.png"
            }
        },
        Items: {
            name: "Items",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                Schatulle: "/Images/Items/schatulle.png",
                Haarklammer: "/Images/Items/haarklammerk.png",
                Armband: "/Images/Items/armband.png"
            }
        }
    };
    Template.dataForSave = {
        Katze: {
            name: "",
        }
    };
    Template.items = {
        schatulle: {
            name: "Schatulle ",
            description: "<br>Die Schatulle hast du auf der ersten Mission mit Riaz geklaut <br>",
            image: "/Images/Items/schatulle.png",
            static: true,
        },
        armband: {
            name: "Armband ",
            description: "<br>Das Armband hast du an deinem Lieblingsplatz gefunden <br>",
            image: "/Images/Items/armband.png",
            static: true,
        },
        haarklammer: {
            name: "Haarklammer ",
            description: "<br>Die Haarklammer gab die eine ältere Dame zur Rettung ihrer Katze <br>",
            image: "/Images/Items/haarklammer.png",
            static: true,
        }
    };
    function growAnimation() {
        return {
            start: { scaling: new Template.ƒS.Position(2, 2) },
            end: { scaling: new Template.ƒS.Position(1, 1) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.growAnimation = growAnimation;
    function moveArmband() {
        return {
            start: { translation: Template.ƒS.positionPercent(10, 50) },
            end: { translation: Template.ƒS.positionPercent(50, 50) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.moveArmband = moveArmband;
    function moveSchatulle() {
        return {
            start: { translation: Template.ƒS.positionPercent(11, 62) },
            end: { translation: Template.ƒS.positionPercent(20, 62) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.moveSchatulle = moveSchatulle;
    function moveHaarklammer() {
        return {
            start: { translation: Template.ƒS.positionPercent(57, 64) },
            end: { translation: Template.ƒS.positionPercent(47, 64) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.moveHaarklammer = moveHaarklammer;
    // MENU - create Menu with buttons
    let gameMenu;
    //  MENU - Audio functions
    let volume = 1.0;
    function incrementSound() {
        if (volume >= 10) {
            return;
        }
        volume += 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0) {
            return;
        }
        volume -= 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.decrementSound = decrementSound;
    function showCredits() {
        Template.ƒS.Text.addClass("credits");
        Template.ƒS.Text.print("<h1> Credits </h1><p><b> Story: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Julia Weber <br><b> Texte: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Julia Weber <br><b> Bilder: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Julia Weber <br><b>Titelbild: </b> &nbsp; Julia Weber<br><b>Musik: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Youtube Library<br></p>");
        // showCredits();
    }
    Template.showCredits = showCredits;
    Template.inGameMenu = {
        save: "Speichern",
        load: "Laden",
        close: "Schließen",
        turnUpVolume: "+",
        turndownVolume: "-",
        credits: "Credits",
        inventar: "Inventar"
    };
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case Template.inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case Template.inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case Template.inGameMenu.close:
                gameMenu.close();
                menu = false;
                break;
            case Template.inGameMenu.turnUpVolume:
                incrementSound();
                break;
            case Template.inGameMenu.turndownVolume:
                decrementSound();
                break;
            case Template.inGameMenu.credits:
                showCredits();
                break;
            case Template.inGameMenu.inventar:
                await Template.ƒS.Inventory.open();
                break;
        }
    }
    Template.buttonFunctionalities = buttonFunctionalities;
    let menu = true;
    document.addEventListener("keydown", handKeypress);
    async function handKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menu) {
                    gameMenu.close();
                    menu = false;
                }
                else {
                    gameMenu.open();
                    menu = true;
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.C:
                showCredits();
                break;
        }
    }
    ;
    Template.dataSave = {};
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu =
            Template.ƒS.Menu.create(Template.inGameMenu, buttonFunctionalities, "gameMenu");
        let scenes = [
            { scene: Template.Monolog, name: "Prolog" },
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
    let uiElement = document.querySelector("[type=interface]");
    Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
    Template.dataSave = Template.ƒS.Progress.setData(Template.dataSave, uiElement);
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Monolog() {
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
        Template.ƒS.Sound.fade(Template.sound.Glass, 0.1, 2, true);
        Template.ƒS.Sound.setMasterVolume(0.1);
        Template.ƒS.Sound.play(Template.sound.Birds, 10, true);
        Template.ƒS.Sound.play(Template.sound.Water, 10, true);
        await Template.ƒS.Location.show(Template.locations.place);
        await Template.ƒS.Character.show(Template.characters.Items, Template.characters.Items.pose.Armband, Template.ƒS.positionPercent(10, 50));
        await Template.ƒS.update(Template.transitions.correct.duration, Template.transitions.correct.alpha, Template.transitions.correct.edge);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.sit, Template.ƒS.positionPercent(27, 81));
        await Template.ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0000);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        Template.ƒS.Sound.play(Template.sound.Woodpecker, 10, false);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0002);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0003);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0004);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0005);
        Template.ƒS.Sound.play(Template.sound.Woodpecker, 10, false);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0006);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0007);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0008);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0009);
        await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.Armband, Template.moveArmband());
        await Template.ƒS.Character.hide(Template.characters.Items);
        await Template.ƒS.update();
        Template.ƒS.Inventory.add(Template.items.armband);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.Glass, 0, 1);
        Template.ƒS.Sound.fade(Template.sound.Birds, 0, 0);
        Template.ƒS.Sound.fade(Template.sound.Water, 0, 1);
        Template.ƒS.Sound.fade(Template.sound.Woodpecker, 0, 1);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update();
        return Template.ZeitVergeht();
    }
    Template.Monolog = Monolog;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Prolog() {
        console.log("FudgeStory Scene starting");
        let text = {
            Narrator: {
                T0000: "",
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
        Template.ƒS.Sound.fade(Template.sound.NeverSurrender, 1, 4, false);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.alone, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.little, Template.characters.little.pose.alone, Template.growAnimation());
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0002);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.help, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0003);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0004);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0005);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.trauer, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0006);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.wut, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0007);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.schmerz, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0008);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.hoffnungslosigkeit, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0009);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0010);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.run1, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.run2, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.run3, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.run1, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.run2, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.run3, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0011);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.run1, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.run2, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.run3, Template.ƒS.positionPercent(50, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0012);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.betteln, Template.ƒS.positionPercent(40, 10));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0013);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0014);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.show(Template.characters.little, Template.characters.little.pose.maddoxbegin, Template.ƒS.positionPercent(40, 10));
        await Template.ƒS.Character.show(Template.characters.maddox, Template.characters.maddox.pose.ylvabegin, Template.ƒS.positionPercent(50, 69));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0015);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0016);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0017);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0018);
        await Template.ƒS.Character.hide(Template.characters.little);
        await Template.ƒS.Character.hide(Template.characters.maddox);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.hips, Template.ƒS.positionPercent(30, 76));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0019);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0020);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0021);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0022);
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0023);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0024);
        Template.ƒS.Sound.fade(Template.sound.NeverSurrender, 0, 1);
        Template.ƒS.Speech.hide();
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
        return Template.DerNeue();
    }
    Template.Prolog = Prolog;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Riaz() {
        console.log("FudgeStory Template Scene starting");
        await Template.ƒS.Location.show(Template.locations.grave);
        await Template.ƒS.update(Template.transitions.dead.duration, Template.transitions.dead.alpha, Template.transitions.dead.edge);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.cry, Template.ƒS.positionPercent(27, 93));
        await Template.ƒS.update();
        Template.ƒS.Sound.fade(Template.sound.Dead, 1, 2, false);
    }
    Template.Riaz = Riaz;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function UnsereZukunft() {
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
        Template.ƒS.Sound.fade(Template.sound.Glass, 0.1, 2, true);
        Template.ƒS.Sound.setMasterVolume(0.1);
        Template.ƒS.Sound.play(Template.sound.Birds, 10, true);
        Template.ƒS.Sound.play(Template.sound.Water, 10, true);
        await Template.ƒS.Location.show(Template.locations.place);
        await Template.ƒS.update(Template.transitions.normal.duration, Template.transitions.normal.alpha, Template.transitions.normal.edge);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.sittwo, Template.ƒS.positionPercent(80, 92));
        await Template.ƒS.update(1);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0001);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.sittwo, Template.ƒS.positionPercent(38, 89));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0001);
        Template.ƒS.Sound.play(Template.sound.Woodpecker, 10, false);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0002);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0002);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0003);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0004);
        await Template.ƒS.Speech.tell(Template.characters.ylva, text.Ylva.T0003);
        await Template.ƒS.Speech.tell(Template.characters.riaz, text.Riaz.T0004);
        Template.ƒS.Sound.play(Template.sound.Woodpecker, 10, false);
        let zukunftAnswer = {
            iSaySelbstständig: "Wie sollen wir uns denn selbstständig machen ohne Raubzüge?",
            iSayPreis: "Der Preis für unsere Freiheit wird sehr hoch sein."
        };
        let zukunft = await Template.ƒS.Menu.getInput(zukunftAnswer, "answers");
        switch (zukunft) {
            case zukunftAnswer.iSaySelbstständig:
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Wie sollen wir uns denn selbstständig machen ohne Raubzüge?");
                await Template.ƒS.Speech.tell(Template.characters.riaz, "Wir finden schon ehrliche Arbeit. Ich glaube fest an uns.");
                Template.ƒS.Speech.clear();
                break;
            case zukunftAnswer.iSayPreis:
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Der Preis für unsere Freiheit wird sehr hoch sein.");
                await Template.ƒS.Speech.tell(Template.characters.riaz, "Egal wie hoch er sein wird, wir schaffen das. Gemeinsam.");
                Template.ƒS.Speech.clear();
                break;
        }
        let zukunftzweiAnswer = {
            iSayOK: "Okay, lass es uns versuchen.",
            iSayLove: "Ich liebe dich."
        };
        let zukunftzwei = await Template.ƒS.Menu.getInput(zukunftzweiAnswer, "answers");
        switch (zukunftzwei) {
            case zukunftzweiAnswer.iSayOK:
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Okay, lass es uns versuchen.");
                Template.ƒS.Speech.clear();
                break;
            case zukunftzweiAnswer.iSayLove:
                await Template.ƒS.Speech.tell(Template.characters.ylva, "Ich liebe dich.");
                await Template.ƒS.Speech.tell(Template.characters.riaz, "Ich liebe dich auch.");
                Template.ƒS.Speech.clear();
                break;
        }
        Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.Glass, 0, 1);
        Template.ƒS.Sound.fade(Template.sound.Birds, 0, 0);
        Template.ƒS.Sound.fade(Template.sound.Water, 0, 1);
        Template.ƒS.Sound.fade(Template.sound.Glass, 0, 1);
        await Template.ƒS.update();
        return Template.DerPreis();
    }
    Template.UnsereZukunft = UnsereZukunft;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Ylva() {
        console.log("FudgeStory Template Scene starting");
        await Template.ƒS.Location.show(Template.locations.grave);
        await Template.ƒS.update(Template.transitions.dead.duration, Template.transitions.dead.alpha, Template.transitions.dead.edge);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.cry, Template.ƒS.positionPercent(70, 94));
        await Template.ƒS.update();
        Template.ƒS.Sound.fade(Template.sound.Dead, 1, 2, false);
    }
    Template.Ylva = Ylva;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function ZeitVergeht() {
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
        Template.ƒS.Sound.fade(Template.sound.Love, 1, 4, true);
        await Template.ƒS.Location.show(Template.locations.nothing);
        await Template.ƒS.update(Template.transitions.time.duration, Template.transitions.time.alpha, Template.transitions.time.edge);
        document.getElementById("speechBox").setAttribute("style", "display: block;");
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.stand, Template.ƒS.positionPercent(100, 70));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0001);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.stand, Template.ƒS.positionPercent(3, 70));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0002);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.happy, Template.ƒS.positionPercent(100, 70));
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.happy, Template.ƒS.positionPercent(3, 70));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0003);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.hand, Template.ƒS.positionPercent(100, 70));
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.hand, Template.ƒS.positionPercent(3, 70));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0004);
        await Template.ƒS.Character.hide(Template.characters.riaz);
        await Template.ƒS.Character.show(Template.characters.riaz, Template.characters.riaz.pose.hand, Template.ƒS.positionPercent(77.3, 70));
        await Template.ƒS.Character.hide(Template.characters.ylva);
        await Template.ƒS.Character.show(Template.characters.ylva, Template.characters.ylva.pose.hand, Template.ƒS.positionPercent(22.5, 70));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0005);
        Template.ƒS.Character.hide(Template.characters.ylva);
        Template.ƒS.Character.hide(Template.characters.riaz);
        Template.ƒS.Sound.fade(Template.sound.Love, 0, 1);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        return Template.JemandBrauchtHilfe();
    }
    Template.ZeitVergeht = ZeitVergeht;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map