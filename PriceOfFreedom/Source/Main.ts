namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory Price of Freedom starting");


  //define transitions

  export let transitions = {
    time: {
      duration: 3,
      alpha: "Transitions/008.jpg",
      edge: 1
    },
    normal: {
      duration: 2,
      alpha: "Transitions/005.jpg",
      edge: 1

    },
    correct: {
      duration: 2,
      alpha: "Transitions/012.jpg",
      edge: 1
    },


    dead: {
      duration: 2,
      alpha: "Transitions/21.jpg",
      edge: 1
    },

    fail: {
      duration: 2,
      alpha: "Transitions/019.png",
      edge: 1
    }
  };

  export let sound = {
    //themes
    NeverSurrender: "Sounds/Musik/NeverSurrender.mp3",
    AFool: "Sounds/Musik/AFool.mp3",
    Mission: "Sounds/Musik/Mission.mp3",
    Dead: "Sounds/Musik/TakeMeBack.mp3",
    Sinister: "Sounds/Musik/Sinister.mp3",
    CosmicDrift: "Sounds/Musik/CosmicDrift.mp3",
    Glass: "Sounds/Musik/Glass.mp3",
    Love: "Sounds/Musik/Love.mp3",
    WakeUp: "Sounds/Musik/WakeUp.mp3",

    //SFX
    Wind: "Sounds/SFX/Wind.mp3",
    Car: "Sounds/SFX/Car.mp3",
    Birds: "Sounds/SFX/Birds.mp3",
    Door: "Sounds/SFX/Door.mp3",
    Window: "Sounds/SFX/Window.mp3",
    Laugh: "Sounds/SFX/Laugh.mp3",
    Woodpecker: "Sounds/SFX/Woodpecker.mp3",
    Water: "Sounds/SFX/Water.mp3",
    Psst: "Sounds/SFX/psst.mp3",
    Hilfe: "Sounds/SFX/hilfe.mp3",
    Miau: "Sounds/SFX/miau.mp3",
    Purr: "Sounds/SFX/purr.mp3"


  };

  export let locations = {
    office: {
      name: "office",
      background: "Images/Places/office1.jpeg"
    },
    shelter: {
      name: "shelter",
      background: "Images/Places/shelter1.jpeg"

    },
    missionone: {
      name: "missionone",
      background: "Images/Places/mission1.jpeg"
    },
    kitchen: {
      name: "kitchen",
      background: "Images/Places/kitchen.jpeg"
    },
    bedroom: {
      name: "bedroom",
      background: "Images/Places/bedroomv.jpeg"
    },
    place: {
      name: "place",
      background: "Images/Places/place1.jpeg"
    },
    nothing: {
      name: "nothing",
      background: "Images/Places/nothing.jpg"

    },
    street: {
      name: "street",
      background: "Images/Places/wayhome1.jpeg"
    },
    future: {
      name: "future",
      background: "Images/Places/future.jpeg"
    },

    grave: {
      name: "grave",
      background: "Images/Places/grave.jpeg"
    }

  };

  export let characters = {
    narrator: {
      name: ""
    },
    ylva: {
      name: "Ylva",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "Images/Charakter/Ylva/normal.png",
        idiot: "Images/Charakter/Ylva/idiot.png",
        handup: "Images/Charakter/Ylva/handup.png",
        hips: "Images/Charakter/Ylva/hips.png",
        pointing: "Images/Charakter/Ylva/pointing.png",
        psst: "Images/Charakter/Ylva/psst.png",
        cry: "Images/Charakter/Ylva/cry.png",
        laugh: "Images/Charakter/Ylva/laugh.png",
        sit: "Images/Charakter/Ylva/sit.png",
        sittwo: "Images/Charakter/Ylva/sittwo.png",
        sittwotalk: "Images/Charakter/Ylva/sittwotalk.png",
        nails: "Images/Charakter/Ylva/nails.png",
        last: "Images/Charakter/Ylva/last.png",

        //NarratorScene
        happy: "Images/Charakter/Ylva/narrator/happy.png",
        stand: "Images/Charakter/Ylva/narrator/stand.png",
        hand: "Images/Charakter/Ylva/narrator/hand.png"


      }
    },
    riaz: {
      name: "Riaz",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        greeting: "Images/Charakter/Riaz/greeting.png",
        sad: "Images/Charakter/Riaz/sad.png",
        normal: "Images/Charakter/Riaz/normal.png",
        cry: "Images/Charakter/Riaz/cry.png",
        laugh: "Images/Charakter/Riaz/laugh.png",
        sittwo: "Images/Charakter/Riaz/sittwo.png",
        sittwoitem: "Images/Charakter/Riaz/sittwoitem.png",
        last: "Images/Charakter/Riaz/last.png",

        //NarratorScene
        happy: "Images/Charakter/Riaz/narrator/happy.png",
        hand: "Images/Charakter/Riaz/narrator/hand.png",
        stand: "Images/Charakter/Riaz/narrator/stand.png"
      }

    },

    maddox: {
      name: "Maddox",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Charakter/Maddox/normal.png",
        angry: "Images/Charakter/Maddox/angry.png",
        go: "Images/Charakter/Maddox/go.png",
        laugh: "Images/Charakter/Maddox/laugh.png",
        thinking: "Images/Charakter/Maddox/thinking.png",
        grave: "Images/Charakter/Maddox/grave1.png",
        ylvabegin: "Images/Charakter/Maddox/ylva.png"

      }
    },
    cat: {
      name: "",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "Images/Charakter/Cat/cat.png",
        last: "Images/Charakter/Cat/last.png"
      }
    },

    little: {
      name: "Little",
      origin: ƒS.ORIGIN.TOPCENTER,
      pose: {
        alone: "Images/Charakter/Little/alone.png",
        trauer: "Images/Charakter/Little/trauer.png",
        wut: "Images/Charakter/Little/wut.png",
        schmerz: "Images/Charakter/Little/schmerz.png",
        hoffnungslosigkeit: "Images/Charakter/Little/hoffnungslosigkeit.png",
        betteln: "Images/Charakter/Little/betteln.png",
        help: "Images/Charakter/Little/help.png",
        maddoxbegin: "Images/Charakter/Little/maddox.png",
        run1: "Images/Charakter/Little/run1.png",
        run2: "Images/Charakter/Little/run2.png",
        run3: "Images/Charakter/Little/run3.png"
      }
    },
    Items: {
      name: "Items",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        Schatulle: "Images/Items/schatulle.png",
        Haarklammer: "Images/Items/haarklammerk.png",
        Armband: "Images/Items/armband.png"
      }
    }

  };
  export let dataForSave = {
    Katze: {
      name: "",

    }


  };
  export let items = {
    schatulle: {
      name: "Schatulle ",
      description: "<br>Die Schatulle hast du auf der ersten Mission mit Riaz geklaut <br>",
      image: "Images/Items/schatulle.png",
      static: true,
    },
    armband: {
      name: "Armband ",
      description: "<br>Das Armband hast du an deinem Lieblingsplatz gefunden <br>",
      image: "Images/Items/armband.png",
      static: true,

    },
    haarklammer: {
      name: "Haarklammer ",
      description: "<br>Die Haarklammer gab die eine ältere Dame zur Rettung ihrer Katze <br>",
      image: "Images/Items/haarklammer.png",
      static: true,
    }
  };








  export function growAnimation(): ƒS.AnimationDefinition {
    return {
      start: { scaling: new ƒS.Position(2, 2) },
      end: { scaling: new ƒS.Position(1, 1) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function moveArmband(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(10, 50) },
      end: { translation: ƒS.positionPercent(50, 50) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function moveSchatulle(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(11, 62) },
      end: { translation: ƒS.positionPercent(20, 62) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function moveHaarklammer(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(57, 64) },
      end: { translation: ƒS.positionPercent(47, 64) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }



  // MENU - create Menu with buttons
  let gameMenu: ƒS.Menu;


  //  MENU - Audio functions

  let volume: number = 1.0;

  export function incrementSound(): void {
    if (volume >= 10) {
      return;
    }

    volume += 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function decrementSound(): void {
    if (volume <= 0) {
      return;
    }

    volume -= 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function showCredits(): void {
    ƒS.Text.addClass("credits");
    ƒS.Text.print("<h1> Credits </h1><p><b> Story: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Julia Weber <br><b> Texte: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Julia Weber <br><b> Bilder: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Julia Weber <br><b>Titelbild: </b> &nbsp; Julia Weber<br><b>Musik: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Youtube Library<br></p>");

    // showCredits();
  }

  export let inGameMenu = {
    save: "Speichern",
    load: "Laden",
    close: "Schließen",
    turnUpVolume: "+",
    turndownVolume: "-",
    credits: "Credits",
    inventar: "Inventar"
  };


  export async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        menu = false;
        break;
      case inGameMenu.turnUpVolume:
        incrementSound();
        break;
      case inGameMenu.turndownVolume:
        decrementSound();
        break;
      case inGameMenu.credits:
        showCredits();
        break;
      case inGameMenu.inventar:
        await ƒS.Inventory.open();
        break;
    }
  }


  let menu: boolean = true;
  document.addEventListener("keydown", handKeypress);
  async function handKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:

        if (menu) {

          gameMenu.close();
          menu = false;
        }
        else {
          gameMenu.open();
          menu = true;
        }
        break;
      case ƒ.KEYBOARD_CODE.C:
        showCredits();
        break;

    }

  };
  export let dataSave = {

  };
















  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu =
      ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");

    let scenes: ƒS.Scenes = [
      { scene: Prolog, name: "Prolog" },

    ];







    // start the sequence
    ƒS.Progress.go(scenes);
  }


  let uiElement: HTMLElement = document.querySelector("[type=interface]");
  dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
  dataSave = ƒS.Progress.setData(dataSave, uiElement);

}